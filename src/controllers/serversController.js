var logger = require('./../logger');
var moment = require('moment');
var uuidv4 = require('uuid/v4');
var knex = require('../db/knex')
var appTable = 'app_servers';
var tokenTable = 'app_tokens';

var tokenController = require('./tokenController');
var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

/** @module serversController */
module.exports = {

	/** Lists all the information about the application servers. */
	listServers : function(req, res) {
		var request = "GET at /api/servers";
		logger.info(request);
		queryController.selectAll(appTable)
		.then(function(servers) {
			logger.info("Showing application servers list");
			responseController.sendServers(res, servers.length, servers.length, servers);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Registers an application server. */
	registerServer : function(req, res) {
		var request = "POST at /api/servers";
		var createdBy = req.body.createdBy;
		var createdTime = req.body.createdTime;
		var name = req.body.name;
		
		logger.info(request);
		if (!createdBy || !createdTime || !name) { 
			errorController.missingParameters(res, request);
		} else {
			queryController.insert(appTable, {_ref: uuidv4(), createdBy: createdBy, createdTime: createdTime, name: name})
			.then(function(server) {
				logger.info("Creating app server token");
				var token = tokenController.createApplicationToken({id: server[0].id});
				
				queryController.insert(tokenTable, {id: server[0].id, token: token})
				.then(function() {
					logger.info("Registering application server");
					
					responseController.sendServerCreation(res, server[0], tokenController.expiration, token);
				})
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
		
	},
	
	/** Notifies server life and refreshes token if expired. */
	ping : function(req, res) {
		var request = "POST at /api/servers/ping";
		logger.info(request);
		var id = req.user.id;
		
		queryController.updateWhere(appTable, {id: id}, {lastConnection: knex.fn.now()})
		.then(function(servers) {
			var server = servers[0];
			var token = req.query.token;
			var expiresIn = req.user.exp;
			var now = moment().unix();
			if (now > expiresIn) {
				logger.info("Token has expired");
				logger.info("Revoke previous token");
			
				queryController.insert('blacklist', {jti: req.user.jti})
				.then(function() {
					logger.info("Refresh token");
						
					var newToken = tokenController.createApplicationToken({id: id});
					queryController.updateWhere(tokenTable, {id: id}, {token: newToken})
					.then(function() {
						responseController.sendPing(res, server, tokenController.expiration, newToken);
					});
				});
			} else {
				responseController.sendPing(res, server, expiresIn, token);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Obtains information about a server. */
	getInformation : function(req, res) {
		var serverId = req.params.serverId;
		var request = "GET at /api/servers/" + serverId;
		
		logger.info(request);
		queryController.selectOneWhere(appTable, {id: serverId})
		.then(function(server) {
			if (server) {
				logger.info("Obtaining information of server " + serverId);
				responseController.sendServer(res, server);
			} else {
				errorController.nonExistentResource(res, "server", request);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Updates information of a server. */
	updateInformation : function(req, res) {
		var serverId = req.params.serverId;
		var serverName = req.body.name;
		var receivedRef = req.body._ref;
		var request = "PUT at /api/servers/" + serverId;
		
		logger.info(request);
		if (!serverName || !receivedRef) {
			errorController.missingParameters(res, request);
		} else {
			queryController.selectOneWhere(appTable, {id: serverId})
			.then(function(server) {
				if (server) {
					if (server._ref != receivedRef) {
						errorController.updateConflict(res, request);
					} else {
						logger.info("Updating information of server " + serverId);
						return queryController.updateWhere(appTable, {id: serverId}, {_ref: uuidv4(), name: serverName});
					}	
				} else {
					errorController.nonExistentResource(res, "server", request);	
				}
			})
			.then(function(updatedServer) {
				if (updatedServer) {
					responseController.sendServer(res, updatedServer[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}	
		
	},
	
	/** Resets token of a server. */
	resetServerToken : function(req, res) {
		var serverId = req.params.serverId;
		var request = "POST at /api/servers/" + serverId;
		
		logger.info(request);
		queryController.selectOneWhere(tokenTable, {id: serverId})
		.then(function(server) {
				if (server) {
					var decoded = tokenController.decodeToken(server.token);
					logger.info("Revoke previous token");
					queryController.insert('blacklist', {jti: decoded.jti})
					.then(function() {
						logger.info("Reset token");
						var newToken = tokenController.createApplicationToken({id: serverId});
						queryController.updateWhere(tokenTable, {id: serverId}, {token: newToken})
						.then(function() {
							queryController.selectOneWhere(appTable, {id: serverId})
							.then(function(server) {
								responseController.sendServerCreation(res, server, tokenController.expiration, newToken);
							});
						});
					});
				} else {
					errorController.nonExistentResource(res, "server", request);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			});
	},
	
	/** Deletes a server. */
	deleteServer : function(req, res) {
		var serverId = req.params.serverId;
		var request = "DELETE at /api/servers/" + serverId;
		
		logger.info(request);
		queryController.selectOneWhere(appTable, {id: serverId})
		.then(function(server) {
			if (server) {
				logger.info("Deleting server " + serverId);
				queryController.deleteWhere(appTable, {id: serverId})
				.then( function() { 
					logger.debug("Correct removal: server " + serverId);
					res.status(204).send();
				});
							
			} else {
				errorController.nonExistentResource(res, "server", request);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	}

}

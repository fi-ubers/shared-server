var logger = require('./../logger');
var knex = require('../db/knex');
var moment = require('moment');
var appTable = 'app_servers';
var tokenTable = 'app_tokens';

var tokenController = require('./tokenController');
var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

module.exports = {
	listServers : function(req, res) {
		// Returns all the information about the indicated application servers
		logger.info("GET at /servers");
		queryController.selectAll(appTable)
		.then(function(servers) {
			logger.info("Showing aplication servers list");
			responseController.sendServers(res, servers.length, servers.length, servers);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/servers/");
		})
	},
	
	registerServer : function(req, res) {
		// Register an application server
		var createdBy = req.body.createdBy;
		var createdTime = req.body.createdTime;
		var name = req.body.name;
		
		logger.info("POST at /servers");
		if (!createdBy || !createdTime || !name) {
			errorController.missingParameters(res, "POST /api/servers");
		} else {
			queryController.insert(appTable, {createdBy: createdBy, createdTime: createdTime, name: name})
			.then(function(server) {
				logger.info("Creating app server token");
				var token = tokenController.createApplicationToken({id: server[0].id});
				
				queryController.insert(tokenTable, {id: server[0].id, token: token})
				.then(function() {
					logger.info("Registering aplication server");
					
					responseController.sendServerCreation(res, server[0], tokenController.expiration, token);
				})
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "POST /api/servers/");
			})
		}
		
	},
	
	ping : function(req, res) {
		// Notify server life
		logger.info("POST at /servers/ping");
		var id = req.user.id;
	
		queryController.selectOneWhere(appTable, {id: id})
		.then(function(server) {
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
			errorController.unexpectedError(res, error, "POST /api/servers/ping");
		})
	},
	
	serverInfo : function(req, res) {
		// Obtain information of a server
		var serverId = req.params.serverId;
		
		logger.info("GET at /servers/" + serverId);
		queryController.selectOneWhere(appTable, {id: serverId})
		.then(function(server) {
			if (server) {
				logger.info("Obtaining information of server " + serverId);
				responseController.sendServer(res, server);
			} else {
				errorController.nonExistentResource(res, "server", "GET /api/servers/" + serverId);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/servers/" + serverId);
		})
	},
	
	updateServerInfo : function(req, res) {
		// Update information of a server
		var serverId = req.params.serverId;
		var serverName = req.body.name;
		var serverRef = req.body._ref;
		
		logger.info("PUT at /servers/" + serverId);
		if (!serverName || !serverRef) {
			errorController.missingParameters(res, "PUT /api/servers/");
		} else {
			queryController.selectOneWhere(appTable, {id: serverId})
			.then(function(server) {
				if (server) {
					logger.info("Updating information of server " + serverId);
					return queryController.updateWhere(appTable, {id: serverId}, {name: serverName});	
				} else {
					errorController.nonExistentResource(res, "server", "PUT /api/servers/" + serverId);	
				}
			})
			.then(function(updatedServer) {
				if (updatedServer) {
					responseController.sendServer(res, updatedServer[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "PUT /api/servers/" + serverId);
			})
		}	
		
	},
	
	resetServerToken : function(req, res) {
		// Reset a server token
		var serverId = req.params.serverId;
		
		logger.info("POST at /servers/" + serverId);
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
					errorController.nonExistentResource(res, "server", "POST /api/servers/" + serverId);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "POST /api/servers/" + serverId);
			});
	},
	
	deleteServer : function(req, res) {
		// Delete server
		var serverId = req.params.serverId;
		
		logger.info("DELETE at /servers/" + req.params.serverId);
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
				errorController.nonExistentResource(res, "server", "DELETE /api/servers/" + serverId);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "DELETE /api/servers/" + serverId);
		})
	}

}

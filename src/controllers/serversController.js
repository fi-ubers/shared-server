var logger = require('./../logger');
var knex = require('../db/knex');
var pjson = require('../../package.json');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var uuidv4 = require('uuid/v4');
var appTable = 'app_servers';
var tokenTable = 'app_tokens';

module.exports = {
	listServers : function(req, res) {
		// Returns all the information about the indicated application servers
		logger.info("GET at /servers");
		knex.select()
			.from(appTable)
			.then(function(servers) {
				logger.info("Showing aplication servers list");
				res.status(200).send({
					metadata: {
						count: servers.length,
						total: servers.length,
						version: pjson.version
					},
					servers: servers
				})
			})
			.catch(function(error) {
				logger.error("Unexpected error: GET /api/servers");
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			})
	},
	
	registerServer : function(req, res) {
		// Register an application server
		var createdBy = req.body.createdBy;
		var createdTime = req.body.createdTime;
		var name = req.body.name;
		
		logger.info("POST at /servers");
		if (!createdBy || !createdTime || !name) {
			logger.error("Missing parameters: POST /api/servers");
			res.status(400).send({
				code: 400,
				message: "Missing parameters"
			})
		} else {
			knex(appTable)
				.insert([{createdBy: createdBy, createdTime: createdTime, name: name}])
				.returning('*')
				.then(function(server) {
					var expiresIn = moment().add(5, 'days').unix();
					logger.info("Creating app server token");
					var token = jwt.sign({
							id: server[0].id,
							jti: uuidv4()}, 
							process.env.APP_KEY, 
							{expiresIn: expiresIn});
					knex(tokenTable)
						.insert({id: server[0].id, token: token})
						.then(function() {
							logger.info("Registering aplication server");
							res.status(201).send({
								metadata: {
									version: pjson.version
								},
								server: server[0],
								token: {
									expiresAt: expiresIn,
									token: token
								}
							})
						})
				})
				.catch(function(error) {
					logger.error("Unexpected error: POST /api/servers");
					res.status(500).send({
						code: 500,
						message: "Unexpected error: " + error
					})
				
				})
				
		}
		
	},
	
	ping : function(req, res) {
		// Notify server life
		logger.info("POST at /servers/ping");
		var id = req.user.id;
		knex(appTable)
			.where('id', id)
			.first('*')
			.then(function(server) {
				var token = req.query.token;
				var expiresIn = req.user.exp;
				var now = moment().unix();
				if (now > expiresIn) {
					logger.info("Token has expired");
					logger.info("Revoke previous token");
					knex('blacklist')
						.insert({jti: req.user.jti})
						.then(function() {
							logger.info("Refresh token");
							var expires = moment().add(5, 'days').unix();
							var newToken = jwt.sign({
									id: id,
									jti: uuidv4()}, 
									process.env.APP_KEY, 
									{expiresIn: expires});
							knex(tokenTable)
								.where('id', id)
								.update({'token': newToken})
								.then(function() {
									res.status(200).send({
										metadata: {
											version: pjson.version
										},
										ping: server,
										token: {
											expiresAt: expires,
											token: newToken
										}
									})
								});
						});
				} else {
					res.status(200).send({
							metadata: {
								version: pjson.version
							},
							ping: server,
							token: {
								expiresAt: expiresIn,
								token: token
							}
					})
				}
			})
			.catch(function(error) {
				logger.error("Unexpected error: POST /api/servers/ping");
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			})
	},
	
	serverInfo : function(req, res) {
		// Obtain information of a server
		var serverId = req.params.serverId;
		
		logger.info("GET at /servers/" + serverId);
		knex(appTable)
			.where('id', serverId)
			.then(function(server) {
				if (server.length !== 0) {
					logger.info("Obtaining information of server " + serverId);
					res.status(200).send({
						metadata: {
							version: pjson.version
						},
						server: server[0]
					})
				} else {
					logger.error("Non-existent server: GET /api/servers/" + serverId);
					res.status(404).send({
						code: 404,
						message: "Non-existent server"
					})	
				}
			})
			.catch(function(error) {
				logger.error("Unexpected error: GET /api/servers/" + serverId);
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			})
	},
	
	updateServerInfo : function(req, res) {
		// Update information of a server
		var serverId = req.params.serverId;
		var serverName = req.body.name;
		var serverRef = req.body._ref;
		
		logger.info("PUT at /servers/" + serverId);
		if (!serverName || !serverRef) {
			logger.error("Missing parameters: PUT /api/servers/" + serverId);
			res.status(400).send({
				code: 400,
				message: "Missing parameters"
			})
		} else {
			knex.select().from(appTable)
				.where('id', serverId)
				.then(function(server) {
					if (server.length !== 0) {
						logger.info("Updating information of server " + serverId);
						return knex.select()
							.from(appTable)
							.where('id', serverId)
							.update({'name': serverName})
							.returning('*');
							
					} else {
						logger.error("Non-existent server: PUT /api/servers/" + serverId);
						res.status(404).send({
							code: 404,
							message: "Non-existent server"
						})	
					}
				})
				.then(function(newServer) {
					if (newServer) {
						res.status(200).send({
							metadata: {
								version: pjson.version
							},
							server: newServer[0]
						})
					}
				})
				.catch(function(error) {
					logger.error("Unexpected error: PUT /api/servers/" + serverId);
					res.status(500).send({
						code: 500,
						message: "Unexpected error: " + error
					})
				})
		}	
		
	},
	
	resetServerToken : function(req, res) {
		// Reset a server token
		var serverId = req.params.serverId;
		
		logger.info("POST at /servers/" + serverId);
		knex(tokenTable)
			.where(id, serverId)
			.first('*')
			.then(function(token) {
				if (token) {
					var decoded = jwt.decode(token);
					logger.info("Revoke previous token");
					knex('blacklist')
						.insert({jti: decoded.jti})
						.then(function() {
							logger.info("Reset token");
							var expires = moment().add(5, 'days').unix();
							var newToken = jwt.sign({
									id: serverId,
									jti: uuidv4()}, 
									process.env.APP_KEY, 
									{expiresIn: expires});
							knex(tokenTable)
								.where('id', serverId)
								.update({'token': newToken})
								.then(function() {
									knex(appTable)
										.where('id', serverId)
										.first('*')
										.then(function(server) {
											res.status(201).send({
												metadata: {
													version: pjson.version
												},
												server: server,
												token: {
													expiresAt: expires,
													token: newToken
												}
											})
										});
								});
						});
				} else {
					logger.error("Non-existent server: PUT /api/servers/" + serverId);
					res.status(404).send({
						code: 404,
						message: "Non-existent server"
					})
				}
			})
			.catch(function(error) {
				logger.error("Unexpected error: PUT /api/servers/" + serverId);
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			});
	},
	
	deleteServer : function(req, res) {
		// Delete server
		var serverId = req.params.serverId;
		
		logger.info("DELETE at /servers/" + req.params.serverId);
		knex.select()
			.from(appTable)
			.where('id', serverId)
			.then(function(server) {
				if (server.length !== 0) {
					logger.info("Deleting server " + serverId);
					knex.select()
						.from(appTable)
						.where('id', serverId)
						.del()
						.then( function() { 
							logger.debug("Correct removal: server " + serverId);
							res.status(204).send()
						});
							
				} else {
					logger.error("Non-existent server: DELETE /api/servers/" + serverId);
					res.status(404).send({
						code: 404,
						message: "Non-existent server"
					})	
				}
			})
			.catch(function(error) {
				logger.error("Unexpected error: PUT /api/servers/" + serverId);
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			})
	}

}

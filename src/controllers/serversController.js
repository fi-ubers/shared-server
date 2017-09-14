var logger = require('./../logger');
var knex = require('../db/knex');
var pjson = require('../../package.json');
var table_name = 'app_servers';

module.exports = {
	listServers : function(req, res) {
		// Returns all the information about the indicated application servers
		logger.info("GET at /servers");
		knex.select()
			.from('app_servers')
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
				message: "Missing parameters: " + error
			})
		} else {
			knex(table_name)
				.insert([{createdBy: createdBy, createdTime: createdTime, name: name}], '*')
				.then(function(server) {
					logger.info("Registering aplication server");
					res.status(201).send({
						metadata: {
							version: pjson.version
						},
						server: server,
						token: {
						}
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
		//logger.info("POST at /servers/ping");
		// Notify server life
	},
	
	serverInfo : function(req, res) {
		// Obtain information of a server
		var serverId = req.params.serverId;
		
		logger.info("GET at /servers/" + serverId);
		knex(table_name)
			.where('id', serverId)
			.then(function(server) {
				if (server.length !== 0) {
					logger.info("Obtaining information of server " + serverId);
					res.status(200).send({
						metadata: {
							version: pjson.version
						},
						server: server
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
			knex.select().from(table_name)
				.where('id', serverId)
				.then(function(server) {
					if (server.length !== 0) {
						logger.info("Updating information of server " + serverId);
						return knex.select()
							.from(table_name)
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
					res.status(200).send({
						metadata: {
							version: pjson.version
						},
						server: newServer
					})
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
		//logger.info("POST at /servers/" + req.params.serverId);
		// Reset a server token
	},
	
	deleteServer : function(req, res) {
		// Delete server
		var serverId = req.params.serverId;
		
		logger.info("DELETE at /servers/" + req.params.serverId);
		knex.select()
			.from(table_name)
			.where('id', serverId)
			.then(function(server) {
				if (server.length !== 0) {
					logger.info("Deleting server " + serverId);
					knex.select()
						.from(table_name)
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

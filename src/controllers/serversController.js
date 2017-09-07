var logger = require('./../logger');

module.exports = {
	list : function(req, res) {
		logger.info("GET at /servers");
		res.send("Application servers list");
	},
	
	register : function(req, res) {
		//logger.info("POST at /servers");
		// Register an application server
	},
	
	ping : function(req, res) {
		//logger.info("POST at /servers/ping");
		// Notify server life
	},
	
	serverInfo : function(req, res) {
		logger.info("GET at /servers/" + req.params.serverId);
		res.send("Obtain information of a server");
	},
	
	updateServerInfo : function(req, res) {
		//logger.info("PUT at /");
		// Update information of a server
	},
	
	resetServerToken : function(req, res) {
		//logger.info("POST at /servers/" + req.params.serverId);
		// Reset a server token
	},
	
	deleteServer : function(req, res) {
		//logger.info("DELETE at /servers/" + req.params.serverId);
		// Delete server
	}

}

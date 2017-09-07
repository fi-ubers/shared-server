var logger = require('./../logger');

module.exports = {
	list : function(req, res) {
		logger.info("GET at /business-users");
		res.send("Business users list");
	},
	
	register : function(req, res) {
		//logger.info("POST at /business-users");
		// Register a business user
	},
	
	myInformation : function(req, res) {
		logger.info("GET at /business-users/me");
		res.send("Obtain information of the connected business user");
	},
	
	updateMyInfo : function(req, res) {
		//logger.info("PUT at /business-users/me");
		// Update user connected business information
	},
	
	deleteUser : function(req, res) {
		//logger.info("DELETE at /business-users/" + req.params.userId);
		// Delete business user
	},
	
	userInformation : function(req, res) {
		logger.info("GET at /business-users/" + req.params.userId);
		res.send("Obtain information of a business user");
	},
	
	updateUserInfo : function(req, res) {
		//logger.info("PUT at /business-users/" + req.params.userId);
		// Update information of a business user
	}

}

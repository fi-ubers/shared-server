var logger = require('./../logger');
var userTable = 'application_users';

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

module.exports = {
	listUsers : function(req, res) {
		// Returns all the information about the indicated users
		logger.info("GET at /users");
		queryController.selectAll(userTable)
		.then(function(users) {
			logger.info("Showing users list");
			responseController.sendUsers(res, users.length, users.length, users);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/users/");
		})
	},
	
	register : function(req, res) {
		//logger.info("POST at /users");
		// Register user
	},
	
	validate : function(req, res) {
		//logger.info("POST at /users/validate");
		// Validate app user
	},
	
	deleteUser : function(req, res) {
		//logger.info("DELETE at /users/" + req.params.userId);
		// Delete user req.params.userId
	},
	
	information : function(req, res) {
		logger.info("GET at /users/" + req.params.userId);
		res.send("Obtain user information");
	},
	
	updateInfo : function(req, res) {
		//logger.info("PUT at /users/" + req.params.userId);
		// Update user information
	},
	
	userCarsList : function(req, res) {
		logger.info("GET at /users/" + req.params.userId + "/cars");
		res.send("List of user cars");
	},
	
	registerUserCar : function(req, res) {
		//logger.info("POST at /users/" + req.params.userId + "/cars");
		// Register user car
	},
	
	deleteUserCar : function(req, res) {
		//logger.info("DELETE at /users/" + req.params.userId + "/cars" + req.params.carId);
		// Delete car
	},
	
	userCarInfo : function(req, res) {
		logger.info("GET at /users/" + req.params.userId + "/cars" + req.params.carId);
		res.send("Obtain car " + req.params.carId + " information - user " + req.params.userId);
	},
	
	updateCarInfo :  function(req, res) {
		//logger.info("PUT at /users/" + req.params.userId +"/cars" + req.params.carId);
		// Update car information
	},
	
	transactions :  function(req, res) {
		logger.info("GET at /users/" + req.params.userId + "/transactions");
		res.send("List of transactions of user " + req.params.userId);
	},
	
	makePayment : function(req, res) {
		//logger.info("POST at /users/" + req.params.userId + "/transactions");
		// The user makes a payment
	},
	
	trips : function(req, res) {
		logger.info("GET at /users/" + req.params.userId + "/trips");
		res.send("List of user " + req.params.userId + " trips");
	}

}

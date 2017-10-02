var logger = require('./../logger');
var businessUsersTable = 'business_users';

var queryController = require('./queryController');
var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

module.exports = {
	list : function(req, res) {
		// Business users list
		logger.info("GET at /business-users");
		
		queryController.selectAll(businessUsersTable)
		.then(function(users) {
			logger.info("Showing business users list");
			responseController.sendBusinessUsers(res, users.length, users.length, users);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/business-users/");
		})
	},
	
	register : function(req, res) {
		// Register a business user
		var username = req.body.username;
		var password = req.body.password;
		var name = req.body.name;
		var surname = req.body.surname;
		var roles = req.body.roles;
		
		logger.info("POST at /business-users");
		if (!username || !password || !name || !surname || !roles) {
			errorController.missingParameters(res, "POST /api/business-users");
		} else {
			logger.info("Registering business user");
			queryController.insert(businessUsersTable, {username: username, 
								password: password, 
								name: name,
								surname: surname,
								roles: roles})
			.then(function(users) {
				responseController.sendBusinessUser(res, 201, users[0]);	
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "POST /api/business-users/");
			})
		}
	},
	
	myInformation : function(req, res) {
		// Obtain information of the connected business user
		var id = req.user.id;
		
		logger.info("GET at /business-users/me");
		queryController.selectOneWhere(businessUsersTable, {id: id})
		.then(function(user) {
			if (user) {
				responseController.sendBusinessUser(res, 200, user);
			} else {
				errorController.nonExistentResource(res, "user", "GET /api/business-users/me with id: " + id);
			}
		})
		.catch(function(error) {
				errorController.unexpectedError(res, error, "GET /api/business-users/");
		});
	},
	
	updateMyInfo : function(req, res) {
		// Update user connected business information
		var id = req.user.id;
		var username = req.body.username;
		var password = req.body.password;
		var name = req.body.name;
		var surname = req.body.surname;
		var roles = req.body.roles;
		
		logger.info("PUT at /business-users/me");
		if (!username || !password || !name || !surname) {
			errorController.missingParameters(res, "PUT /api/business-users/me");
		} else {
			queryController.selectOneWhere(businessUsersTable, {id: id})
			.then(function(user) {
				if (user) {
					logger.info("Updating information of business user " + id);
					return queryController.updateWhere(businessUsersTable, {id: id}, {username: username, 
													password: password, 
													name: name,
													surname: surname});	
				} else {
					errorController.nonExistentResource(res, "user", "PUT /api/business-users/me with id: " + id);	
				}
			})
			.then(function(updatedUser) {
				if (updatedUser) {
					responseController.sendBusinessUser(res, 200, updatedUser[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "PUT /api/business-users/me");
			})
		}
	},
	
	deleteUser : function(req, res) {
		// Delete business user
		var userId = req.params.userId;
		
		logger.info("DELETE at /business-users/" + userId);
		queryController.selectOneWhere(businessUsersTable, {id: userId})
		.then(function(user) {
			if (user) {
				logger.info("Deleting business user " + userId);
				queryController.deleteWhere(businessUsersTable, {id: userId})
				.then( function() { 
					logger.debug("Correct removal: business user " + userId);
					res.status(204).send();
				});
			} else {
				errorController.nonExistentResource(res, "user", "DELETE /api/business-users/" + userId);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "DELETE /api/business-users/" + userId);
		})
	},
	
	userInformation : function(req, res) {
		//Obtain information of a business user
		var userId =  req.params.userId;
		
		logger.info("GET at /business-users/" + userId);
		queryController.selectOneWhere(businessUsersTable, {id: userId})
		.then(function(user) {
			if (user) {
				responseController.sendBusinessUser(res, 200, user);
			} else {
				errorController.nonExistentResource(res, "user", "GET /api/business-users/" + userId);
			}
		})
		.catch(function(error) {
				errorController.unexpectedError(res, error, "GET /api/business-users/" + userId);
		});
	},
	
	updateUserInfo : function(req, res) {
		// Update information of a business user
		var userId =  req.params.userId;
		
		logger.info("PUT at /business-users/" + userId);
		if (!username || !password || !name || !surname || !roles) {
			errorController.missingParameters(res, "PUT /api/business-users/" + userId);
		} else {
			queryController.selectOneWhere(businessUsersTable, {id: userId})
			.then(function(user) {
				if (user) {
					logger.info("Updating information of business user " + userId);
					return queryController.updateWhere(businessUsersTable, {id: userId}, {username: username, 
													password: password, 
													name: name,
													surname: surname,
													roles: roles});	
				} else {
					errorController.nonExistentResource(res, "user", "PUT /api/business-users/" + userId);	
				}
			})
			.then(function(updatedUser) {
				if (updatedUser) {
					responseController.sendBusinessUser(res, 200, updatedUser[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "PUT /api/business-users/" + userId);
			})
		}
	}

}

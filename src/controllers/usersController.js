var logger = require('./../logger');
var uuidv4 = require('uuid/v4');
var userTable = 'application_users';
var visibleUserFields = ['id', '_ref', 'applicationOwner', 'type', 'cars', 'username', 'name', 'surname', 'country', 'email', 'birthdate', 'images', 'balance'];

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

module.exports = {
	listUsers : function(req, res) {
		// Returns all the information about the indicated users
		logger.info("GET at /api/users");
		queryController.selectSome(userTable, visibleUserFields)
		.then(function(users) {
			logger.info("Showing users list");
			responseController.sendUsers(res, users.length, users.length, users);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/users/");
		})
	},
	
	register : function(req, res) {
		// Register user
		var type = req.body.type;
		var username = req.body.username;
		var password = req.body.password;
		var fb = req.body.fb;
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var country = req.body.country;
		var email = req.body.email;
		var birthdate = req.body.birthdate;
		var images = req.body.images;
		
		logger.info("POST at /users");
		// Agregar !fb ?? 
		if (!type || !username || !password || !firstname || ! lastname || !country || !email || !birthdate || !images) { 
			errorController.missingParameters(res, "POST /api/users");
		} else {
			logger.info("Registering user");
			queryController.insertAndReturnSome(userTable, {
							_ref: uuidv4(), 
							applicationOwner: req.user.id,
							type: type,
							username: username,
							password: password,
							fb: fb,
							name: firstname, 
							surname: lastname,
							country:country,
							email: email,
							birthdate: birthdate,
							images: images}, visibleUserFields)
			.then(function(user) {
				responseController.sendUser(res, 201, user[0]);	
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "POST /api/users/");
			})
		}
	},
	
	validate : function(req, res) {
		// Validate app user
		var username = req.body.username;
		var password = req.body.password;
		var facebookAuthToken = req.body.facebookAuthToken;
		
		logger.info("POST at /users/validate");
		if (!username || (!password && !facebookAuthToken)) { 
			errorController.missingParameters(res, "POST /api/users/validate");
		} else {
			if (password) {
				queryController.selectOneWhere(userTable, {username: username, password: password}, visibleUserFields)
				.then(function(user) {
					if (user) {
						logger.info("Validation success");
						responseController.sendUser(res, 200, user);
					} else {
						errorController.failedValidation(res, 'POST /api/users/validate');
					}
				})
				.catch(function(error) {
					errorController.unexpectedError(res, error, "POST /api/users/validate");
				});
			} else {
				// TODO: fb auth token validation
			}
		}
	},
	
	deleteUser : function(req, res) {
		// Delete user by id
		var userId = req.params.userId;
		
		logger.info("DELETE at /api/users/" + userId);
		queryController.selectOneWhere(userTable, {id: userId})
		.then(function(user) {
			if (user) {
				logger.info("Deleting user " + userId);
				queryController.deleteWhere(userTable, {id: userId})
				.then( function() { 
					logger.debug("Correct removal: user " + userId);
					res.status(204).send();
				});
			} else {
				errorController.nonExistentResource(res, "user", "DELETE /api/users/" + userId);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "DELETE /api/users/" + userId);
		})
		
	},
	
	information : function(req, res) {
		// Obtain user information by id
		var userId = req.params.userId;
		
		logger.info("GET at /users/" + userId);
		queryController.selectOneWhere(userTable, {id: userId}, visibleUserFields)
		.then(function(user) {
			if (user) {
				responseController.sendUser(res, 200, user);
			} else {
				errorController.nonExistentResource(res, "user", "GET /api/users/" + userId);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, "GET /api/users/" + userId);
		});
	},
	
	updateInfo : function(req, res) {
		// Update user information by id
		var userId = req.params.userId;
		var receivedRef = req.body._ref;
		var type = req.body.type;
		var username = req.body.username;
		var password = req.body.password;
		var fb = req.body.fb;
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var country = req.body.country;
		var email = req.body.email;
		var birthdate = req.body.birthdate;
		var images = req.body.images;
		
		logger.info("PUT at /users/" + userId);
		// Agregar !fb ?? 
		if (!receivedRef || !type || !username || !password || !firstname || ! lastname || !country || !email || !birthdate || !images) { 
			errorController.missingParameters(res, "PUT /api/users/" + userId);
		} else {
			queryController.selectOneWhere(userTable, {id: userId})
			.then(function(user) {
				if (user) {
					if (user._ref != receivedRef) {
						errorController.updateConflict(res, "PUT /api/users/" + userId);
					} else {
						logger.info("Updating information of user " + userId);
						return queryController.updateWhere(userTable, {id: userId}, {
													_ref: uuidv4(),
													type: type,
													username: username, 
													password: password, 
													fb: fb,
													name: firstname,
													surname: lastname,
													country: country,
													email: email,
													birthdate: birthdate,
													images: images}, 
													visibleUserFields);
					}
				} else {
						errorController.nonExistentResource(res, "user", "PUT /api/users/" + userId);
				}
			})
			.then(function(updatedUser) {
				if (updatedUser) {
					responseController.sendUser(res, 200, updatedUser[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, "PUT /api/users/" + userId);
			})
		}
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

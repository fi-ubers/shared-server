var logger = require('./../logger');
var uuidv4 = require('uuid/v4');
var knex = require('../db/knex');
var userTable = 'application_users';
var carTable = 'cars';
var transactionTable = 'transactions';
var tripTable = 'trips';
var visibleUserFields = ['id', '_ref', 'applicationOwner', 'type', 'cars', 'username', 'name', 'surname', 'country', 'email', 'birthdate', 'images', 'balance'];
var visibleTransactionFields = ['id', 'trip', 'timestamp', 'cost', 'description', 'data'];
var visibleTripFields = ['id', 'applicationOwner', 'driver', 'passenger', 'start', 'end', 'totalTime', 'waitTime', 'travelTime', 'distance', 'route', 'cost'];

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');
const paymentAPI = require('../../config/paymentAPI');
var paymentController = require('./paymentController');
const tokenController = require('./tokenController');
var balanceController = require('./balanceController');

/** @module usersController */
module.exports = {

	/** Lists all the information about the users. */
	listUsers : function(req, res) {
		var request = "GET at /api/users";
		logger.info(request);
		queryController.selectSome(userTable, visibleUserFields)
		.then(function(users) {
			queryController.selectAll(carTable)
			.then(function(cars) {
				for (var i = 0; i < cars.length; i++) {
					userId = cars[i].owner - 1;
					users[userId].cars.push(cars[i]);
				}
				responseController.sendUsers(res, users.length, users.length, users);
			})
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Registers user. */
	register : function(req, res) {
		var request = "POST at /api/users";
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
		
		logger.info(request);
		// Agregar !fb ?? 
		if (!type || !username || !password || !firstname || !lastname || !country || !email || !birthdate || !images) { 
			errorController.missingParameters(res, "POST /api/users");
		} else {
			logger.info("Registering user");
			queryController.insertAndReturnSome(userTable, {
							_ref: uuidv4(), 
							applicationOwner: req.user.id,
							type: type,
							cars: [],
							username: username,
							password: password,
							fb: fb,
							name: firstname, 
							surname: lastname,
							country:country,
							email: email,
							birthdate: birthdate,
							images: images,
							balance: []}, visibleUserFields)
			.then(function(user) {
				responseController.sendUser(res, 201, user[0]);	
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Validates an application user by its credentials. */
	validate : function(req, res) {
		var request = "POST at /api/users/validate";
		var username = req.body.username;
		var password = req.body.password;
		var facebookAuthToken = req.body.facebookAuthToken;
		
		logger.info(request);
		if (!username || (!password && !facebookAuthToken)) { 
			errorController.missingParameters(res, request);
		} else if (password) {
			queryController.selectOneWhere(userTable, {username: username, password: password}, visibleUserFields)
			.then(function(user) {
				if (user) {
					logger.info("Validation success");
					queryController.selectAllWhere(carTable, {owner: user.id})
					.then(function(userCars) {
						user.cars = userCars;
						responseController.sendUser(res, 200, user);
					})
				} else {
					errorController.failedValidation(res, request);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			});
		} else {
			// TODO: fb auth token validation
		}
	},
	
	/** Deletes a business user. */
	deleteUser : function(req, res) {
		var userId = req.params.userId;
		var request = "DELETE at /api/users/" + userId;
		
		logger.info(request);
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
				errorController.nonExistentResource(res, "user", request);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
		
	},
	
	/** Obtains information of the user. */
	getInformation : function(req, res) {
		var userId = req.params.userId;
		var request = "GET at /api/users/" + userId;
		
		logger.info(request);
		queryController.selectOneWhere(userTable, {id: userId}, visibleUserFields)
		.then(function(user) {
			if (user) {
				queryController.selectAllWhere(carTable, {owner: userId})
				.then(function(userCars) {
					user.cars = userCars;
					responseController.sendUser(res, 200, user);
				})
			} else {
				errorController.nonExistentResource(res, "user", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	},
	
	/** Updates information of the user. */
	updateInformation : function(req, res) {
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
		var request = "PUT at /api/users/" + userId;
		
		logger.info(request);
		// Agregar !fb ?? 
		if (!receivedRef || !type || !username || !password || !firstname || !lastname || !country || !email || !birthdate || !images) { 
			errorController.missingParameters(res, "PUT /api/users/" + userId);
		} else {
			queryController.selectOneWhere(userTable, {id: userId})
			.then(function(user) {
				if (user) {
					if (user._ref != receivedRef) {
						errorController.updateConflict(res, request);
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
					errorController.nonExistentResource(res, "user", request);
				}
			})
			.then(function(updatedUser) {
				if (updatedUser) {
					queryController.selectAllWhere(carTable, {owner: userId})
					.then(function(userCars) {
						updatedUser[0].cars = userCars;
						responseController.sendUser(res, 200, updatedUser[0]);
					})
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Lists all the information about the cars of a user. */
	listUserCars : function(req, res) {
		var userId = req.params.userId;
		var request = "GET at /api/users/" + userId + "/cars";
		
		logger.info(request);
		queryController.selectAllWhere(carTable, {owner: userId})
		.then(function(cars) {
			logger.info("Showing cars list");
			responseController.sendCars(res, cars.length, cars.length, cars);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Registers a user car. */
	registerUserCar : function(req, res) {
		var userId = req.params.userId;
		var properties = req.body.properties;
		var request = "POST at /api/users/" + userId + "/cars";
		
		logger.info(request);
		if (!properties) {
			errorController.missingParameters(res, request);
		} else {
			logger.info("Registering user car");
			queryController.insert(carTable, { _ref: uuidv4(),
								owner: userId,
								properties: properties})
			.then(function(cars) {
				responseController.sendCar(res, 201, cars[0]);	
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Deletes a user car. */
	deleteUserCar : function(req, res) {
		var userId = req.params.userId;
		var carId = req.params.carId;
		var request = "DELETE at /api/users/" + userId + "/cars/" + carId;
		
		logger.info(request);
		queryController.selectOneWhere(carTable, {id: carId, owner: userId})
		.then(function(car) {
			if (car) {
				logger.info("Deleting car " + carId + " of user " + userId);
				queryController.deleteWhere(carTable, {id: carId, owner: userId})
				.then( function() { 
					logger.debug("Correct removal: car " + carId + "of user " + userId);
					res.status(204).send();
				});
			} else {
				errorController.nonExistentResource(res, "car", request);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Obtains information about a user car. */
	getCarInformation : function(req, res) {
		var userId = req.params.userId;
		var carId = req.params.carId;
		var request = "GET at /api/users/" + userId + "/cars/" + carId;
		
		logger.info(request);
		queryController.selectOneWhere(carTable, {id: carId, owner: userId})
		.then(function(car) {
			if (car) {
				responseController.sendCar(res, 200, car);
			} else {
				errorController.nonExistentResource(res, "car", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	},
	
	/** Updates information of a user car. */
	updateCarInformation :  function(req, res) {
		var userId = req.params.userId;
		var carId = req.params.carId;
		var receivedRef = req.body._ref;
		var properties = req.body.properties;
		var request = "PUT at /api/users/" + userId + "/cars/" + carId;
		
		logger.info(request);
		if (!receivedRef || !properties) {
			errorController.missingParameters(res, request);
		} else {
			queryController.selectOneWhere(carTable, {id: carId, owner: userId})
			.then(function(car) {
				if (car) {
					if (car._ref != receivedRef) {
						errorController.updateConflict(res, request);
					} else {
						logger.info("Updating information car " + carId + " of user " + userId);
						return queryController.updateWhere(carTable, {id: carId, owner: userId}, {
													_ref: uuidv4(),
													properties: properties});
					}
				} else {
					errorController.nonExistentResource(res, "car", request);
				}
			})
			.then(function(updatedCar) {
				if (updatedCar) {
					responseController.sendCar(res, 200, updatedCar[0]);
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Lists all the transactions that belongs to the user. */
	getTransactions :  function(req, res) {
		var userId = req.params.userId;
		var request = "GET at /api/users/" + userId + "/transactions";
		
		logger.info(request);
		queryController.selectAllWhere(transactionTable, {user: userId}, visibleTransactionFields)
		.then(function(transactions) {
			if (transactions.length > 0) {
				logger.info("Showing transactions list");
				responseController.sendTransactions(res, transactions.length, transactions.length, transactions);
			} else {
				errorController.nonExistentResource(res, "user", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Makes a payment for the user. */
	makePayment : function(req, res) {
		
		var userId = req.params.userId;
		var request = "POST at /users/" + userId + "/transactions";
		
		// No hay body en la API, asumo que recibe los atributos de la transaccion del error
		var cost = req.body.cost;
		var tripId = req.body.trip;
		var description = req.body.description;
		var paymethod = req.body.paymethod;
		
		var paymentData = {
			currency: cost.currency,
			value: cost.value,
			paymethod: paymethod.parameters
		};
		
		tokenController.generatePaymentToken().then(function(body) {
			logger.info("Making trip payment");	
			paymentController.createPayment(body.access_token, paymentData)
			.then(function(response) {
				logger.info("Payment success");
				logger.info("Creating payment transaction");
				var transaction = {
					trip: tripId,
					timestamp: knex.fn.now(),
					cost: cost,
					description: description,
					user: userId
				};
			
				balanceController.manageBalance(userId, cost, 'positive');	
				queryController.insertAndReturnSome(transactionTable, transaction, visibleTransactionFields)
				.then(function(transaction) {
					responseController.sendTransaction(res, 200, transaction[0]);
				})
			})
		}).catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Lists all the trips of the user. */
	getTrips : function(req, res) {
		var userId = req.params.userId;
		var request = "GET at /api/users/" + userId + "/trips";
		
		logger.info(request);
		queryController.selectAllWhere(tripTable, function() { this.where('driver', userId).orWhere('passenger', userId) }, visibleTripFields)
		.then(function(trips) {
			if (trips.length > 0) {
				logger.info("Showing trips list");
				responseController.sendTrips(res, trips.length, trips.length, trips);
			} else {
				errorController.nonExistentResource(res, "user", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	}

}

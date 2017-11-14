var logger = require('./../logger');
var knex = require('../db/knex');
var Rules = require('../services/rulesService');
var serialize = require('serialize-javascript');
var deserialize = str => eval('(' + str + ')');
var tripTable = 'trips';
var transactionTable = 'transactions';
var ruleTable = 'rules';
var userTable = 'application_users';
var visibleTripFields = ['id', 'applicationOwner', 'driver', 'passenger', 'start', 'end', 'totalTime', 'waitTime', 'travelTime', 'distance', 'route', 'cost'];

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');
var paymentController = require('./paymentController');
var tokenController = require('./tokenController');
var balanceController = require('./balanceController');

function calculateCost(userId, tripData) {
	// Run 'active' rules
	return queryController.selectAllWhere(ruleTable, {active: true})
	.then(function(selectedRules) {
		return queryController.selectAll(tripTable)
		.then(function(trips) {
			return queryController.selectOneWhere(userTable, {id: userId})
			.then(function(userData) {
				rules = selectedRules.map(rule => deserialize(rule.blob));
				var userTrips = trips.filter(trip => trip.passenger == userId);
				var fact = {
					trips: trips,
					userTrip: tripData,
					user: userData,
					cost: 0,
					discounts: [],
					surcharges: [],
					canTravel: true,
					firstTrip: userTrips.length == 0
				}
				
				return Rules.execute(fact, rules).then(function(result) {
					if (result.free)
						return 0;
					
					if (!result.canTravel)
						return -1;
						
					var cost = result.cost;
					// Apply discounts
					for(var i = 0; i < result.discounts.length; i++) {
						cost = cost - (cost * result.discounts[i]);
					}
				
					// Apply surcharges
					for(var i = 0; i < result.surcharges.length; i++) {
						cost = cost + (cost * result.surcharges[i]);
					}
				
					if (result.minCost && (cost < result.minCost))
						return result.minCost;

					return parseFloat(cost.toFixed(2));
				})
			})
			
		})
	})
}

/** @module tripsController */
module.exports = {

	/** Lists all the information about the trips. */
	list : function(req, res) {
		var request = "GET at /api/trips";
		logger.info(request);
		queryController.selectSome(tripTable, visibleTripFields)
		.then(function(trips) {
			responseController.sendTrips(res, trips.length, trips.length, trips);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Registers a trip. */
	register : function(req, res) {
		var request = "POST at /api/trips";
		var driver = req.body.trip.driver;
		var passenger = req.body.trip.passenger;
		var start = req.body.trip.start;
		var end = req.body.trip.end;
		var totalTime = req.body.trip.totalTime;
		var waitTime = req.body.trip.waitTime;
		var travelTime = req.body.trip.travelTime;
		var distance = req.body.trip.distance;
		var route = req.body.trip.route;
		var paymethod = req.body.paymethod;

		logger.info(request);
		if (!driver || !passenger || !start || !end || !totalTime || !waitTime || !travelTime || !distance || !route || !paymethod) { 
			errorController.missingParameters(res, request);
		} else {
			logger.info("Using the rules engine to calculate the cost of the trip");
			
			var promises = [];
			promises.push(calculateCost(passenger, req.body.trip));
			//promises.push(calculateGain(driver, req.body.trip));
			Promise.all(promises)
			.then(function(calculatedValues) {
				var costValue = calculatedValues[0];
				if (costValue == -1) {
					return errorController.unauthorized(res, "User with negative balance " + request);
				}
				var cost = { currency: "ARS", value: costValue };
			
				logger.info("Registering trip");	
				queryController.insertAndReturnSome(tripTable, {
					applicationOwner: req.user.id,
					driver: driver,
					passenger: passenger, 
					start: start, 
					end: end,
					totalTime: totalTime,
					waitTime: waitTime,
					travelTime: travelTime,
					distance: distance,
					route: route,
					cost: cost,
					paymethod: paymethod
				}, visibleTripFields)
				.then(function(trip) {
			
					logger.info("Creating transactions for passenger and driver");
					var tripId = trip[0].id;
			
					var driverTransaction = {
						trip: tripId,
						timestamp: knex.fn.now(),
						cost: cost,
						description: "Trip gain",
						user: driver
					};
				
					var passengerTransaction = {
						trip: tripId,
						timestamp: knex.fn.now(),
						cost: {
							currency: cost.currency,
							value: -cost.value
						},
						description: "Trip cost",
						user: passenger
					};
				
					queryController.insertWithoutReturn(transactionTable, driverTransaction);			
					queryController.insertWithoutReturn(transactionTable, passengerTransaction);
				
					balanceController.manageBalance(driver, cost, 'positive');
				
					if (paymethod.name == "card") {
						balanceController.manageBalance(passenger, cost, 'negative');

						logger.info("Making trip payment");	
						tokenController.generatePaymentToken().then(function(body) {
							paymethod.parameters.method = paymethod.name;
							var paymentData = {
								currency: cost.currency,
								value: cost.value,
								paymethod: paymethod.parameters
							};
						
							paymentController.createPayment(body.access_token, paymentData)
							.then(function(response) {
								logger.info("Payment success");
								logger.info("Creating payment transaction");
								var paymentTransaction = {
									trip: tripId,
									timestamp: knex.fn.now(),
									cost: cost,
									description: "Trip card payment",
									user: passenger
								};
								queryController.insertWithoutReturn(transactionTable, paymentTransaction);
								balanceController.manageBalance(passenger, cost, 'positive');
								responseController.sendTrip(res, 201, trip[0]);
							})
							.catch(function(error) {
								logger.error("Payment fail");	
								errorController.paymentError(res, error, request, { trip: tripId, cost: cost, description: "Trip payment", paymethod: paymethod });
							})
						})
						.catch(function(error) {
								logger.error("Payment token fail");	
								errorController.unexpectedError(res, error, request);
						})
					
					} else {
						logger.info("Creating payment transaction with cash");
						var cashPaymentTransaction = {
							trip: tripId,
							timestamp: knex.fn.now(),
							cost: cost,
							description: "Trip cash payment",
							user: passenger
						};
						queryController.insertWithoutReturn(transactionTable, cashPaymentTransaction);
						responseController.sendTrip(res, 201, trip[0]);
					}
				})
				.catch(function(error) {
					errorController.unexpectedError(res, error, request);
				})
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Estimates the value of a trip. */
	estimateValue : function(req, res) {
		//logger.info("POST at /trips/estimate");
		// Estimate the value of a trip
	},
	
	/** Obtains the information of a trip. */
	getInformation : function(req, res) {
		var tripId = req.params.tripId;
		var request = "GET at /api/trips/" + tripId;
		
		logger.info(request);
		queryController.selectOneWhere(tripTable, {id: tripId}, visibleTripFields)
		.then(function(trip) {
			if (trip) {
				responseController.sendTrip(res, 200, trip);
			} else {
				errorController.nonExistentResource(res, "trip", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	}
	
}

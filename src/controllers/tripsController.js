var logger = require('./../logger');
var knex = require('../db/knex');
var tripTable = 'trips';
var transactionTable = 'transactions';
var usersTable = 'application_users';
var visibleTripFields = ['id', 'applicationOwner', 'driver', 'passenger', 'start', 'end', 'totalTime', 'waitTime', 'travelTime', 'distance', 'route', 'cost'];

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');
var paymentController = require('./paymentController');
var tokenController = require('./tokenController');

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
			logger.debug("Using rules engine to calculate the cost of the trip");
			// TODO: Calculate cost
			var costValue = 100;
			var cost = { currency: "ARS", value: costValue };
			paymethod.parameters.method = paymethod.paymethod;
			var paymentData = {
				currency: cost.currency,
				value: cost.value,
				paymethod: paymethod.parameters
			};
			
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
				tokenController.generatePaymentToken().then(function(body) {
					paymentController.createPayment(body.access_token, paymentData).then(function(response) {
						var passengerTransaction = {
							id: response.transaction_id,
							trip: trip[0].id,
							timestamp: knex.fn.now(),
							cost: {
								currency: cost.currency,
								value: -cost.value
							},
							description: "Trip payment",
							user: passenger
						};
						var driverTransaction = {
							id: response.transaction_id,
							trip: trip[0].id,
							timestamp: knex.fn.now(),
							cost: cost,
							description: "Trip payment",
							user: driver
						};
						queryController.insertWithoutReturn(transactionTable, passengerTransaction);
						queryController.insertWithoutReturn(transactionTable, driverTransaction);
						/*
						// Balance ?
						queryController.selectOneWhere(usersTable, { id: passenger })
						.then(function(passengerData) {
							var balance = passengerData.balance.push({ currency: cost.currency, value: -cost.value });
							queryController.updateWhere(usersTable, { id: passenger }, { balance: balance });
						})
					
						queryController.selectOneWhere(usersTable, { id: driver })
						.then(function(driverData) {
							var balance = driverData.balance.push({ currency: cost.currency, value: cost.value });
							queryController.updateWhere(usersTable, { id: driver }, { balance: balance });
						})
						*/
						responseController.sendTrip(res, 201, trip[0]);
					})
				})
				//responseController.sendTrip(res, 201, trip[0]);
				
			}).catch(function(error) {
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

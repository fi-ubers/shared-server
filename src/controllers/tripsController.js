var logger = require('./../logger');
var tripTable = 'trips';
var visibleTripFields = ['id', 'applicationOwner', 'driver', 'passenger', 'start', 'end', 'totalTime', 'waitTime', 'travelTime', 'distance', 'route', 'cost'];

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

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
		var driver = req.body.driver;
		var passenger = req.body.passenger;
		var start = req.body.start;
		var end = req.body.end;
		var totalTime = req.body.totalTime;
		var waitTime = req.body.waitTime;
		var travelTime = req.body.travelTime;
		var distance = req.body.distance;
		var route = req.body.route;
		var paymethod = req.body.paymethod;
		
		logger.info(request);
		if (!driver || !passenger || !start || !end || !totalTime || !waitTime || !travelTime || !distance || !route || !paymethod) { 
			errorController.missingParameters(res, request);
		} else {
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
				paymethod: paymethod
			}, visibleTripFields)
			.then(function(trip) {
				responseController.sendTrip(res, 201, trip[0]);
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

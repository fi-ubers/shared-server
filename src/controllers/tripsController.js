var logger = require('./../logger');

/** @module tripsController */
module.exports = {

	/** Lists all the information about the trips. */
	list : function(req, res) {
		logger.info("GET at /trips");
		res.send("List of trips");
	},
	
	/** Registers a trip. */
	register : function(req, res) {
		//logger.info("POST at /trips");
		// Register a trip
	},
	
	/** Estimates the value of a trip. */
	estimateValue : function(req, res) {
		//logger.info("POST at /trips/estimate");
		// Estimate the value of a trip
	},
	
	/** Obtains the information of a trip. */
	getInformation : function(req, res) {
		logger.info("GET at /trips" + req.params.tripId);
		res.send("Obtain trip " + req.params.tripId + " information");
	}
	
}

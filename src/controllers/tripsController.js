var logger = require('./../logger');

module.exports = {
	list : function(req, res) {
		logger.info("GET at /trips");
		res.send("List of trips");
	},
	
	register : function(req, res) {
		//logger.info("POST at /trips");
		// Register a trip
	},
	
	estimateValue : function(req, res) {
		//logger.info("POST at /trips/estimate");
		// Estimate the value of a trip
	},
	
	information : function(req, res) {
		logger.info("GET at /trips" + req.params.tripId);
		res.send("Obtain trip " + req.params.tripId + " information");
	}
	
}

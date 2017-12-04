var logger = require('./../logger');
var statsTable = 'statistics';

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

/** @module statsController */
module.exports = {

	/** Lists all the statistics about the application servers. */
	list : function(req, res) {
		var request = "GET at /api/statistics";
		logger.info(request);
		queryController.selectAll(statsTable)
		.then(function(stats) {
			logger.info("Showing application servers statistics list");
			responseController.sendStats(res, stats.length, stats.length, stats);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	}
}

var logger = require('./../logger');

module.exports = {
	unexpectedError : (function(res, error, request) {
		logger.error("Unexpected error: " + request);
		res.status(500).send({code: 500, message: "Unexpected error: " + error});
	}),
	
	missingParameters : (function(res, request) {
		logger.error("Missing parameters: " + request);
		res.status(400).send({code: 400, message: "Missing parameters"});
	}),
	
	nonExistentResource : (function(res, resource, request) {
		logger.error("Non-existent " + resource + ": " + request);
		res.status(404).send({code: 404, message: "Non-existent " + resource});
	})
}

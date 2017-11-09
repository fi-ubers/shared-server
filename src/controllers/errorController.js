var logger = require('./../logger');

/** @module errorController */
module.exports = {

	/** Reports an unexpected error. */
	unexpectedError : (function(res, error, request) {
		logger.error("Unexpected error: " + request);
		res.status(500).send({code: 500, message: request + " Unexpected error: " + error});
	}),
	
	/** Reports a 'missing parameters' error. */
	missingParameters : (function(res, request) {
		logger.error("Missing parameters: " + request);
		res.status(400).send({code: 400, message: "Missing parameters"});
	}),
	
	/** Reports a 'non-existent resource' error. */
	nonExistentResource : (function(res, resource, request) {
		logger.error("Non-existent " + resource + ": " + request);
		res.status(404).send({code: 404, message: "Non-existent " + resource});
	}),
	
	/** Reports an 'update conflict' error. */
	updateConflict : (function(res, request) {
		logger.error("Conflict in the update: wrong _ref value at " + request);
		res.status(409).send({code: 409, message: "Conflict in the update: wrong _ref value"});
	}),
	
	/** Reports an 'unauthorized' error. */
	unauthorized : (function(res, request) {
		logger.error("Unauthorized: " + request);
		res.status(401).send({code: 401, message: "Unauthorized"});
	}),
	
	/** Reports a 'failed validation' error. */
	failedValidation : (function(res, request) {
		logger.error("Failed validation: " + request);
		res.status(400).send({code: 400, message: "Failed validation"});
	})
}

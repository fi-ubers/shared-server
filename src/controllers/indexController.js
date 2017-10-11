var logger = require('./../logger');

/** @module indexController */
module.exports = {

	/** Sends a 'Hello World' message. */
	sayHello : function(req, res) {
		logger.info("GET at /");
		res.send("Hello World");
	},
	
	/** Sends a 'Goodbye' message. */
	sayGoodbye : function(req, res) {
		logger.info("GET at /goodbye");
		res.send("Goodbye");
	}

}

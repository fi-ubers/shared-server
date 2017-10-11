var logger = require('./../logger');

/** @module paymethodsController */
module.exports = {

	/** Lists all the payment methods supported by the server. */
	getPaymethods : function(req, res) {
		logger.info("GET at /paymethods");
		res.send("Payment methods supported by the server");
	}
}

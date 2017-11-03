const logger = require('./../logger');
const paymentAPI = require('../../config/paymentAPI');

/** @module paymethodsController */
module.exports = {

	/** Lists all the payment methods supported by the server. */
	getPaymethods : function(req, res) {
		var uri = "/paymethods";
		logger.info("GET at /paymethods");
		res.send("Payment methods supported by the server");
	}
}

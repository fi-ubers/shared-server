var logger = require('./../logger');

module.exports = {
	paymethods : function(req, res) {
		logger.info("GET at /paymethods");
		res.send("Payment methods supported by the server");
	}
}

var logger = require('./../logger');
var rp = require('request-promise');
var paymentAPI = require('../../config/paymentAPI');

/** @module paymentController */
module.exports = {

	/** Creates a payment making a request to the Payment API. */
	createPayment : (function(token, data) {
		var options = {
			method: 'POST',
			uri: paymentAPI.baseUrl + paymentAPI.paymentUri,
			body: {
				currency: data.currency,
				value: data.value,
				paymentMethod: data.paymethod
			},
			headers: {
				'Authorization': 'Bearer ' + token
			},
			json: true
		};
		logger.info("Creating payment");	
		return rp(options);
	})
}

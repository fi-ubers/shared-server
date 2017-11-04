const logger = require('./../logger');
const request = require('request');

const paymentAPI = require('../../config/paymentAPI');
const tokenController = require('./tokenController');
const errorController = require('./errorController');
const queryController = require('./queryController');
const responseController = require('./responseController');

/** @module paymethodsController */
module.exports = {

	/** Lists all the payment methods supported by the server. */
	getPaymethods : function(req, res) {
		var uri = "/paymethods";
		
		logger.info("GET at /paymethods");
		request.get(paymentAPI.baseUrl + uri)
		
		if (!tokenController.paymentToken) {
			tokenController.generatePaymentToken();
		}
		
		request.get({url: paymentAPI.baseUrl + uri, auth: { 
			bearer: tokenController.paymentToken.access_token
			}}, function(err, httpResponse, body) {
			responseController.sendPaymethods(res, body.items.length, body.items.length, body.items);
		})
	}
}

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
		var request = "GET at /api/paymethods";
		
		logger.info(request);
		request.get(paymentAPI.baseUrl + uri)
		/*
		if (!tokenController.paymentToken) {
			tokenController.generatePaymentToken();
		}*/
		tokenController.generatePaymentToken().then(function() {
		
			request.get({url: paymentAPI.baseUrl + uri, auth: { 
				bearer: tokenController.paymentToken.access_token
				}}, function(err, httpResponse, body) {
				responseController.sendPaymethods(res, body.items.length, body.items.length, body.items);
			})
		}).catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	}
}

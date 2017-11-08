const logger = require('./../logger');
const request = require('request');
var rp = require('request-promise');

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
		tokenController.generatePaymentToken().then(function(body) {
			var options = {
				uri: paymentAPI.baseUrl + uri,
				headers: {
					'Authorization': 'Bearer ' + body.access_token
				},
				json: true
			};
			rp(options).then(function(paymethods) {
				responseController.sendPaymethods(res, paymethods.items.length, paymethods.items.length, paymethods.items);
			}).catch(function(error) {
				logger.error(request + ': API request failed');
				errorController.unexpectedError(res, error, request);
			});
			/*
			request.get({url: paymentAPI.baseUrl + uri, auth: { 
				bearer: tokenController.paymentToken.access_token
				}}, function(err, httpResponse, body) {
				responseController.sendPaymethods(res, body.items.length, body.items.length, body.items);
			})*/
		}).catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	}
}

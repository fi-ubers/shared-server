var logger = require('./../logger');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var uuidv4 = require('uuid/v4');

var paymentAPI = require('../../config/paymentAPI');
var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

var businessUsersTable = 'business_users';
var expiration = moment().add(5, 'days').unix();
var paymentToken = null;

function createBusinessToken(businessUser) {
	return jwt.sign({
		id: businessUser.id,
		roles: businessUser.roles,
		jti: uuidv4(),
		exp: expiration}, 
		process.env.BUSINESS_USER_KEY);
}

/** @module tokenController */
module.exports = {

	expiration: expiration,
	
	paymentToken: paymentToken,
	
	/** Creates a BusinessToken. */
	createBusinessToken : createBusinessToken,
	
	/** Creates a ApplicationToken. */
	createApplicationToken : (function(appServer) {
		return jwt.sign({
			id: appServer.id,
			jti: uuidv4(),
			exp: expiration}, 
			process.env.APP_KEY);
	}),
	
	/** Decodes a token. */
	decodeToken : (function(token) {
		return jwt.decode(token);
	}),
	
	/** Generates a business user token if the credentials provided are valid. */
	generateToken : (function(req, res) {
		// Generate business user token
		var username = req.body.username;
		var password = req.body.password;
		
		logger.info("POST at /token");
		if (!username || !password) {
			errorController.missingParameters(res, 'POST /api/token');
		} else {
			queryController.selectOneWhere(businessUsersTable, {username: username, password: password})
			.then(function(user) {
				if (user) {
					logger.info("Creating token for user " + user.id);
					
					var token = createBusinessToken({id: user.id, roles: user.roles});
					responseController.sendToken(res, {expiresAt: expiration, token: token});
						
				} else {
					errorController.unauthorized(res, 'POST /api/token/');	
				}
			}).catch(function(error) {
				errorController.unexpectedError(res, error, 'POST /api/token/');
			})
		}
	}),
	
	generatePaymentToken : (function() {
		var uri = '/user/oauth/authorize';
		return new Promise(function(resolve, reject) {
			request.post({url: paymentAPI.baseUrl + uri, form: { 
				client_id: paymentAPI.clientId,
				client_secret: paymentAPI.clientSecret 
				}}, function(err, httpResponse, body) {
				if (!err) {
					paymentToken = body; 
					resolve();
				}
			})
		});
	})
}

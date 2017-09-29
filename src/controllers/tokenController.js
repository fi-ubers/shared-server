var logger = require('./../logger');
var knex = require('../db/knex');
var jwt = require('jsonwebtoken');
var pjson = require('../../package.json');
var moment = require('moment');
var uuidv4 = require('uuid/v4');
var businessUsersTable = 'business_users';

var expiration = moment().add(5, 'days').unix();

module.exports = {
	expiration : expiration,
	
	createBusinessToken : (function(businessUser) {
		return jwt.sign({
			id: businessUser.id,
			roles: businessUser.roles,
			jti: uuidv4(),
			exp: expiration}, 
			process.env.BUSINESS_USER_KEY);
	}),
	
	createApplicationToken : (function(appServer) {
		return jwt.sign({
			id: appServer.id,
			jti: uuidv4(),
			exp: expiration}, 
			process.env.APP_KEY);
	}),
	
	decodeToken : (function(token) {
		return jwt.decode(token);
	}),

	generateToken : (function(req, res) {
		// Generate business user token
		var username = req.body.username;
		var password = req.body.password;
		
		logger.info("POST at /token");
		if (!username || !password) {
			logger.error("Missing parameters: POST /token");
			res.status(400).send({
				code: 400,
				message: "Missing parameters"
			})
		}
			
		knex.select()
			.from(businessUsersTable)
			.where({username: username,
				password: password
			}).first('*')
			.then(function(user) {
				if (user) {
					logger.info("Creating token for user " + user.id);
					var expires = moment().add(5, 'days');
					var token = jwt.sign({
							id: user.id,
							roles: user.roles,
							jti: uuidv4(),
							exp: expires.valueOf()}, 
							process.env.BUSINESS_USER_KEY);
					res.status(201).send({
						metadata: {
							version: pjson.version,
						},
						token: {
							expiresAt: expires.format('YYYY-MM-DD HH:mm:ss'),
							token:token
						}
					})
						
				} else {
					logger.error("Unauthorized: POST /api/token/");
					res.status(401).send({
						code: 401,
						message: "Unauthorized"
					})	
				}
			}).catch(function(error) {
				logger.error("Unexpected error: POST /token");
				res.status(500).send({
					code: 500,
					message: "Unexpected error: " + error
				})
			})
	}) 
}

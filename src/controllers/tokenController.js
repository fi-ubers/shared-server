var logger = require('./../logger');
var jwt = require('jsonwebtoken');
var pjson = require('../../package.json');
var moment = require('moment');

module.exports = {
	generateToken : (function(req, res) {
		try {
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
			var expiresIn = moment().add(5, 'days').valueOf();
			var token = jwt.sign({username: username}, 'shhhh', {expiresIn: expiresIn});
			res.status(201).send({
				metadata: {
					version: pjson.version,
				},
				token: {
					expiresAt: expiresIn,
					token:token
				}
			})
		} catch (error) {
			logger.error("Unexpected error: POST /token");
			res.status(500).send({
				code: 500,
				message: "Unexpected error: " + error
			})
		}
	}) 
}

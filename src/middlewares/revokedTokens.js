var logger = require('./../logger');
var knex = require('../db/knex');

module.exports = function(req, res, next) {
	knex('blacklist')
		.where('jti', req.user.jti)
		.then(function(token) {
			if (token.length !== 0) {
				logger.info("Revoked token");
				return res.status(401).send({
					code: 401,
					message: "The token was revoked"
				})
			} else {
				next();	
			}
		})
}

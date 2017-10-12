/** @module revokedTokenCheck */
var logger = require('./../logger');
var knex = require('../db/knex');

/**
 * Middleware to check if the token is revoked
 * @module revokedTokenCheck
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
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

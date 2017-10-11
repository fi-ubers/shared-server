/** @module verifyToken */
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Returns the query token if it exists, otherwise null.
 * @module verifyToken
 * @name fromQuerystring
 * @function
 * @param {Object} req - Express request object
 */
function fromQuerystring(req) {
    	if (req.query && req.query.token) {
      		return req.query.token;
	}
	return null;
}

module.exports = {

	/** Verifies that the given token is a valid ApplicationToken. */
	appVerify: expressJwt({ 
		secret: process.env.APP_KEY,
		getToken: fromQuerystring
	}),
	
	/** Verifies that the given token is a valid BusinessToken. */
	businessVerify: expressJwt({ 
		secret: process.env.BUSINESS_USER_KEY,
		getToken: fromQuerystring
	}),
	
	/** Checks for an 'jwt expired' error, and in that case decodes the given 
	 * token and continues to the next middleware. 
	 */
	checkExpirationError: function (err, req, res, next) {
    		if (err.message == 'jwt expired') {
    			var token = req.query.token;
    			req.user = jwt.decode(token);
    			next();
    		} else {
    			res.status(err.status || 500);
			res.json({
				code: err.status,
				message: err.message
			});
		}

	},
	
	/** Checks for an 'invalid signature' error, and in that case verifies
	 * that the given token is a valid ApplicationToken. 
	 */
	checkSignatureError: function (err, req, res, next) {
    		if (err) {
    			if (err.message == 'invalid signature') {
    				jwt.verify(req.query.token, process.env.APP_KEY, function(err, decoded) {
    					if (err) {
    						err.status = 401;
    						next(err);
    					} else {
    						req.user = decoded;
    						next();
    					}
    				});
    			} else {
    				next(err);
    			}
		} else {
			next();
		}
	}
}

var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

function fromQuerystring(req) {
    	if (req.query && req.query.token) {
      		return req.query.token;
	}
	return null;
}

module.exports = {
	appVerify: expressJwt({ 
		secret: process.env.APP_KEY,
		getToken: fromQuerystring
	}),
	
	businessVerify: expressJwt({ 
		secret: process.env.BUSINESS_USER_KEY,
		getToken: fromQuerystring
	}),
	
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

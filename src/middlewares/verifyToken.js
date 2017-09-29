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
    			var token = req.query.token || req.headers.authorization.split(' ')[1];
    			req.user = jwt.decode(token);
    			next();
    		} else {
    			res.status(err.status || 500);
			res.json({
				code: err.status,
				message: err.message
			});
		}

	}
}

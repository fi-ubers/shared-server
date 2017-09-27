var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
require('dotenv').config();

function fromHeaderOrQuerystring(req) {
    	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    		return req.headers.authorization.split(' ')[1];
    	} else if (req.query && req.query.token) {
      		return req.query.token;
	}
	return null;
}

module.exports = {
	appVerify: expressJwt({ 
		secret: process.env.APP_KEY,
		getToken: fromHeaderOrQuerystring
	}),
	
	businessVerify: expressJwt({ 
		secret: process.env.BUSINESS_USER_KEY,
		getToken: fromHeaderOrQuerystring
	}),
	
	checkExpirationError: function (err, req, res, next) {
    		if (err && err.message == 'jwt expired') {
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
	},
	
	refreshAppVerify: function(req, res, next) { 
		try {
			expressJwt({ 
				secret: process.env.APP_KEY,
				getToken: fromHeaderOrQuerystring
			})
		}
		catch (err) {
			if (err.message == 'jwt expired') {
				res.send("trapped");
			}
		}
	}
}

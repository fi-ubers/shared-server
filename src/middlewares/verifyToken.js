var jwt = require('express-jwt');
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
	appVerify: jwt({ 
		secret: process.env.APP_KEY,
		getToken: fromHeaderOrQuerystring
	}),
	
	businessVerify: jwt({ 
		secret: process.env.BUSINESS_USER_KEY,
		getToken: fromHeaderOrQuerystring
	})
}

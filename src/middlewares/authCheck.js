var logger = require('./../logger');

function hasRole(roles, role) {
	for (let item of roles) {
		if (item == role)
			return true;
	}
	return false;
}

module.exports = function(role) {
	return function(req, res, next) {
		if (hasRole(req.user.roles, role)) {
		//if (role == 'manager') {
			next();
		} else {
			logger.error("Unauthorized role");
			return res.status(401).send({
				code: 401,
				message: "Unauthorized role"
			})
		}
	}
}



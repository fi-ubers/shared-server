/** @module authCheck */
var logger = require('./../logger');

/**
 * Returns true if the 'roles' array contains the 'role' string.
 * @module authCheck
 * @name hasRole
 * @function
 * @param {Array} roles - Roles of the business user
 * @param {string} role - Role required to make the request
 */
function hasRole(roles, role) {
	for (let item of roles) {
		if (item == role)
			return true;
	}
	return false;
}

/**
 * Middleware to check if the BusinessToken belongs to an authorized role
 * @module authCheck
 * @function
 * @param {Array} role - Roles of the business user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
module.exports = function(role) {
	return function(req, res, next) {
		if (hasRole(req.user.roles, role)) {
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



var pjson = require('../../package.json');

module.exports = {
	sendServers : (function(res, count, total, serversList) {
		res.status(200).send({
			metadata: {
				count: count,
				total: total,
				version: pjson.version
			},
			servers: serversList
		})
	}),
	
	sendServerCreation : (function(res, server, expiration, token) {
		res.status(201).send({
			metadata: {
				version: pjson.version
			},
			server: {
				server: server,
				token: {
					expiresAt: expiration,
					token: token
				}
			}
		})
	}),
	
	sendPing : (function(res, server, expiration, token) {
		res.status(200).send({
			metadata: {
				version: pjson.version
			},
			ping: {
				server: server,
				token: {
					expiresAt: expiration,
					token: token
				}
			}
		})
	}),
	
	sendServer : (function(res, server) {
		res.status(200).send({
			metadata: {
				version: pjson.version
			},
			server: server
		})
	}),
	
	sendBusinessUsers : (function(res, count, total, businessUsersList) {
		res.status(200).send({
			metadata: {
				count: count,
				total: total,
				version: pjson.version
			},
			businessUser: businessUsersList
		})
	}),
	
	sendBusinessUser : (function(res, code, businessUser) {
		res.status(code).send({
			metadata: {
				version: pjson.version
			},
			businessUser: businessUser
		})
	}),
	
	sendToken : (function(res, token) {
		res.status(201).send({
			metadata: {
				version: pjson.version
			},
			token: token
		})
	}),
	
	sendUsers : (function(res, count, total, usersList) {
		res.status(200).send({
			metadata: {
				count: count,
				total: total,
				version: pjson.version
			},
			users: usersList
		})
	})
}

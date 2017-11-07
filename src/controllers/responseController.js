var pjson = require('../../package.json');

var entityMetadata = { version: pjson.version };
var collectionMetadata = (count, total) => ({
	count: count,
	total: total,
	version: pjson.version
});
var tokenSchema = (token, expiration) => ({
		expiresAt: expiration,
		token: token
});


/** @module responseController */
module.exports = {

	/** Sends json with metadata and a list of application servers with code 200. */
	sendServers : (function(res, count, total, serversList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.servers = serversList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of an application server and its token with code 201. */
	sendServerCreation : (function(res, server, expiration, token) {
		var response = {};
		response.metadata = entityMetadata;
		response.server = {
			server: server,
			token: tokenSchema(token, expiration)
		};
		res.status(201).send(response);
	}),
	
	/** Sends json with metadata and information of an application server and its token with code 200. */
	sendPing : (function(res, server, expiration, token) {
		var response = {};
		response.metadata = entityMetadata;
		response.ping = {
			server: server,
			token: tokenSchema(token, expiration)
		};
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of an application server with code 200. */
	sendServer : (function(res, server) {
		var response = {};
		response.metadata = entityMetadata;
		response.server = server;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and a list of business users with code 200. */
	sendBusinessUsers : (function(res, count, total, businessUsersList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.businessUser = businessUsersList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of a business user with the given code. */
	sendBusinessUser : (function(res, code, businessUser) {
		var response = {};
		response.metadata = entityMetadata;
		response.businessUser = businessUser;
		res.status(code).send(response);
	}),
	
	/** Sends json with metadata and information of a token with code 201. */
	sendToken : (function(res, token) {
		var response = {};
		response.metadata = entityMetadata;
		response.token = token;
		res.status(201).send(response);
	}),
	
	/** Sends json with metadata and a list of users with code 200. */
	sendUsers : (function(res, count, total, usersList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.users = usersList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of a user with the given code. */
	sendUser : (function(res, code, user) {
		var response = {};
		response.metadata = entityMetadata;
		response.user = user;
		res.status(code).send(response);
	}),
	
	/** Sends json with metadata and a list of cars with code 200. */
	sendCars : (function(res, count, total, carsList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.cars = carsList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of a car with the given code. */
	sendCar : (function(res, code, car) {
		var response = {};
		response.metadata = entityMetadata;
		response.car = car;
		res.status(code).send(response);
	}),
	
	/** Sends json with metadata and a list of transactions with code 200. */
	sendTransactions : (function(res, count, total, transactionsList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.transactions = transactionsList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and a list of rules with code 200. */
	sendRules : (function(res, count, total, rulesList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.rules = rulesList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of a rule with the given code. */
	sendRule : (function(res, code, rule) {
		var response = {};
		response.metadata = entityMetadata;
		response.rule = rule;
		res.status(code).send(response);
	}),
	
	/** Sends json with metadata and a list of commits with code 200. */
	sendCommits : (function(res, count, total, commitsList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.commits = commitsList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and a list of trips with code 200. */
	sendTrips : (function(res, count, total, tripsList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.trips = tripsList;
		res.status(200).send(response);
	}),
	
	/** Sends json with metadata and information of a trip with the given code. */
	sendTrip : (function(res, code, trip) {
		var response = {};
		response.metadata = entityMetadata;
		response.trip = trip;
		res.status(code).send(response);
	}),
	
	/** Sends json with metadata and a list of paymethods with code 200. */
	sendPaymethods : (function(res, count, total, paymethodsList) {
		var response = {};
		response.metadata = collectionMetadata(count, total);
		response.paymethods = paymethodsList;
		res.status(200).send(response);
	})
}

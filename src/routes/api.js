var express = require('express');
var router = express.Router();
var controller = require('./../controllers/index');

/* Test-endpoints */
router.get('/', controller.sayHello);
router.get('/goodbye', controller.sayGoodbye);


/* Defining /business-users endpoints */

router.get('/business-users', function(req, res) {
	//logger.info("GET at /business-users");
	res.send("Business users list");
});

router.post('/business-users', function(req, res) {
	//logger.info("POST at /business-users");
	res.send("Register a business user");
});

router.get('/business-users/me', function(req, res) {
	//logger.info("GET at /business-users/me");
	res.send("Obtain information of the connected business user");
});

router.put('/business-users/me', function(req, res) {
	//logger.info("PUT at /business-users/me");
	res.send("Update user connected business information");
});

router.delete('/business-users/:userId', function(req, res) {
	//logger.info("DELETE at /business-users/" + :userId);
	res.send("Delete business user");
});

router.get('/business-users/:userId', function(req, res) {
	//logger.info("GET at /business-users/" + :userId);
	res.send("Obtain information of a business user");
});

router.put('/business-users/:userId', function(req, res) {
	//logger.info("PUT at /business-users/" + :userId);
	res.send("Update information of a business user");
});


/* Defining /users endpoints */

router.get('/users', function(req, res) {
	//logger.info("GET at /users");
	res.send("User list");
});

router.post('/users', function(req, res) {
	//logger.info("POST at /users");
	res.send("Register user");
});

router.post('/users/validate', function(req, res) {
	//logger.info("POST at /users/validate");
	res.send("Validate app user");
});

router.delete('/users/:userId', function(req, res) {
	//logger.info("DELETE at /users/" + :userId);
	res.send("Delete user " + req.params.userId);
});

router.get('/users/:userId', function(req, res) {
	//logger.info("GET at /users/" + :userId);
	res.send("Obtain user information");
});

router.put('/users/:userId', function(req, res) {
	//logger.info("PUT at /users/" + :userId);
	res.send("Update user information");
});

router.get('/users/:id/cars', function(req, res) {
	//logger.info("GET at /users/" + :userId +"/cars");
	res.send("List of user cars");
});

router.post('/users/:userId/cars', function(req, res) {
	//logger.info("POST at /users/" + :userId +"/cars");
	res.send("Register user car");
});

router.delete('/users/:userId/cars/:carId', function(req, res) {
	//logger.info("DELETE at /users/" + :userId +"/cars" + :carId);
	res.send("Delete car");
});

router.get('/users/:userId/cars/:carId', function(req, res) {
	//logger.info("GET at /users/" + :userId +"/cars" + :carId);
	res.send("Obtain car information");
});

router.put('/users/:userId/cars/:carId', function(req, res) {
	//logger.info("PUT at /users/" + :userId +"/cars" + :carId);
	res.send("Update car information");
});

router.get('/users/:userId/transactions', function(req, res) {
	//logger.info("GET at /users/" + :userId "/transactions");
	res.send("List of transactions of a user");
});

router.post('/users/:userId/transactions', function(req, res) {
	//logger.info("POST at /users/" + :userId "/transactions");
	res.send("The user makes a payment");
});

router.get('/users/:userId/trips', function(req, res) {
	//logger.info("GET at /users/" + :userId "/trips");
	res.send("List of user trips");
});


/* Defining /paymethods endpoint */

router.get('/paymethods', function(req, res) {
	//logger.info("GET at /paymethods");
	res.send("Payment methods supported by the server");
});


/* Defining /trips endpoints */

router.get('/trips', function(req, res) {
	//logger.info("GET at /trips");
	res.send("List of trips");
});

router.post('/trips', function(req, res) {
	//logger.info("POST at /trips");
	res.send("Register a trip");
});

router.post('/trips/estimate', function(req, res) {
	//logger.info("POST at /trips/estimate");
	res.send("Estimate the value of a trip");
});

router.get('/trips/:tripId', function(req, res) {
	//logger.info("GET at /trips" + :tripId);
	res.send("Obtain trip information");
});


/* Defining /servers endpoints */

router.get('/servers', function(req, res) {
	//logger.info("GET at /servers");
	res.send("Application servers list");
});

router.post('/servers', function(req, res) {
	//logger.info("POST at /servers");
	res.send("Register an application server");
});

router.post('/servers/ping', function(req, res) {
	//logger.info("POST at /servers/ping");
	res.send("Notify server life");
});

router.get('/servers/:serverId', function(req, res) {
	//logger.info("GET at /servers/" + :serverId);
	res.send("Obtain information of a server");
});

router.put('/servers/:serverId', function(req, res) {
	//logger.info("PUT at /");
	res.send("Update information of a server");
});

router.post('/servers/:serverId', function(req, res) {
	//logger.info("POST at /servers/" + :serverId);
	res.send("Reset a server token");
});

router.delete('/servers/:serverId', function(req, res) {
	//logger.info("DELETE at /servers/" + :serverId);
	res.send("Delete server");
});


/* Defining /rules endpoints */

router.get('/rules', function(req, res) {
	//logger.info("GET at /rules");
	res.send("Listado de reglas");
});

router.post('/rules', function(req, res) {
	//logger.info("POST at /rules");
	res.send("List of rules");
});

router.post('/rules/run', function(req, res) {
	//logger.info("POST at /rules/run");
	res.send("Execute a set of rules");
});

router.delete('/rules/:ruleId', function(req, res) {
	//logger.info("DELETE at /rules" + :ruleId);
	res.send("Delete rule");
});

router.get('/rules/:ruleId', function(req, res) {
	//logger.info("GET at /rules" + :ruleId);
	res.send("Get info of a rule");
});

router.put('/rules/:ruleId', function(req, res) {
	//logger.info("PUT at /rules" + :ruleId);
	res.send("Modify a rule");
});

router.post('/rules/:ruleId/run', function(req, res) {
	//logger.info("POST at /rules" + :ruleId + "/run");
	res.send("Run the rule individually");
});

router.get('/rules/:ruleId/commits', function(req, res) {
	//logger.info("GET at /rules" + :ruleId + "/commits");
	res.send("List of commits of a rule");
});

router.get('/rules/:ruleId/commits/:commitId', function(req, res) {
	//logger.info("GET at /rules" + :ruleId + "/commits" + :commitId);
	res.send("Rule in the commit state");
});


/* Defining /token endpoint */

router.post('/token', function(req, res) {
	//logger.info("POST at /");
	res.send("Generate business user token");
});


// Return router
module.exports = router;

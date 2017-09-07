var express = require('express');
var router = express.Router();
var logger = require('./../logger');

// Controllers
var idxController = require('./../controllers/indexController');
var businessUserController = require('./../controllers/businessUsersController');
var userController = require('./../controllers/usersController');
var tripController = require('./../controllers/tripsController');
var serverController = require('./../controllers/serversController');
var ruleController = require('./../controllers/rulesController');

/* Test-endpoints */
router.get('/', idxController.sayHello);
router.get('/goodbye', idxController.sayGoodbye);


/* Defining /business-users endpoints */

router.get('/business-users', businessUserController.list);

router.post('/business-users', businessUserController.register);

router.get('/business-users/me', businessUserController.myInformation);

router.put('/business-users/me', businessUserController.updateMyInfo);

router.delete('/business-users/:userId', businessUserController.deleteUser);

router.get('/business-users/:userId', businessUserController.userInformation);

router.put('/business-users/:userId', businessUserController.updateUserInfo);


/* Defining /users endpoints */

router.get('/users', userController.list);

router.post('/users', userController.register);

router.post('/users/validate', userController.validate);

router.delete('/users/:userId', userController.deleteUser);

router.get('/users/:userId', userController.information);

router.put('/users/:userId', userController.updateInfo);

router.get('/users/:id/cars', userController.userCarsList);

router.post('/users/:userId/cars', userController.registerUserCar);

router.delete('/users/:userId/cars/:carId', userController.deleteUserCar);

router.get('/users/:userId/cars/:carId', userController.userCarInfo);

router.put('/users/:userId/cars/:carId', userController.updateCarInfo);

router.get('/users/:userId/transactions', userController.transactions);

router.post('/users/:userId/transactions', userController.makePayment);

router.get('/users/:userId/trips', userController.trips);


/* Defining /paymethods endpoint */

router.get('/paymethods', function(req, res) {
	logger.info("GET at /paymethods");
	res.send("Payment methods supported by the server");
});


/* Defining /trips endpoints */

router.get('/trips', tripController.list);

router.post('/trips', tripController.register);

router.post('/trips/estimate', tripController.estimateValue);

router.get('/trips/:tripId', tripController.information);


/* Defining /servers endpoints */

router.get('/servers', serverController.list);

router.post('/servers', serverController.register);

router.post('/servers/ping', serverController.ping);

router.get('/servers/:serverId', serverController.serverInfo);

router.put('/servers/:serverId', serverController.updateServerInfo);

router.post('/servers/:serverId', serverController.resetServerToken);

router.delete('/servers/:serverId', serverController.deleteServer);


/* Defining /rules endpoints */

router.get('/rules', ruleController.list);

router.post('/rules', ruleController.register);

router.post('/rules/run', ruleController.executeRules);

router.delete('/rules/:ruleId', ruleController.deleteRule);

router.get('/rules/:ruleId', ruleController.ruleInfo);

router.put('/rules/:ruleId', ruleController.modifyRule);

router.post('/rules/:ruleId/run', ruleController.run);

router.get('/rules/:ruleId/commits', ruleController.commits);

router.get('/rules/:ruleId/commits/:commitId', ruleController.commitState);


/* Defining /token endpoint */

router.post('/token', function(req, res) {
	//logger.info("POST at /token");
	// Generate business user token
});


// Return router
module.exports = router;

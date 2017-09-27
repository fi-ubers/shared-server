var express = require('express');
var logger = require('./../logger');
var router = express.Router();

// Controllers
var indexController = require('./../controllers/indexController');
var businessUserController = require('./../controllers/businessUsersController');
var userController = require('./../controllers/usersController');
var tripController = require('./../controllers/tripsController');
var serverController = require('./../controllers/serversController');
var ruleController = require('./../controllers/rulesController');
var paymethodsController = require('./../controllers/paymethodsController');
var tokenController = require('./../controllers/tokenController');

// Middlewares
var verifyToken = require('./../middlewares/verifyToken');
var authCheck = require('./../middlewares/authCheck');
var revokedToken = require('./../middlewares/revokedTokens');

/* Test-endpoints */
router.get('/', indexController.sayHello);
router.get('/goodbye', indexController.sayGoodbye);


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

router.get('/paymethods', paymethodsController.paymethods);


/* Defining /trips endpoints */

router.get('/trips', tripController.list);

router.post('/trips', tripController.register);

router.post('/trips/estimate', tripController.estimateValue);

router.get('/trips/:tripId', tripController.information);


/* Defining /servers endpoints */

router.get('/servers', verifyToken.businessVerify, authCheck('user'), serverController.listServers);

router.post('/servers', verifyToken.businessVerify, authCheck('manager'), serverController.registerServer);

router.post('/servers/ping', verifyToken.appVerify, verifyToken.checkExpirationError, revokedToken, serverController.ping);

router.get('/servers/:serverId', verifyToken.businessVerify, authCheck('user'), serverController.serverInfo);

router.put('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), serverController.updateServerInfo);

router.post('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), serverController.resetServerToken);

router.delete('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), serverController.deleteServer);


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

router.post('/token', tokenController.generateToken);


// Return router
module.exports = router;

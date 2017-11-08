var express = require('express');

/** 
 * Express router
 * type {Object}
 * @const
 */
const router = express.Router();

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
var revokedTokenCheck = require('./../middlewares/revokedTokenCheck');

// Endpoints for testing
router.get('/', indexController.sayHello);
router.get('/goodbye', indexController.sayGoodbye);


// Defining /business-users endpoints
 
/**
 * @name get/business-users
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/business-users', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.list);

/**
 * @name post/business-users
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/business-users', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.register);

/**
 * @name get/business-users/me
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/business-users/me', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.getMyInformation);

/**
 * @name put/business-users/me
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/business-users/me', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.updateMyInfo);

/**
 * @name delete/business-users/:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.delete('/business-users/:userId', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.deleteUser);

/**
 * @name get/business-users/:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/business-users/:userId', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.getUserInformation);

/**
 * @name put/business-users:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/business-users/:userId', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.updateUserInfo);


/* Defining /users endpoints */

/**
 * @name get/users
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.listUsers);

/**
 * @name post/users
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/users', verifyToken.appVerify, revokedTokenCheck, userController.register);

/**
 * @name post/users/validate
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/users/validate', verifyToken.appVerify, revokedTokenCheck, userController.validate);

/**
 * @name delete/users/:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.delete('/users/:userId', verifyToken.businessVerify, authCheck('manager'), verifyToken.checkSignatureError, revokedTokenCheck, userController.deleteUser);

/**
 * @name get/users/:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users/:userId', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getInformation);

/**
 * @name put/users/:userId
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/users/:userId', verifyToken.appVerify, revokedTokenCheck, userController.updateInformation);

/**
 * @name get/users/:userId/cars
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users/:userId/cars', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.listUserCars);

/**
 * @name post/users/:userId/cars
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/users/:userId/cars', verifyToken.appVerify, revokedTokenCheck, userController.registerUserCar);

/**
 * @name delete/users/:userId/cars/:carId
 * @function
 * @memberof module:router
 * @inner
 */
router.delete('/users/:userId/cars/:carId', verifyToken.businessVerify, authCheck('manager'), verifyToken.checkSignatureError, revokedTokenCheck, userController.deleteUserCar);

/**
 * @name get/users/:userId/cars/:carId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users/:userId/cars/:carId', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getCarInformation);

/**
 * @name put/users/:userId/cars/:carId
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/users/:userId/cars/:carId', verifyToken.appVerify, revokedTokenCheck, userController.updateCarInformation);

/**
 * @name get/users/:userId/transactions
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users/:userId/transactions', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getTransactions);

/**
 * @name post/users/:userId/transactions
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/users/:userId/transactions', verifyToken.appVerify, revokedTokenCheck, userController.makePayment);

/**
 * @name get/users/:userId/trips
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/users/:userId/trips', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getTrips);


/* Defining /paymethods endpoint */

/**
 * @name get/paymethods
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/paymethods', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, paymethodsController.getPaymethods);


/* Defining /trips endpoints */

/**
 * @name get/trips
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/trips', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, tripController.list);

/**
 * @name post/trips
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/trips', verifyToken.appVerify, revokedTokenCheck, tripController.register);

/**
 * @name post/trips/estimate
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/trips/estimate', verifyToken.appVerify, revokedTokenCheck, tripController.estimateValue);

/**
 * @name get/trips/:tripId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/trips/:tripId', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, tripController.getInformation);


/* Defining /servers endpoints */

/**
 * @name get/servers
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/servers', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, serverController.listServers);

/**
 * @name post/servers
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/servers', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.registerServer);

/**
 * @name post/servers/ping
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/servers/ping', verifyToken.appVerify, verifyToken.checkExpirationError, revokedTokenCheck, serverController.ping);

/**
 * @name get/servers/:serverId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/servers/:serverId', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, serverController.getInformation);


/**
 * @name put/servers/:serverId
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.updateInformation);

/**
 * @name post/servers/:serverId
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.resetServerToken);

/**
 * @name delete/servers/:serverId
 * @function
 * @memberof module:router
 * @inner
 */
router.delete('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.deleteServer);


/* Defining /rules endpoints */

/**
 * @name get/rules
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/rules', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, ruleController.list);

/**
 * @name post/rules
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/rules', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, ruleController.register);

/**
 * @name post/rules/run
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/rules/run', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, ruleController.executeRules);

/**
 * @name delete/rules/:ruleId
 * @function
 * @memberof module:router
 * @inner
 */
router.delete('/rules/:ruleId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, ruleController.deleteRule);

/**
 * @name get/rules/:ruleId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/rules/:ruleId', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, ruleController.getInformation);

/**
 * @name put/rules/:ruleId
 * @function
 * @memberof module:router
 * @inner
 */
router.put('/rules/:ruleId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, ruleController.modifyRule);

/**
 * @name post/rules/:ruleId/run
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/rules/:ruleId/run', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, ruleController.run);

/**
 * @name get/rules/:ruleId/commits
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/rules/:ruleId/commits', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, ruleController.getCommits);

/**
 * @name get/rules/:ruleId/commits/:commitId
 * @function
 * @memberof module:router
 * @inner
 */
router.get('/rules/:ruleId/commits/:commitId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, ruleController.getRuleInCommitState);


/* Defining /token endpoint */

/**
 * @name post/token
 * @function
 * @memberof module:router
 * @inner
 */
router.post('/token', tokenController.generateToken);


/** Express router providing API routes
 * @module router
 */
module.exports = router;

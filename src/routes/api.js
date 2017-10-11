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
var revokedTokenCheck = require('./../middlewares/revokedTokenCheck');

/* Test-endpoints */
router.get('/', indexController.sayHello);
router.get('/goodbye', indexController.sayGoodbye);


/* Defining /business-users endpoints */

router.get('/business-users', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.list);

router.post('/business-users', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.register);

router.get('/business-users/me', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.getMyInformation);

router.put('/business-users/me', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.updateMyInfo);

router.delete('/business-users/:userId', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.deleteUser);

router.get('/business-users/:userId', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, businessUserController.getUserInformation);

router.put('/business-users/:userId', verifyToken.businessVerify, authCheck('admin'), revokedTokenCheck, businessUserController.updateUserInfo);


/* Defining /users endpoints */

router.get('/users', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.listUsers);

router.post('/users', verifyToken.appVerify, revokedTokenCheck, userController.register);

router.post('/users/validate', verifyToken.appVerify, revokedTokenCheck, userController.validate);

router.delete('/users/:userId', verifyToken.businessVerify, authCheck('manager'), verifyToken.checkSignatureError, revokedTokenCheck, userController.deleteUser);

router.get('/users/:userId', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getInformation);

router.put('/users/:userId', verifyToken.appVerify, revokedTokenCheck, userController.updateInformation);

router.get('/users/:userId/cars', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.listUserCars);

router.post('/users/:userId/cars', verifyToken.appVerify, revokedTokenCheck, userController.registerUserCar);

router.delete('/users/:userId/cars/:carId', verifyToken.businessVerify, authCheck('manager'), verifyToken.checkSignatureError, revokedTokenCheck, userController.deleteUserCar);

router.get('/users/:userId/cars/:carId', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getCarInformation);

router.put('/users/:userId/cars/:carId', verifyToken.appVerify, revokedTokenCheck, userController.updateCarInformation);

router.get('/users/:userId/transactions', verifyToken.businessVerify, authCheck('user'), verifyToken.checkSignatureError, revokedTokenCheck, userController.getTransactions);

router.post('/users/:userId/transactions', userController.makePayment);

router.get('/users/:userId/trips', userController.getTrips);


/* Defining /paymethods endpoint */

router.get('/paymethods', paymethodsController.getPaymethods);


/* Defining /trips endpoints */

router.get('/trips', tripController.list);

router.post('/trips', tripController.register);

router.post('/trips/estimate', tripController.estimateValue);

router.get('/trips/:tripId', tripController.getInformation);


/* Defining /servers endpoints */

router.get('/servers', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, serverController.listServers);

router.post('/servers', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.registerServer);

router.post('/servers/ping', verifyToken.appVerify, verifyToken.checkExpirationError, revokedTokenCheck, serverController.ping);

router.get('/servers/:serverId', verifyToken.businessVerify, authCheck('user'), revokedTokenCheck, serverController.getInformation);

router.put('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.updateInformation);

router.post('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.resetServerToken);

router.delete('/servers/:serverId', verifyToken.businessVerify, authCheck('manager'), revokedTokenCheck, serverController.deleteServer);


/* Defining /rules endpoints */

router.get('/rules', ruleController.list);

router.post('/rules', ruleController.register);

router.post('/rules/run', ruleController.executeRules);

router.delete('/rules/:ruleId', ruleController.deleteRule);

router.get('/rules/:ruleId', ruleController.getInformation);

router.put('/rules/:ruleId', ruleController.modifyRule);

router.post('/rules/:ruleId/run', ruleController.run);

router.get('/rules/:ruleId/commits', ruleController.getCommits);

router.get('/rules/:ruleId/commits/:commitId', ruleController.getRuleInCommitState);


/* Defining /token endpoint */

router.post('/token', tokenController.generateToken);


// Return router
module.exports = router;

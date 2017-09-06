var express = require('express');
var router = express.Router();
var controller = require('./../controllers/index');

router.get('/', controller.sayHello);
router.get('/goodbye', controller.sayGoodbye);

/* App */
router.get('/users', function(req, res) {
	//logger.info("GET at /");
	res.send("Listado de usuarios");
});

router.post('/users', function(req, res) {
	//logger.info("POST at /");
	res.send("Dar de alta a usuario");
});

router.post('/users/validate', function(req, res) {
	//logger.info("POST at /");
	res.send("Validar usuario de aplicación");
});

router.delete('/users/:id', function(req, res) {
	//logger.info("DELETE at /");
	res.send("Eliminar usuario " + req.params.id);
});

router.get('/users/:id', function(req, res) {
	//logger.info("GET at /");
	res.send("Obtener info de usuario " + req.params.id);
});

router.put('/users/:id', function(req, res) {
	//logger.info("PUT at /");
	res.send("Actualización de info de usuario " + req.params.id);
});

router.get('/users/:id/cars', function(req, res) {
	//logger.info("GET at /");
	res.send("Listado de autos de usuario " + req.params.id);
});

router.post('/users/:id/cars', function(req, res) {
	//logger.info("POST at /");
	res.send("Dar de alta a auto de usuario " + req.params.id);
});

router.delete('/users/:id/cars/:carId', function(req, res) {
	//logger.info("DELETE at /");
	res.send("Eliminar auto");
});

router.get('/users/:id/cars/:carId', function(req, res) {
	//logger.info("GET at /");
	res.send("Obtener info de auto");
});

router.put('/users/:id/cars/:carId', function(req, res) {
	//logger.info("PUT at /");
	res.send("Actualizar info de auto");
});

router.get('/users/:id/transactions', function(req, res) {
	//logger.info("GET at /");
	res.send("Listado de transacciones de un usuario");
});

router.post('/users/:id/transactions', function(req, res) {
	//logger.info("POST at /");
	res.send("Realiza un pago el usuario " + req.params.id);
});

router.get('/users/:id/trips', function(req, res) {
	//logger.info("GET at /");
	res.send("Listado de viajes de usuario " + req.params.id);
});

router.get('/paymethods', function(req, res) {
	//logger.info("GET at /");
	res.send("Listado de usuarios");
});

router.post('/trips', function(req, res) {
	//logger.info("POST at /");
	res.send("Dar de alta un viaje");
});

router.post('/trips/estimate', function(req, res) {
	//logger.info("POST at /");
	res.send("Validar usuario de aplicación");
});

router.get('/users/:id', function(req, res) {
	//logger.info("GET at /");
	res.send("Obtener info del viaje " + req.params.id);
});

router.post('/servers/ping', function(req, res) {
	//logger.info("POST at /");
	res.send("Notificar vida de servidor");
});


/* Admin */



/* Manager */


/* User */

// Return router
module.exports = router;

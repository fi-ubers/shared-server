var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var logger = require('./logger');
var app = express();
 
app.set('port', (process.env.PORT || 5000));
exports.app = app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defining endpoints
app.get("/", function(req, res) {
	logger.info("GET at /");
	res.send("Hello World");
});

app.get("/goodbye", function(req, res) {
	logger.info("GET at /goodbye");
	res.send("Goodbye");
});

app.post("/goodbye", function(req, res) {
	logger.info("POST at /goodbye");
	return res.send(req.body);
});

var server = app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

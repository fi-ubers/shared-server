var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var logger = require('./logger');
var routes = require('./routes/api');

var app = express();
app.set('port', (process.env.PORT || 5000));
exports.app = app;

// Configure app to use bodyParser
// to get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Output stream for writing morgan's log lines
app.use(morgan ('combined', { 'stream': logger.stream }));

// Defining endpoint
app.get("/", function(req, res) {
	logger.info("GET at /");
	res.send("Welcome!");
});

// Routes
app.use('/api', routes);

// Start server
var server = app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

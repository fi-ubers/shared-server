/** 
 * @fileOverview Starts shared server.
 */

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const logger = require('./logger');
const routes = require('./routes/api');
const cors = require('cors');
require('./db/knex');
require('dotenv').config();

/**
 * Express app.
 */
const app = express();
app.set('port', (process.env.PORT || 5000));

// CORS Middleware
app.use(cors());

// Configure app to use bodyParser
// to get the data
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


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});


// Error handler
//eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) { 
	res.status(err.status || 500);
	res.json({
		code: err.status,
		message: err.message
	});
});

// Start server
app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

module.exports = app;

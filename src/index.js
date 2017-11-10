/** 
 * @fileOverview Starts shared server.
 */

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const logger = require('./logger');
const routes = require('./routes/api');
require('./db/knex');
require('dotenv').config();

/**
 * Express app.
 */
const app = express();
app.set('port', (process.env.PORT || 5000));

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, '../public')));

// Configure app to use bodyParser
// to get the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Output stream for writing morgan's log lines
app.use(morgan ('combined', { 'stream': logger.stream }));

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

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

module.exports = app;

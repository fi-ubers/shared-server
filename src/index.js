var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var pg = require('pg');
var logger = require('./logger');

// Database Connect String
var connectionString = "postgres://udivnwonhaaoem:5c055f1fa9f8d5f9273904625f1126865902047ae46a4bb0841200bd6d3c3d72@ec2-107-20-193-89.compute-1.amazonaws.com:5432/dfdidieplcj3ne?ssl=true";

var app = express();
app.set('port', (process.env.PORT || 5000));
exports.app = app;

// Configure app to use bodyParser()
// to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Output stream for writing morgan's log lines
app.use(morgan ('combined', { 'stream': logger.stream }));

// Defining endpoint
app.get("/", function(req, res) {
	logger.info("GET at /");
	res.send("Welcome!");
});

app.get('/db', function (req, res) {
	pg.connect(connectionString, function(err, client, done) {
		client.query('SELECT * FROM test_table', function(err, result) {
			done();
			if (err)
				{ console.error(err); res.send("Error " + err); }
			else
				{ res.send(result.rows);}
		});	
	});
});

// Routes
var routes = require('./routes/api');
app.use('/api', routes);

// Start server
var server = app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

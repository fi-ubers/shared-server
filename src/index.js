var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');
var pg = require('pg');
var logger = require('./logger');
var app = express();
 
app.set('port', (process.env.PORT || 5000));
exports.app = app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Output stream for writing morgan's log lines
app.use(morgan ('combined', { 'stream': logger.stream }));

// Defining endpoints
app.get("/", function(req, res) {
	logger.info("GET at /");
	res.send("Hello World");
});

app.get("/goodbye", function(req, res) {
	logger.info("GET at /goodbye");
	res.send("Goodbye");
});

pg.defaults.ssl = true;
app.get('/db', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	  if (err) throw err;
	  logger.info('Connected to postgres! Getting schemas...');

	  client
	    .query('SELECT table_schema,table_name FROM information_schema.tables;')
	    .on('row', function(row) {
	     logger.info(JSON.stringify(row));
	    });
	});
});

app.post("/goodbye", function(req, res) {
	logger.info("POST at /goodbye");
	return res.send(req.body);
});

var server = app.listen(app.get('port'), function () {
	logger.info("Listening on port %s...", app.get('port'));
});

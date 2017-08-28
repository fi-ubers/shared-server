var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set('port', (process.env.PORT || 5000));
exports.app = app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Defining endpoints
app.get("/", function(req, res) {
	console.log("GET at /");
	res.send("Hello World");
});

app.get("/goodbye", function(req, res) {
	console.log("GET at /goodbye");
	res.send("Goodbye");
});

app.post("/goodbye", function(req, res) {
	console.log("POST at /goodbye");
	return res.send(req.body);
});

var server = app.listen(app.get('port'), function () {
	console.log("Listening on port %s...", app.get('port'));
});

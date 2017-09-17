var logger = require('./../logger');

module.exports = {
	sayHello : function(req, res) {
		logger.info("GET at /");
		res.send("Hello World");
	},
	sayGoodbye : function(req, res) {
		logger.info("GET at /goodbye");
		res.send("Goodbye");
	}

}

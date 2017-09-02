var winston = require('winston')

// Using own Logger
var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: true,
			timestamp:true,
			level: 'info'
		}),
		new (winston.transports.File)({
			filename: './log-test.log',
			level: 'info',
			json: true,
			timestamp: true,
			handleExceptions: true
		})
	]
});

module.exports = logger;

// Logging examples
// logger.log('info', 'Hello log files!');
// logger.info('Hello again!');

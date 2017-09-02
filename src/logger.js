var winston = require('winston');
require('winston-daily-rotate-file');
var fs = require('fs');
var logDir = 'logs';

// Create 'logDir' directory if it does not exist
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

var tsFormat = () => (new Date()).toLocaleTimeString();

// Using own Logger
var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			colorize: true,
			timestamp: tsFormat,
			level: 'info'
		}),
		new (winston.transports.DailyRotateFile)({
			filename: logDir + '/-test.log',
			level: 'info',
			json: true,
			timestamp: tsFormat,
			handleExceptions: true,
			datePattern: 'yyyy-MM-dd',
			prepend: true
		})
	]
});

module.exports = logger;

// Logging examples
//logger.log('info', 'Hello log files!');
//logger.info('Hello again!');
//logger.error('Error example!');

var winston = require('winston');
require('winston-daily-rotate-file');
var fs = require('fs');
var logDir = 'logs';
var level = process.env.LOG_LEVEL || 'debug';

// Create 'logDir' directory if it does not exist
if (!fs.existsSync(logDir)) {
	fs.mkdirSync(logDir);
}

var tsFormat = () => (new Date()).toLocaleTimeString();

// Using own Logger
const logger = new (winston.Logger) ({
	transports: [
		new (winston.transports.Console) ({
			colorize: true,
			timestamp: tsFormat,
			level: level
		}),
		new (winston.transports.DailyRotateFile) ({
			filename: logDir + '/-test.log',
			level: level,
			json: false,
			timestamp: tsFormat,
			handleExceptions: true,
			datePattern: 'yyyy-MM-dd',
			prepend: true
		})
	],
	exitOnError: false
});

module.exports = logger;

logger.stream = {
	write: function(message, encoding) {
		logger.info(message);	
	}
};

// Logging examples
//logger.log('info', 'Hello log files!');
//logger.info('Hello again!');
//logger.error('Error example!');

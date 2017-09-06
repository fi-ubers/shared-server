var test = require('./../index')
var expect = require('chai').expect;
var request = require('request');

var port = test.app.get('port');

describe('Content tests', function() {
	it('Content equal to Hello World in main page', function() {
		request('http://localhost:' + port + '/', function(error, response, body) {
			expect(body).to.equal('Hello World');
		});
	});

	it('Content equal to Goodbye in endpoint /goodbye', function() {
		request('http://localhost:' + port + '/goodbye', function(error, response, body) {
			expect(body).to.equal('Goodbye');
		});
	});
});

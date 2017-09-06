var test = require('./../index.js')
var expect = require('chai').expect;
var request = require('request');

var port = test.app.get('port');

describe('Content tests', function() {
	it('Content equal to "Welcome!" in main page', function() {
		request('http://localhost:' + port + '/', function(error, response, body) {
			expect(body).to.equal('Welcome!');
		});
	});

	it('Content equal to "Goodbye" in endpoint /goodbye', function() {
		request('http://localhost:' + port + '/api/goodbye', function(error, response, body) {
			expect(body).to.equal('Goodbye');
		});
	});
});

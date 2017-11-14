process.env.NODE_ENV = 'test';

var server = require('./../index');
var expect = require('chai').expect;
var request = require('request');

var port = server.get('port');

describe('Content tests', function() {

	it('Content equal to "Hello World" in endpoint /api', function() {
		request('http://localhost:' + port + '/api', function(error, response, body) {
			expect(body).to.equal('Hello World');
		});
	});	
	
	it('Content equal to "Goodbye" in endpoint /api/goodbye', function() {
		request('http://localhost:' + port + '/api/goodbye', function(error, response, body) {
			expect(body).to.equal('Goodbye');
		});
	});
	
});

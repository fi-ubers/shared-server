process.env.NODE_ENV = 'test';

var server = require('./../index');
var expect = require('chai').expect;
var request = require('request');

var port = server.get('port');

describe('Content tests', function() {
	it('Content equal to "Welcome!" in main page', function() {
		request('http://localhost:' + port + '/', function(error, response, body) {
			expect(body).to.equal('Welcome!');
		});
	});

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
	
	it('Content in endpoint /api/paymethods', function() {
		request('http://localhost:' + port + '/api/paymethods', function(error, response, body) {
			expect(body).to.equal('Payment methods supported by the server');
		});
	});
	
	it('Content in endpoint /api/trips', function() {
		request('http://localhost:' + port + '/api/trips', function(error, response, body) {
			expect(body).to.equal('List of trips');
		});
	});
	
	it('Content in endpoint /api/trips/14', function() {
		request('http://localhost:' + port + '/api/trips/14', function(error, response, body) {
			expect(body).to.equal('Obtain trip 14 information');
		});
	});
	
});

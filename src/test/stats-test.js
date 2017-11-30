process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');

chai.use(chaiHttp);
chai.should();

describe('GET /api/statistics', function() {
	beforeEach(function(done) { 
		knex.migrate.rollback()
		.then(function() {
			knex.migrate.latest()
			.then(function() {
				return knex.seed.run()
				.then(function() {
					done();
				});
			});
		});
	});
	
	afterEach(function(done) {
		knex.migrate.rollback()
		.then(function() {
			done();
		});
	});
	
	it('Get /api/statistics', function(done) {
		chai.request(server)
		.get('/api/statistics')
		.end(function(err, res) {
		console.log(res.body.message);
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a('Object');
			res.body.should.have.property('metadata');
			res.body.should.have.property('stats');
			res.body.metadata.should.be.a('Object');
			res.body.metadata.should.have.property('count');
			res.body.metadata.should.have.property('total');
			res.body.metadata.should.have.property('version');
			res.body.stats.should.be.a('array');
			done();
		});
	});
});

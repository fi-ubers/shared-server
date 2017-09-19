process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');

chai.use(chaiHttp);

describe('API servers routes', function() {
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
	
	it('Get application servers', function(done) {
		chai.request(server)
		.get('/api/servers')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a('Object');
			res.body.metadata.should.be.a('Object');
			res.body.metadata.should.have.property('count');
			res.body.metadata.should.have.property('total');
			res.body.metadata.should.have.property('version');
			res.body.servers.should.be.a('array');
			res.body.servers.length.should.equal(2);
			res.body.servers[0].should.have.property('id');
			done();
		});
	}); 
});

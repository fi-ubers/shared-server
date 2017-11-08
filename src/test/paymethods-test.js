process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');

chai.should();
chai.use(chaiHttp);

var userJti = uuidv4();
var businessUser = {
	id: 16,
	roles: ['user']
};
			
var userToken = jwt.sign({
			id: businessUser.id,
			roles: businessUser.roles,
			jti: userJti},
			process.env.BUSINESS_USER_KEY);

var appToken = jwt.sign({
			id: 1,
			jti: uuidv4()}, 
			process.env.APP_KEY); 


describe('API paymethods routes', function() {
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
	
	describe('GET /api/paymethods', function() {
		it('Get paymethods', function(done) {
			chai.request(server)
			.get('/api/paymethods?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('paymethods');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.paymethods.should.be.a('array');
				res.body.paymethods.length.should.equal(2);
				res.body.paymethods[0].should.have.property('parameters');
				res.body.paymethods[0].should.have.property('paymethod'); // Cambiar a name?
				res.body.paymethods[0].paymethod.should.equal('card');
				res.body.paymethods[1].should.have.property('parameters');
				res.body.paymethods[1].should.have.property('paymethod'); // Cambiar a name?
				res.body.paymethods[1].paymethod.should.equal('cash');
				done();
			});
		});
	});
});

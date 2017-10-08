process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');
var moment = require('moment');

chai.use(chaiHttp);

var expiration = moment().add(5, 'days').unix();
var managerJti = uuidv4();
var userJti = uuidv4();
var appJti = uuidv4();

var businessUser1 = {
	id: 25,
	roles: ['manager']
};

var businessUser2 = {
	id: 16,
	roles: ['user']
};

var adminToken = jwt.sign({
			id: businessUser1.id,
			roles: businessUser1.roles,
			jti: managerJti},
			process.env.BUSINESS_USER_KEY,
			{expiresIn: expiration});
			
var userToken = jwt.sign({
			id: businessUser2.id,
			roles: businessUser2.roles,
			jti: userJti},
			process.env.BUSINESS_USER_KEY,
			{expiresIn: expiration});

var appToken = jwt.sign({
			id: 15,
			jti: appJti,
			exp: expiration}, 
			process.env.APP_KEY);
			
var invalidToken = jwt.sign({
			id: 1,
			jti: uuidv4(),
			exp: expiration}, 
			'someKey');

describe('API users routes', function() {
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
	
	describe('GET /api/users', function() {
		it('Get users with BusinessToken', function(done) {
			chai.request(server)
			.get('/api/users?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('users');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.users.should.be.a('array');
				res.body.users.length.should.equal(3);
				res.body.users[0].should.have.property('id');
				res.body.users[0].id.should.equal(1);
				res.body.users[0].should.have.property('_ref');
				res.body.users[0].should.have.property('applicationOwner');
				res.body.users[0].applicationOwner.should.equal('2');
				res.body.users[0].should.have.property('type');
				res.body.users[0].type.should.equal('passenger');
				res.body.users[0].should.have.property('cars');
				res.body.users[0].cars.should.deep.equal([]);
				res.body.users[0].should.have.property('username');
				res.body.users[0].username.should.equal('robsparkles');
				res.body.users[0].should.have.property('name');
				res.body.users[0].name.should.equal('Robin');
				res.body.users[0].should.have.property('surname');
				res.body.users[0].surname.should.equal('Scherbatsky');
				res.body.users[0].should.have.property('country');
				res.body.users[0].country.should.equal('Canada');
				res.body.users[0].should.have.property('email');
				res.body.users[0].email.should.equal('robinscher@gmail.com');
				res.body.users[0].should.have.property('birthdate');
				res.body.users[0].birthdate.should.equal('23/07/1980');
				res.body.users[0].should.have.property('images');
				res.body.users[0].images.should.deep.equal(['imageLink', 'anotherImageLink']);
				res.body.users[0].should.have.property('balance');
				res.body.users[0].balance.should.deep.equal([{currency: 'ARS', value: 100}]);
				res.body.users[2].cars.should.deep.equal([{ id: 3, _ref: 'testRef', owner: '3', properties: {name: 'Chevrolet Spin', value: 'NAF248'}}]);
				done();
			});
		});
		
		it('Get users with ApplicationToken', function(done) {
			chai.request(server)
			.get('/api/users?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('users');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.users.should.be.a('array');
				res.body.users.length.should.equal(3);
				res.body.users[0].should.have.property('id');
				res.body.users[0].id.should.equal(1);
				res.body.users[0].should.have.property('_ref');
				res.body.users[0].should.have.property('applicationOwner');
				res.body.users[0].applicationOwner.should.equal('2');
				res.body.users[0].should.have.property('type');
				res.body.users[0].type.should.equal('passenger');
				res.body.users[0].should.have.property('cars');
				res.body.users[0].cars.should.deep.equal([]);
				res.body.users[0].should.have.property('username');
				res.body.users[0].username.should.equal('robsparkles');
				res.body.users[0].should.have.property('name');
				res.body.users[0].name.should.equal('Robin');
				res.body.users[0].should.have.property('surname');
				res.body.users[0].surname.should.equal('Scherbatsky');
				res.body.users[0].should.have.property('country');
				res.body.users[0].country.should.equal('Canada');
				res.body.users[0].should.have.property('email');
				res.body.users[0].email.should.equal('robinscher@gmail.com');
				res.body.users[0].should.have.property('birthdate');
				res.body.users[0].birthdate.should.equal('23/07/1980');
				res.body.users[0].should.have.property('images');
				res.body.users[0].images.should.deep.equal(['imageLink', 'anotherImageLink']);
				res.body.users[0].should.have.property('balance');
				res.body.users[0].balance.should.deep.equal([{currency: 'ARS', value: 100}]);
				res.body.users[2].cars.should.deep.equal([{ id: 3, _ref: 'testRef', owner: '3', properties: {name: 'Chevrolet Spin', value: 'NAF248'}}]);
				done();
			});
		});
		
		it('Get users with BusinessToken but unauthorized role', function(done) {
			chai.request(server)
			.get('/api/users?token=' + adminToken)
			.end(function(err, res) {
				res.should.have.status(401);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(401);
				res.body.should.have.property('message');
				res.body.message.should.equal('Unauthorized role');
				done();
			});
		});
		
		it('Get users without token', function(done) {
			chai.request(server)
			.get('/api/users')
			.end(function(err, res) {
				res.should.have.status(401);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(401);
				res.body.should.have.property('message');
				res.body.message.should.equal('No authorization token was found');
				done();
			});
		});
		
		it('Get users with invalid signature', function(done) {
			chai.request(server)
			.get('/api/users?token=' + invalidToken)
			.end(function(err, res) {
				res.should.have.status(401);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(401);
				res.body.should.have.property('message');
				res.body.message.should.equal('invalid signature');
				done();
			});
		});
	});
});

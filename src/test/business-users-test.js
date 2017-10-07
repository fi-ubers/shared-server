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
var adminJti = uuidv4();
var userJti = uuidv4();

var businessUser1 = {
	id: 25,
	roles: ['admin']
};

var businessUser2 = {
	id: 16,
	roles: ['user']
};

var adminToken = jwt.sign({
			id: businessUser1.id,
			roles: businessUser1.roles,
			jti: adminJti},
			process.env.BUSINESS_USER_KEY,
			{expiresIn: expiration});
			
var userToken = jwt.sign({
			id: businessUser2.id,
			roles: businessUser2.roles,
			jti: userJti},
			process.env.BUSINESS_USER_KEY,
			{expiresIn: expiration});

describe('API business-users routes', function() {
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
	
	describe('GET /api/business-users', function() {
		it('Get business users', function(done) {
			chai.request(server)
			.get('/api/business-users?token=' + adminToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('businessUser');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.businessUser.should.be.a('array');
				res.body.businessUser.length.should.equal(3);
				res.body.businessUser[0].should.have.property('id');
				res.body.businessUser[0].id.should.equal(1);
				res.body.businessUser[0].should.have.property('_ref');
				res.body.businessUser[0].should.have.property('username');
				res.body.businessUser[0].username.should.equal('fiuberkpo');
				res.body.businessUser[0].should.have.property('password');
				res.body.businessUser[0].password.should.equal('soyunapassword');
				res.body.businessUser[0].should.have.property('name');
				res.body.businessUser[0].name.should.equal('Pedro');
				res.body.businessUser[0].should.have.property('surname');
				res.body.businessUser[0].surname.should.equal('Fernandez');
				res.body.businessUser[0].should.have.property('roles');
				res.body.businessUser[0].roles.should.be.a('array');
				res.body.businessUser[0].roles.should.deep.equal(['user']);
				res.body.businessUser[1].id.should.equal(2);
				res.body.businessUser[1].name.should.equal('John');
				res.body.businessUser[1].roles.should.deep.equal(['admin', 'manager']);
				res.body.businessUser[2].roles.should.deep.equal(['manager', 'user']);
				done();
			});
		});
		
		it('Get business users without providing token', function(done) {
			chai.request(server)
			.get('/api/business-users')
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
		
		it('Get business users with unauthorized role', function(done) {
			chai.request(server)
			.get('/api/business-users?token=' + userToken)
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
	});
	
	describe('POST /api/business-users', function() {
		it('Register business user with code 201', function(done) {
			chai.request(server)
			.post('/api/business-users?token=' + adminToken)
			.send({
				username: 'olibeer',
				password: 'ninjaWArrior',
				name: 'Oliver',
				surname: 'Williams',
				roles: ['user', 'manager']
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('businessUser');
				res.body.metadata.should.be.a('Object');
				res.body.businessUser.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.businessUser.should.have.property('id');
				res.body.businessUser.should.have.property('_ref');
				res.body.businessUser.should.have.property('username');
				res.body.businessUser.should.have.property('password');
				res.body.businessUser.should.have.property('name');
				res.body.businessUser.should.have.property('surname');
				res.body.businessUser.should.have.property('roles');
				res.body.businessUser.id.should.equal(4);
				res.body.businessUser.username.should.equal('olibeer');
				res.body.businessUser.password.should.equal('ninjaWArrior');
				res.body.businessUser.name.should.equal('Oliver');
				res.body.businessUser.surname.should.equal('Williams');
				res.body.businessUser.roles.should.deep.equal(['user', 'manager']);
				done();
			});
		});
		
		it('Register application server with code 400', function(done) {
			chai.request(server)
			.post('/api/business-users?token=' + adminToken)
			.send({
				username: 'RockingDerekkk',
				password: 'der101',
				name: 'Derek',
				surname: 'Brown'
			})
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
	});
	
	describe('GET /api/business-users/me', function() {
		it('Get connected business user with code 200', function(done) {
			chai.request(server)
			.post('/api/token') // We obtain the token with our credentials
			.send({
				username: 'emma23',
				password: 'ilovedogs'
			})
			.end(function(err, result) {
				result.should.have.status(201);
				result.body.should.have.property('metadata');
				result.body.should.have.property('token');
				chai.request(server)
				.get('/api/business-users/me?token=' + result.body.token.token)
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('businessUser');
					res.body.metadata.should.be.a('Object');
					res.body.metadata.should.have.property('version');
					res.body.businessUser.should.have.property('id');
					res.body.businessUser.id.should.equal(3);
					res.body.businessUser.should.have.property('_ref');
					res.body.businessUser.should.have.property('username');
					res.body.businessUser.username.should.equal('emma23');
					res.body.businessUser.should.have.property('password');
					res.body.businessUser.password.should.equal('ilovedogs');
					res.body.businessUser.should.have.property('name');
					res.body.businessUser.name.should.equal('Emma');
					res.body.businessUser.should.have.property('surname');
					res.body.businessUser.surname.should.equal('Duval');
					res.body.businessUser.should.have.property('roles');
					res.body.businessUser.roles.should.be.a('array');
					res.body.businessUser.roles.should.deep.equal(['manager', 'user']);
					done();
				});
			});
		});
		
		it('Get connected business user with code 404 (No user in database for the given token)', function(done) {
			chai.request(server)
			.get('/api/business-users/me?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Get connected business user with code 401 (Unauthorized role)', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'cookie_monster',
				password: '1234'
			})
			.end(function(err, result) {
				result.should.have.status(201);
				chai.request(server)
				.get('/api/business-users/me?token=' + result.body.token.token)
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
		});
		
		it('Get connected business user with code 401 (Unauthorized role)', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'cookie_monster',
				password: '1234'
			})
			.end(function(err, result) {
				result.should.have.status(201);
				chai.request(server)
				.get('/api/business-users/me?token=' + result.body.token.token)
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
		});
		
		it('POST /api/token: wrong credentials', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'cookie_master',
				password: '1234'
			})
			.end(function(err, res) {
				res.should.have.status(401);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(401);
				res.body.should.have.property('message');
				res.body.message.should.equal('Unauthorized');
				done();
			});
		});
		
		it('POST /api/token: missing parameters', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'cookie_master'
			})
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
	});
	
	describe('PUT /api/business-users/me', function() {
		it('Update connected user with code 200', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'fiuberkpo',
				password: 'soyunapassword'
			})
			.end(function(err, result1) {
				chai.request(server)
				.get('/api/business-users/me?token=' + result1.body.token.token)
				.end(function(err, result2) {
					chai.request(server)
					.put('/api/business-users/me?token=' + result1.body.token.token)
					.send({
						_ref: result2.body.businessUser._ref,
						username: 'fiuberPasion',
						password: 'betterPassword',
						name: 'Pedro',
						surname: 'Fernandez'
						
					})
					.end(function(err, res) {
						res.should.have.status(200);
						res.should.be.json;
						res.body.should.be.a('Object');
						res.body.should.have.property('metadata');
						res.body.should.have.property('businessUser');
						res.body.metadata.should.be.a('Object');
						res.body.metadata.should.have.property('version');
						res.body.businessUser.should.be.a('Object');
						res.body.businessUser.should.have.property('id');
						res.body.businessUser.id.should.equal(1);
						res.body.businessUser.should.have.property('_ref');
						res.body.businessUser._ref.should.not.equal(result2.body.businessUser._ref);
						res.body.businessUser.should.have.property('username');
						res.body.businessUser.username.should.equal('fiuberPasion');
						res.body.businessUser.should.have.property('password');
						res.body.businessUser.password.should.equal('betterPassword');
						res.body.businessUser.should.have.property('name');
						res.body.businessUser.name.should.equal('Pedro');
						res.body.businessUser.should.have.property('surname');
						res.body.businessUser.surname.should.equal('Fernandez');
						res.body.businessUser.should.have.property('roles');
						res.body.businessUser.roles.should.deep.equal(['user']);
						done();
					});
				});
			});
		});
	
		it('Update connected user with code 400', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'fiuberkpo',
				password: 'soyunapassword'
			})
			.end(function(err, result) {
				chai.request(server)
				.put('/api/business-users/me?token=' + result.body.token.token)
				.send({
					username: 'fiuberkpo',
					password: 'betterPassword',
					name: 'Pedru'
				})
				.end(function(err, res) {
					res.should.have.status(400);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(400);
					res.body.should.have.property('message');
					done();
				});
			});
		});
	
		it('Update connected user with code 404', function(done) {
			chai.request(server)
			.put('/api/business-users/me?token=' + userToken)
			.send({
				_ref: 'testtt',
				username: 'larallooza',
				password: 'pass123',
				name: 'Lu',
				surname: 'Molina'
			})
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Update connected user with code 409', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'fiuberkpo',
				password: 'soyunapassword'
			})
			.end(function(err, result) {
				chai.request(server)
				.put('/api/business-users/me?token=' + result.body.token.token)
				.send({
					_ref: 'test',
					username: 'fiuberPasion',
					password: 'betterPassword',
					name: 'Pedro',
					surname: 'Fernandez'
						
				})
				.end(function(err, res) {
					res.should.have.status(409);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(409);
					res.body.should.have.property('message');
					done();
				});
			});
		});
		
		it('Update connected user with code 200 and then 409', function(done) {
			chai.request(server)
			.post('/api/token') 
			.send({
				username: 'fiuberkpo',
				password: 'soyunapassword'
			})
			.end(function(err, result1) {
				chai.request(server)
				.get('/api/business-users/me?token=' + result1.body.token.token)
				.end(function(err, result2) {
					chai.request(server)
					.put('/api/business-users/me?token=' + result1.body.token.token)
					.send({
						_ref: result2.body.businessUser._ref,
						username: 'fiuberPasion',
						password: 'betterPassword',
						name: 'Pedro',
						surname: 'Fernandez'
						
					})
					.end(function(err, res) {
						res.should.have.status(200);
						res.should.be.json;
						chai.request(server)
						.put('/api/business-users/me?token=' + result1.body.token.token)
						.send({
							_ref: result2.body.businessUser._ref, // Try to update with previous _ref
							username: 'fiuberPasion',
							password: 'betterPassword',
							name: 'Pedro',
							surname: 'Fernandez'
						})
						.end(function(err, res) {
							res.should.have.status(409);
							done();
						});
					});
				});
			});
		});
	});
	
	describe('DELETE /api/business-users/:id', function() {
		it('Delete business user by id with code 204', function(done) {
			chai.request(server)
			.delete('/api/business-users/2?token=' + adminToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/business-users/2?token=' + userToken)
				.end(function(err, res) {
					res.should.have.status(404);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(404);
					res.body.should.have.property('message');
					done();	
				});
			});
		});
		
		it('Delete business user by id with code 404', function(done) {
			chai.request(server)
			.delete('/api/business-users/6?token=' + adminToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
	});
	
	describe('GET /api/business-users/:id', function() {
		it('Get business user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/business-users/3?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('businessUser');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.businessUser.should.be.a('Object');
				res.body.businessUser.should.have.property('id');
				res.body.businessUser.id.should.equal(3);
				res.body.businessUser.should.have.property('_ref');
				res.body.businessUser.should.have.property('username');
				res.body.businessUser.username.should.equal('emma23');
				res.body.businessUser.should.have.property('password');
				res.body.businessUser.password.should.equal('ilovedogs');
				res.body.businessUser.should.have.property('name');
				res.body.businessUser.name.should.equal('Emma');
				res.body.businessUser.should.have.property('surname');
				res.body.businessUser.surname.should.equal('Duval');
				res.body.businessUser.should.have.property('roles');
				res.body.businessUser.roles.should.deep.equal(['manager', 'user']);
				done();
			});
		});
	
		it('Get business user by id with code 404', function(done) {
			chai.request(server)
			.get('/api/business-users/5?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
	});
	
	describe('PUT /api/servers/:id', function() {
		it('Update business user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/business-users/1?token=' + userToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/business-users/1?token=' + adminToken)
				.send({
					_ref: result.body.businessUser._ref,
					username: 'fiuberPasion',
					password: 'betterPassword',
					name: 'Pedro',
					surname: 'Fernandez',
					roles: ['manager', 'user']
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('businessUser');
					res.body.metadata.should.be.a('Object');
					res.body.metadata.should.have.property('version');
					res.body.businessUser.should.be.a('Object');
					res.body.businessUser.should.have.property('id');
					res.body.businessUser.id.should.equal(1);
					res.body.businessUser.should.have.property('_ref');
					res.body.businessUser._ref.should.not.equal(result.body.businessUser._ref);
					res.body.businessUser.should.have.property('username');
					res.body.businessUser.username.should.equal('fiuberPasion');
					res.body.businessUser.should.have.property('password');
					res.body.businessUser.password.should.equal('betterPassword');
					res.body.businessUser.should.have.property('name');
					res.body.businessUser.name.should.equal('Pedro');
					res.body.businessUser.should.have.property('surname');
					res.body.businessUser.surname.should.equal('Fernandez');
					res.body.businessUser.should.have.property('roles');
					res.body.businessUser.roles.should.deep.equal(['manager', 'user']);
					done();
				});
			});
		});
	
		it('Update business user by id with code 400', function(done) {
			chai.request(server)
			.put('/api/business-users/1?token=' + adminToken)
			.send({
				username: 'fiuber',
				password: 'password',
				name: 'Pedro',
				surname: 'Fernandez',
				roles: ['user']
			})
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
	
		it('Update business user by id with code 404', function(done) {
			chai.request(server)
			.put('/api/business-users/5?token=' + adminToken)
			.send({
				_ref: 'test',
				username: 'fiuber',
				password: 'password',
				name: 'Pedro',
				surname: 'Fernandez',
				roles: ['user']
			})
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Update business user by id with code 409', function(done) {
			chai.request(server)
			.put('/api/business-users/1?token=' + adminToken)
			.send({
				_ref: 'test',
				username: 'fiuber',
				password: 'password',
				name: 'Pedro',
				surname: 'Fernandez',
				roles: ['user']
			})
			.end(function(err, res) {
				res.should.have.status(409);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(409);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Update business user by id with code 200 and then 409', function(done) {
			chai.request(server)
			.get('/api/business-users/2?token=' + userToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/business-users/2?token=' + adminToken)
				.send({
					_ref: result.body.businessUser._ref,
					username: 'Kapataka',
					password: 'pass',
					name: 'John',
					surname: 'Smith',
					roles: ['admin', 'manager']
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					chai.request(server)
					.put('/api/business-users/2?token=' + adminToken)
					.send({
						_ref: result.body.businessUser._ref, // Try to update with previous _ref
						username: 'marshmello',
						password: 'pass',
						name: 'John',
						surname: 'Smith',
						roles: ['admin', 'manager']
					})
					.end(function(err, res) {
						res.should.have.status(409);
						done();
					});
				});
			});
		});
	});
});

process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');
var moment = require('moment');

chai.should();
chai.use(chaiHttp);

var expiration = moment().add(5, 'days').unix();
var managerJti = uuidv4();
var userJti = uuidv4();
var app1Jti = uuidv4();
var app2Jti = uuidv4();

var businessUser1 = {
	id: 25,
	roles: ['manager']
};

var businessUser2 = {
	id: 16,
	roles: ['user']
};

var appToken1 = jwt.sign({
			id: 1,
			jti: app1Jti,
			exp: expiration}, 
			process.env.APP_KEY);
			
var appToken2 = jwt.sign({
			id: 2,
			jti: app2Jti,
			exp: expiration}, 
			process.env.APP_KEY); 

var managerToken = jwt.sign({
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
			id: 1,
			jti: uuidv4(),
			exp: expiration}, 
			process.env.APP_KEY); 
			
var appTokenExp = jwt.sign({
			id: 1,
			jti: uuidv4(),
			exp: 0}, 
			process.env.APP_KEY); 


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
	
	describe('GET /api/servers', function() {
		it('Get application servers', function(done) {
			chai.request(server)
			.get('/api/servers?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('servers');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.servers.should.be.a('array');
				res.body.servers.length.should.equal(2);
				res.body.servers[0].should.have.property('id');
				res.body.servers[0].id.should.equal(1);
				res.body.servers[0].should.have.property('createdBy');
				res.body.servers[0].createdBy.should.equal('4');
				res.body.servers[0].should.have.property('createdTime');
				res.body.servers[0].createdTime.should.equal('2017-09-18T18:30:23.000Z');
				res.body.servers[0].should.have.property('name');
				res.body.servers[0].name.should.equal('Fiuber');
				res.body.servers[0].should.have.property('lastConnection');
				res.body.servers[0].lastConnection.should.equal('2017-09-18T18:30:23.000Z');
				res.body.servers[1].id.should.equal(2);
				res.body.servers[1].name.should.equal('AppJ');
				done();
			});
		});
	});
	
	describe('POST /api/servers', function() {
		it('Register application server with code 201', function(done) {
			chai.request(server)
			.post('/api/servers?token=' + managerToken)
			.send({
				createdBy: '7',
				createdTime: '2017-09-19T20:30:23.000Z',
				name: 'TestServer'
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('server');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.server.should.have.property('server');
				res.body.server.should.have.property('token');
				res.body.server.server.should.be.a('Object');
				res.body.server.token.should.be.a('Object');
				res.body.server.server.should.have.property('id');
				res.body.server.server.id.should.equal(3);
				res.body.server.server.should.have.property('createdBy');
				res.body.server.server.createdBy.should.equal('7');
				res.body.server.server.should.have.property('createdTime');
				res.body.server.server.createdTime.should.equal('2017-09-19T20:30:23.000Z');
				res.body.server.server.should.have.property('name');
				res.body.server.server.name.should.equal('TestServer');
				res.body.server.server.should.have.property('_ref');
				res.body.server.server.should.have.property('lastConnection');
				res.body.server.token.should.have.property('expiresAt');
				res.body.server.token.should.have.property('token');
				done();
			});
		});
		
		it('Register application server with code 400', function(done) {
			chai.request(server)
			.post('/api/servers?token=' + managerToken)
			.send({
				createdBy: '10',
				name: 'TestServer'
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
	
	describe('POST /api/servers/ping', function() {
		it('Notify server life: without changing token', function(done) {
			chai.request(server)
			.post('/api/servers?token=' + managerToken)
			.send({
				createdBy: '7',
				createdTime: '2017-09-19T20:30:23.000Z',
				name: 'TestServer'
			})
			.end(function(err, result) {
				chai.request(server)
				// POST /api/servers/ping needs existing applicationToken
				.post('/api/servers/ping?token=' + result.body.server.token.token) 
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('ping');
					res.body.metadata.should.be.a('Object');
					res.body.metadata.should.have.property('version');
					res.body.ping.should.be.a('Object');
					res.body.ping.should.have.property('server');
					res.body.ping.server.should.be.a('Object');
					res.body.ping.server.should.have.property('id');
					res.body.ping.server.id.should.equal(3);
					res.body.ping.server.should.have.property('_ref');
					res.body.ping.server.should.have.property('createdBy');
					res.body.ping.server.createdBy.should.equal('7');
					res.body.ping.server.should.have.property('createdTime');
					res.body.ping.server.createdTime.should.equal('2017-09-19T20:30:23.000Z');
					res.body.ping.server.should.have.property('name');
					res.body.ping.server.name.should.equal('TestServer');
					res.body.ping.server.should.have.property('lastConnection');
					res.body.ping.server.lastConnection.should.not.equal(null);
					res.body.ping.should.have.property('token');
					res.body.ping.token.should.be.a('Object');
					res.body.ping.token.should.have.property('expiresAt');
					res.body.ping.token.should.have.property('token');
					res.body.ping.token.token.should.equal(result.body.server.token.token);
					done();
				});
				
			});
		}),
		
		it('Notify server life: changing token', function(done) {
			chai.request(server)
			// POST /api/servers/ping needs appToken from app server in database
			.post('/api/servers/ping?token=' + appTokenExp) 
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('ping');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.ping.should.be.a('Object');
				res.body.should.have.property('ping');
				res.body.ping.should.have.property('server');
				res.body.ping.server.should.be.a('Object');
				res.body.ping.server.should.have.property('id');
				res.body.ping.server.id.should.equal(1);
				res.body.ping.server.should.have.property('_ref');
				res.body.ping.server.should.have.property('createdBy');
				res.body.ping.server.createdBy.should.equal('4');
				res.body.ping.server.should.have.property('createdTime');
				res.body.ping.server.createdTime.should.equal('2017-09-18T18:30:23.000Z');
				res.body.ping.server.should.have.property('name');
				res.body.ping.server.name.should.equal('Fiuber');
				res.body.ping.server.should.have.property('lastConnection');
				res.body.ping.should.have.property('token');
				res.body.ping.token.should.be.a('Object');
				res.body.ping.token.should.have.property('expiresAt');
				res.body.ping.token.should.have.property('token');
				res.body.ping.token.token.should.not.equal(appTokenExp);
				done();
			});
			
		});
		
		it('Notify server life: revoke expired token', function(done) {
			chai.request(server)
			// POST /api/servers/ping needs appToken from app server in database
			.post('/api/servers/ping?token=' + appTokenExp) 
			.end(function(err, res) {
				res.should.have.status(200);
				// AppToken was invalidated
				chai.request(server)
				.post('/api/servers/ping?token=' + appTokenExp)
				.end(function(err, res) {
					res.should.have.status(401);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(401);
					res.body.should.have.property('message');
					res.body.message.should.equal('The token was revoked');
					done();	
				});
			});
			
		});
		
		it('Notify server life: do not revoke not-expired token', function(done) {
			chai.request(server)
			// POST /api/servers/ping needs appToken from app server in database
			.post('/api/servers/ping?token=' + appToken) 
			.end(function(err, res) {
				res.should.have.status(200);
				chai.request(server)
				.post('/api/servers/ping?token=' + appToken)
				.end(function(err, res) {
					res.should.not.have.status(401);
					res.should.have.status(200);
					res.should.be.json;
					res.body.ping.token.token.should.equal(appToken);
					done();	
				});
			});
			
		});
	});
	
	describe('GET /api/servers/:id', function() {
		it('Get application server by id with code 200', function(done) {
			chai.request(server)
			.get('/api/servers/1?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('server');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.server.should.be.a('Object');
				res.body.server.should.have.property('id');
				res.body.server.id.should.equal(1);
				res.body.server.should.have.property('createdBy');
				res.body.server.createdBy.should.equal('4');
				res.body.server.should.have.property('createdTime');
				res.body.server.createdTime.should.equal('2017-09-18T18:30:23.000Z');
				res.body.server.should.have.property('name');
				res.body.server.name.should.equal('Fiuber');
				res.body.server.should.have.property('_ref');
				res.body.server.should.have.property('lastConnection');
				done();
			});
		});
	
		it('Get application server by id with code 404', function(done) {
			chai.request(server)
			.get('/api/servers/3?token=' + userToken)
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
		it('Update application server by id with code 200', function(done) {
			chai.request(server)
			.get('/api/servers/1?token=' + userToken)
			.end(function(err, res) {
				chai.request(server)
				.put('/api/servers/1?token=' + managerToken)
				.send({
					name: 'TestServer',
					_ref: res.body.server._ref
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('server');
					res.body.metadata.should.be.a('Object');
					res.body.metadata.should.have.property('version');
					res.body.server.should.be.a('Object');
					res.body.server.should.have.property('id');
					res.body.server.id.should.equal(1);
					res.body.server.should.have.property('createdBy');
					res.body.server.createdBy.should.equal('4');
					res.body.server.should.have.property('createdTime');
					res.body.server.createdTime.should.equal('2017-09-18T18:30:23.000Z');
					res.body.server.should.have.property('name');
					res.body.server.name.should.equal('TestServer');
					res.body.server.should.have.property('_ref');
					res.body.server.should.have.property('lastConnection');
					done();
				});
			});
		});
	
		it('Update application server by id with code 400', function(done) {
			chai.request(server)
			.put('/api/servers/1?token=' + managerToken)
			.send({
				name: 'TestServer'
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
	
		it('Update application server by id with code 404', function(done) {
			chai.request(server)
			.put('/api/servers/5?token=' + managerToken)
			.send({
				name: 'TestServer',
				_ref: 'test'
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
		
		it('Update application server by id with code 409', function(done) {
			chai.request(server)
			.put('/api/servers/1?token=' + managerToken)
			.send({
				name: 'TestServer',
				_ref: 'test'
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
		
		it('Update application server by id with code 200 and then 409', function(done) {
			chai.request(server)
			.get('/api/servers/2?token=' + userToken)
			.end(function(err, res1) {
				chai.request(server)
				.put('/api/servers/2?token=' + managerToken)
				.send({
					name: 'TestServer',
					_ref: res1.body.server._ref
				})
				.end(function(err, res2) {
					res2.should.have.status(200);
					res2.should.be.json;
					chai.request(server)
					.put('/api/servers/2?token=' + managerToken)
					.send({
						name: 'TestServerAgain',
						_ref: res1.body.server._ref // Try to update with previous _ref
					})
					.end(function(err, res) {
						res.should.have.status(409);
						done();
					});
				});
			});
		});
	});
	
	
	describe('POST /api/servers/:id', function() {
		it('Reset a server token: revoke previous token', function(done) {
			chai.request(server)
			.post('/api/servers/1?token=' + managerToken)
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('server');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.server.should.be.a('Object');
				res.body.server.should.have.property('server');
				res.body.server.server.should.be.a('Object');
				res.body.server.server.should.have.property('id');
				res.body.server.server.id.should.equal(1);
				res.body.server.server.should.have.property('_ref');
				res.body.server.server.should.have.property('createdBy');
				res.body.server.server.createdBy.should.equal('4');
				res.body.server.server.should.have.property('createdTime');
				res.body.server.server.createdTime.should.equal('2017-09-18T18:30:23.000Z');
				res.body.server.server.should.have.property('name');
				res.body.server.server.name.should.equal('Fiuber');
				res.body.server.server.should.have.property('lastConnection');
				res.body.server.should.have.property('token');
				res.body.server.token.should.be.a('Object');
				res.body.server.token.should.have.property('expiresAt');
				res.body.server.token.should.have.property('token');
				res.body.server.token.token.should.not.equal(appToken1);
				chai.request(server)
				.post('/api/servers/ping?token=' + appToken1)
				.end(function(err, res) {
					res.should.have.status(401);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(401);
					res.body.should.have.property('message');
					res.body.message.should.equal('The token was revoked');
					done();	
				});			
			});
		}),
		
		it('Reset a server token: new token can be used', function(done) {
			chai.request(server)
			.post('/api/servers/1?token=' + managerToken)
			.end(function(err, res) {
				res.should.have.status(201);
				chai.request(server)
				.post('/api/servers/ping?token=' + res.body.server.token.token)
				.end(function(err, res) {
					res.should.not.have.status(401);
					res.should.be.json;
					res.should.have.status(200);
					done();	
				});			
			});
		});
	});
	
	
	describe('DELETE /api/servers/:id', function() {
		it('Delete application server by id with code 204', function(done) {
			chai.request(server)
			.delete('/api/servers/2?token=' + managerToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/servers/2?token=' + userToken)
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
		
		it('Delete application server by id with code 404', function(done) {
			chai.request(server)
			.delete('/api/servers/6?token=' + managerToken)
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
});

exports.appToken1 = appToken1;
exports.appToken2 = appToken2;

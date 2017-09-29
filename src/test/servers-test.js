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

var managerJti = uuidv4();
var userJti = uuidv4();
var expiration = moment().add(5, 'days').valueOf();
var businessUser1 = {
	id: 25,
	roles: ['manager']
};

var businessUser2 = {
	id: 16,
	roles: ['user']
};

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
				res.body.should.have.property('token');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.server.should.be.a('Object');
				res.body.token.should.be.a('Object');
				res.body.server.should.have.property('id');
				res.body.server.id.should.equal(3);
				res.body.server.should.have.property('createdBy');
				res.body.server.createdBy.should.equal('7');
				res.body.server.should.have.property('createdTime');
				res.body.server.createdTime.should.equal('2017-09-19T20:30:23.000Z');
				res.body.server.should.have.property('name');
				res.body.server.name.should.equal('TestServer');
				res.body.server.should.have.property('_ref');
				res.body.server.should.have.property('lastConnection');
				res.body.token.should.have.property('expiresAt');
				res.body.token.should.have.property('token');
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
			.put('/api/servers/1?token=' + managerToken)
			.send({
				name: 'TestServer',
				_ref: 'test'
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

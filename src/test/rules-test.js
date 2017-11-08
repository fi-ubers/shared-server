process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');
var serialize = require('serialize-javascript');

chai.use(chaiHttp);
chai.should();

var businessJti = uuidv4();

var businessToken = jwt.sign({
			id: 2,
			roles: ['manager', 'admin', 'user'],
			jti: businessJti},
			process.env.BUSINESS_USER_KEY);
			
var rule = { 
	condition: function(R) {
		R.when(this.age >= 21);
	},
	
	consequence: function(R) {
		this.ageResult = 'Adult';
		R.next();
	}
};

var modifiedRule = { 
	condition: function(R) {
		R.when(this.age >= 18);
	},
	
	consequence: function(R) {
		this.ageResult = 'Adult';
		R.next();
	}
};

var rule3 = { 
	condition: function(R) {
		R.when(this.name.startsWith("C"));
	},
	
	consequence: function(R) {
		this.nameResult = 'Cool person B)';
		R.next();
	}
};

describe('API rules routes', function() {
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
	/*
	describe('GET /api/rules', function() {
		it('Get rules', function(done) {
			chai.request(server)
			.get('/api/rules?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('rules');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.rules.should.be.a('array');
				res.body.rules.length.should.equal(3);
				res.body.rules[0].should.have.property('id');
				res.body.rules[0].id.should.equal(1);
				res.body.rules[0].should.have.property('_ref');
				res.body.rules[0].should.have.property('language');
				res.body.rules[0].language.should.equal('node-rules/javascript');
				res.body.rules[0].should.have.property('lastCommit');
				res.body.rules[0].lastCommit.should.deep.equal({ author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-08-12T18:30:23.000Z' });
				res.body.rules[0].should.have.property('blob');
				res.body.rules[0].blob.should.equal(serialize(rule));
				res.body.rules[0].should.have.property('active');
				res.body.rules[0].active.should.equal(true);
				done();
			});
		});
	});

	describe('POST /api/rules', function() {
		it('Register rule with code 201', function(done) {
			chai.request(server)
			.post('/api/rules?token=' + businessToken)
			.send({
				language: 'node-rules/javascript',
				blob: serialize(rule),
				active: false
			})
			.end(function(err, res) {
				console.log(res.body.message);
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('rule');
				res.body.rule.should.have.property('id');
				res.body.rule.id.should.equal(4);
				res.body.rule.should.have.property('_ref');
				res.body.rule.should.have.property('language');
				res.body.rule.language.should.equal('node-rules/javascript');
				res.body.rule.should.have.property('lastCommit');
				res.body.rule.lastCommit.author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
				res.body.rule.should.have.property('blob');
				res.body.rule.blob.should.equal(serialize(rule));
				res.body.rule.should.have.property('active');
				res.body.rule.active.should.equal(false);
				done();
			});
		});
		
		it('Register rule with code 400', function(done) {
			chai.request(server)
			.post('/api/rules?token=' + businessToken)
			.send({
				language: 'node-rules/javascript',
				blob: serialize(rule)
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
	
	describe('DELETE /api/rules/:id', function() {
		it('Delete rule by id with code 204', function(done) {
			chai.request(server)
			.delete('/api/rules/2?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/rules/2?token=' + businessToken)
				.end(function(err, res) {
					res.should.have.status(404);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(404);
					res.body.should.have.property('message');
					done()
				});
			});
		});
		
		it('Delete rule by id with code 404', function(done) {
			chai.request(server)
			.delete('/api/rules/6?token=' + businessToken)
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

	describe('GET /api/rules/:id', function() {
		it('Get rule by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/3?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('rule');
				res.body.rule.should.have.property('id');
				res.body.rule.id.should.equal(3);
				res.body.rule.should.have.property('_ref');
				res.body.rule.should.have.property('language');
				res.body.rule.language.should.equal('node-rules/javascript');
				res.body.rule.should.have.property('lastCommit');
				res.body.rule.lastCommit.should.deep.equal({ author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-09-19T10:08:25.000Z' });
				res.body.rule.should.have.property('blob');
				res.body.rule.blob.should.equal(serialize(rule3));
				res.body.rule.should.have.property('active');
				res.body.rule.active.should.equal(true);
				done();
			});
		});
	
		it('Get rule by id with code 404', function(done) {
			chai.request(server)
			.get('/api/rules/6?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
	});*/
	
	describe('PUT /api/rules/:id', function() {
		it('Update rule by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/1?token=' + businessToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/rules/1?token=' + businessToken)
				.send({
					_ref: result.body.rule._ref,
					language: 'node-rules/javascript',
					blob: serialize(modifiedRule),
					active: false
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('rule');
					res.body.rule.should.have.property('id');
					res.body.rule.id.should.equal(1);
					res.body.rule.should.have.property('_ref');
					res.body.rule.should.have.property('language');
					res.body.rule.language.should.equal('node-rules/javascript');
					res.body.rule.should.have.property('lastCommit');
					res.body.rule.lastCommit.author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
					res.body.rule.lastCommit.message.should.equal('Modify rule');
					res.body.rule.should.have.property('blob');
					res.body.rule.blob.should.equal(serialize(modifiedRule));
					res.body.rule.should.have.property('active');
					res.body.rule.active.should.equal(false);
					done();
				});
			});
		});
	
		it('Update user by id with code 400', function(done) {
			chai.request(server)
			.put('/api/rules/1?token=' + businessToken)
			.send({
				ref: 'jiji'
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
	
		it('Update rule by id with code 404', function(done) {
			chai.request(server)
			.put('/api/rules/6?token=' + businessToken)
			.send({
				_ref: 'test',
				language: 'node-rules/javascript',
				blob: serialize(modifiedRule),
				active: false
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
		
		it('Update rule by id with code 409', function(done) {
			chai.request(server)
			.put('/api/rules/1?token=' + businessToken)
			.send({
				_ref: 'test',
				language: 'node-rules/javascript',
				blob: serialize(modifiedRule),
				active: false
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
		
		it('Update rule by id with code 200 and then 409', function(done) {
			chai.request(server)
			.get('/api/rules/1?token=' + businessToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/rules/1?token=' + businessToken)
				.send({
					_ref: result.body.rule._ref,
					language: 'node-rules/javascript',
					blob: serialize(modifiedRule),
					active: false
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					chai.request(server)
					.put('/api/rules/1?token=' + businessToken)
					.send({
						// Try to update with previous _ref
						_ref: result.body.rule._ref,
						language: 'node-rules/javascript',
						blob: serialize(modifiedRule),
						active: false
					})
					.end(function(err, res) {
						res.should.have.status(409);
						done();
					});
				});
			});
		});
	});
	/*
	describe('GET /api/rules/:userId/cars', function() {
		it('Get cars of user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/5/cars?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('cars');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.cars.should.be.a('array');
				res.body.cars.length.should.equal(2);
				res.body.cars[0].should.have.property('id');
				res.body.cars[0].id.should.equal(1);
				res.body.cars[0].should.have.property('_ref');
				res.body.cars[0].should.have.property('owner');
				res.body.cars[0].owner.should.equal(5);
				res.body.cars[0].should.have.property('properties');
				res.body.cars[0].properties[0].should.have.property('name');
				res.body.cars[0].properties[0].name.should.equal('Volkswagen Suran');
				res.body.cars[0].properties[0].should.have.property('value');
				res.body.cars[0].properties[0].value.should.equal('AA123BF');
				res.body.cars[1].should.have.property('id');
				res.body.cars[1].id.should.equal(2);
				res.body.cars[1].should.have.property('_ref');
				res.body.cars[1].should.have.property('owner');
				res.body.cars[1].owner.should.equal(5);
				res.body.cars[1].should.have.property('properties');
				res.body.cars[1].properties[0].should.have.property('name');
				res.body.cars[1].properties[0].name.should.equal('Fitito');
				res.body.cars[1].properties[0].should.have.property('value');
				res.body.cars[1].properties[0].value.should.equal('GOF226');
				done();
			});
		});
	});
	
	describe('POST /api/rules/4/cars', function() {
		it('Register user car by id with code 201', function(done) {
			chai.request(server)
			.post('/api/rules/4/cars?token=' + appToken)
			.send({
				properties: [{ name: 'Ford Focus', value: 'GOA432' }]
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('car');
				res.body.car.should.have.property('id');
				res.body.car.id.should.equal(4);
				res.body.car.should.have.property('_ref');
				res.body.car.should.have.property('owner');
				res.body.car.owner.should.equal(4);
				res.body.car.should.have.property('properties');
				res.body.car.properties[0].name.should.equal('Ford Focus');
				res.body.car.properties[0].value.should.equal('GOA432');
				done();
			});
		});
		
		it('Register user car with non-existent user with code 500', function(done) {
			chai.request(server)
			.post('/api/rules/7/cars?token=' + appToken)
			.send({
				properties: [{ name: 'Ford Focus', value: 'GOA432' }]
			})
			.end(function(err, res) {
				res.should.have.status(500);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(500);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Register user car with code 400', function(done) {
			chai.request(server)
			.post('/api/rules/4/cars?token=' + appToken)
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
	
	describe('DELETE /api/rules/:userId/cars/:carId', function() {
		it('Delete user car by id with code 204', function(done) {
			chai.request(server)
			.delete('/api/rules/5/cars/1?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/rules/5/cars/1?token=' + appToken)
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
		
		it('Delete user car by id with code 404', function(done) {
			chai.request(server)
			.delete('/api/rules/1/cars/2?token=' + managerToken)
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
	
	describe('GET /api/rules/:userId/cars/:carId', function() {
		it('Get user car by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/3/cars/3?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('car');
				res.body.car.should.have.property('id');
				res.body.car.id.should.equal(3);
				res.body.car.should.have.property('_ref');
				res.body.car.should.have.property('owner');
				res.body.car.owner.should.equal(3);
				res.body.car.should.have.property('properties');
				res.body.car.properties[0].name.should.equal('Chevrolet Spin');
				res.body.car.properties[0].value.should.equal('NAF248');
				done();
			});
		});
	
		it('Get user car by id with code 404', function(done) {
			chai.request(server)
			.get('/api/rules/8/cars/3?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Get user car by id with code 404', function(done) {
			chai.request(server)
			.get('/api/rules/6/cars/3?token=' + appToken)
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
	
	describe('PUT /api/rules/:userId/cars/:carId', function() {
		it('Update user car by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/3/cars/3?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/rules/3/cars/3?token=' + appToken)
				.send({
					_ref: result.body.car._ref,
					properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('car');
					res.body.car.should.have.property('id');
					res.body.car.id.should.equal(3);
					res.body.car.should.have.property('_ref');
					res.body.car.should.have.property('owner');
					res.body.car.owner.should.equal(3);
					res.body.car.should.have.property('properties');
					res.body.car.properties[0].name.should.equal('Toyota Corolla');
					res.body.car.properties[0].value.should.equal('AA563BD');	
					done();
				});
			});
		});

		it('Update user car by id with code 400', function(done) {
			chai.request(server)
			.put('/api/rules/3/cars/3?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
	
		it('Update user car by id with code 404', function(done) {
			chai.request(server)
			.put('/api/rules/3/cars/8?token=' + appToken)
			.send({
				_ref: 'test',
				properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
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
		
		it('Update user car by id with code 409', function(done) {
			chai.request(server)
			.put('/api/rules/3/cars/3?token=' + appToken)
			.send({
				_ref: 'test',
				properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
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
		
		it('Update user car by id with code 200 and then 409', function(done) {
			chai.request(server)
			.get('/api/rules/3/cars/3?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/rules/3/cars/3?token=' + appToken)
				.send({
					_ref: result.body.car._ref,
					properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					chai.request(server)
					.put('/api/rules/3/cars/3?token=' + appToken)
					.send({
						// Try to update with previous _ref
						_ref: result.body.car._ref, 
						properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
					})
					.end(function(err, res) {
						res.should.have.status(409);
						done();
					});
				});
			});
		});
	});
	
	describe('GET /api/rules/:id/transactions', function() {
		it('Get user transactions by userId with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/1/transactions?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('transactions');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.transactions.should.be.a('array');
				res.body.transactions.length.should.equal(2);
				res.body.transactions[0].should.have.property('id');
				res.body.transactions[0].id.should.equal('2');
				res.body.transactions[0].should.have.property('trip');
				res.body.transactions[0].trip.should.equal(5);
				res.body.transactions[0].should.have.property('timestamp');
				res.body.transactions[0].timestamp.should.equal('2017-10-08T11:47:41.000Z');
				res.body.transactions[0].should.have.property('cost');
				res.body.transactions[0].cost.should.deep.equal({ currency: 'ARS', value: '110' });
				res.body.transactions[0].should.have.property('description');
				res.body.transactions[0].description.should.equal('Another interesting description');
				res.body.transactions[0].should.have.property('data');
				res.body.transactions[1].should.have.property('id');
				res.body.transactions[1].id.should.equal('3');
				res.body.transactions[1].should.have.property('trip');
				res.body.transactions[1].trip.should.equal(10);
				res.body.transactions[1].should.have.property('timestamp');
				res.body.transactions[1].timestamp.should.equal('2017-10-09T18:11:23.000Z');
				res.body.transactions[1].should.have.property('cost');
				res.body.transactions[1].cost.should.deep.equal({ currency: 'ARS', value: '145' });
				res.body.transactions[1].should.have.property('description');
				res.body.transactions[1].description.should.equal('Another incredible description');
				res.body.transactions[1].should.have.property('data');
				done();
			});
		});
	
		it('Get user by id with code 404', function(done) {
			chai.request(server)
			.get('/api/rules/6/transactions?token=' + appToken)
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
	
	describe('GET /api/rules/:id/trips', function() {
		it('Get user trips by userId with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/2/trips?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('trips');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.trips.should.be.a('array');
				res.body.trips.length.should.equal(1);
				res.body.trips[0].should.have.property('id');
				res.body.trips[0].id.should.equal(1);
				res.body.trips[0].should.have.property('applicationOwner');
				res.body.trips[0].applicationOwner.should.equal('2');
				res.body.trips[0].should.have.property('driver');
				res.body.trips[0].driver.should.equal(5);
				res.body.trips[0].should.have.property('passenger');
				res.body.trips[0].passenger.should.equal(2);
				res.body.trips[0].should.have.property('start');
				res.body.trips[0].start.should.deep.equal({ address: {street: 'Av. Santa Fe', location: {lat: -34.595402353, lon: -58.398621082}}, timestamp: '2017-10-28T21:30:23.000Z'});
				res.body.trips[0].should.have.property('end');
				res.body.trips[0].end.should.deep.equal({ address: {street: 'Av. Juan B. Justo', location: {lat: -34.585093255, lon: -58.434187174}}, timestamp: '2017-10-28T21:51:10.000Z'});
				res.body.trips[0].should.have.property('totalTime');
				res.body.trips[0].totalTime.should.equal(1260);
				res.body.trips[0].should.have.property('waitTime');
				res.body.trips[0].waitTime.should.equal(300);
				res.body.trips[0].should.have.property('travelTime');
				res.body.trips[0].travelTime.should.equal(960);
				res.body.trips[0].should.have.property('distance');
				res.body.trips[0].distance.should.equal(5600);
				res.body.trips[0].should.have.property('route');
				res.body.trips[0].route.should.deep.equal([{ location: {lat: -34.596448030, lon: -58.426966667 }, timestamp: '2017-10-28T21:45:12.000Z'}]);
				res.body.trips[0].should.have.property('cost');
				res.body.trips[0].cost.should.deep.equal({ currency: 'ARS', value: 50 });
				done();
			});
		});
	
		it('Get user by id with code 404', function(done) {
			chai.request(server)
			.get('/api/rules/6/trips?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
	})*/
});

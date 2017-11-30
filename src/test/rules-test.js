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
		R.when(this.age && this.age >= 21);
	},
	
	consequence: function(R) {
		this.ageResult = 'Adult';
		R.next();
	}
};

var modifiedRule = { 
	condition: function(R) {
		R.when(this.age && this.age >= 18);
	},
	
	consequence: function(R) {
		this.ageResult = 'Adult';
		R.next();
	}
};

var rule3 = { 
	condition: function(R) {
		R.when(this.name && this.name.startsWith("C"));
	},
	
	consequence: function(R) {
		this.nameResult = 'Cool person B)';
		R.next();
	}
};

var fact1 = { 
	age: 10,
	name: "Mariana",
	surname: "Ale"
};

var fact2 = { 
	age: 23,
	name: "Candela",
	surname: "Dominguez"
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
				res.body.rules.length.should.equal(16);
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
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('rule');
				res.body.rule.should.have.property('id');
				res.body.rule.id.should.equal(17);
				res.body.rule.should.have.property('_ref');
				res.body.rule.should.have.property('language');
				res.body.rule.language.should.equal('node-rules/javascript');
				res.body.rule.should.have.property('lastCommit');
				res.body.rule.lastCommit.id.should.equal(4);
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
			.delete('/api/rules/34?token=' + businessToken)
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
			.get('/api/rules/36?token=' + businessToken)
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
			.put('/api/rules/36?token=' + businessToken)
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
	
	describe('GET /api/rules/:ruleId/commits', function() {
		it('Get commits of rule by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/1/commits?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('commits');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('count');
				res.body.metadata.should.have.property('total');
				res.body.metadata.should.have.property('version');
				res.body.commits.should.be.a('array');
				res.body.commits.length.should.equal(1);
				res.body.commits[0].should.have.property('id');
				res.body.commits[0].id.should.equal(1);
				res.body.commits[0].should.have.property('author');
				res.body.commits[0].author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
				res.body.commits[0].should.have.property('message');
				res.body.commits[0].message.should.equal('Create rule');
				res.body.commits[0].should.have.property('timestamp');
				done();
			});
		});
	});

	describe('GET /api/rules/:ruleId/commits/:commitId', function() {
		it('Get commits of rule by id with code 200', function(done) {
			chai.request(server)
			.get('/api/rules/1/commits/1?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('rule');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.rule.should.have.property('id');
				res.body.rule.id.should.equal(1);
				res.body.rule.should.have.property('_ref');
				res.body.rule.should.have.property('language');
				res.body.rule.language.should.equal('node-rules/javascript');
				res.body.rule.should.have.property('lastCommit');
				res.body.rule.lastCommit.author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
				res.body.rule.lastCommit.message.should.equal('Create rule');
				res.body.rule.should.have.property('blob');
				res.body.rule.blob.should.equal(serialize(rule));
				res.body.rule.should.have.property('active');
				res.body.rule.active.should.equal(true);
				done();
			});
		});
	});
	
	describe('Rules and commits', function() {
		it('Register rule and request its commits', function(done) {
			chai.request(server)
			.post('/api/rules?token=' + businessToken)
			.send({
				language: 'node-rules/javascript',
				blob: serialize(rule3),
				active: false
			})
			.end(function(err, res) {
				res.should.have.status(201);
				chai.request(server)
				.put('/api/rules/17?token=' + businessToken)
				.send({
					_ref: res.body.rule._ref,
					language: 'node-rules/javascript',
					blob: serialize(modifiedRule),
					active: false
				})
				.end(function(err, res) {
					res.should.have.status(200);
					chai.request(server)
					.get('/api/rules/17/commits?token=' + businessToken)
					.end(function(err, res) {
						res.should.have.status(200);
						res.body.commits.should.be.a('array');
						res.body.commits.length.should.equal(2);
						res.body.commits[0].should.have.property('id');
						res.body.commits[0].id.should.equal(4);
						res.body.commits[0].should.have.property('author');
						res.body.commits[0].author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
						res.body.commits[0].should.have.property('message');
						res.body.commits[0].message.should.equal('Create rule');
						res.body.commits[0].should.have.property('id');
						res.body.commits[1].id.should.equal(5);
						res.body.commits[1].should.have.property('author');
						res.body.commits[1].author.should.deep.equal({id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']});
						res.body.commits[1].should.have.property('message');
						res.body.commits[1].message.should.equal('Modify rule');
						done();
					});
				});
			});
		});
	})
	
	describe('POST /api/rules/:ruleId/run', function() {
		it('Run specific rule with code 200', function(done) {
			chai.request(server)
			.post('/api/rules/3/run?token=' + businessToken)
			.send({
				facts: [
					{ language: 'node-rules/javascript', blob: serialize(fact1) },
					{ language: 'node-rules/javascript', blob: serialize(fact2) }
				]
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('facts');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.facts.should.be.a('array');
				res.body.facts.length.should.equal(2);
				res.body.facts[0].should.have.property('language');
				res.body.facts[0].language.should.equal('node-rules/javascript');
				res.body.facts[0].should.have.property('blob');
				res.body.facts[0].blob.should.not.include('nameResult');
				res.body.facts[1].should.have.property('language');
				res.body.facts[1].language.should.equal('node-rules/javascript');
				res.body.facts[1].should.have.property('blob');
				res.body.facts[1].blob.should.include('Cool person B)');
				done();
			});
		});
		
		it('Run specific rule with code 400', function(done) {
			chai.request(server)
			.post('/api/rules/1/run?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Run specific rule with code 404', function(done) {
			chai.request(server)
			.post('/api/rules/38/run?token=' + businessToken)
			.send({
				facts: [
					{ language: 'node-rules/javascript', blob: serialize(fact1) },
					{ language: 'node-rules/javascript', blob: serialize(fact2) }
				]
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
	
	describe('POST /api/rules/:ruleId/run', function() {
		it('Run all rules with code 200', function(done) {
			chai.request(server)
			.post('/api/rules/run?token=' + businessToken)
			.send({
				rules: [
					'1', 
					'2',
					'3'
				],
				facts: [
					{ language: 'node-rules/javascript', blob: serialize(fact1) },
					{ language: 'node-rules/javascript', blob: serialize(fact2) }
				]
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('facts');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.facts.should.be.a('array');
				res.body.facts.length.should.equal(2);
				res.body.facts[0].should.have.property('language');
				res.body.facts[0].language.should.equal('node-rules/javascript');
				res.body.facts[0].should.have.property('blob');
				res.body.facts[0].blob.should.not.include('Cool person B)');
				res.body.facts[0].blob.should.not.include('Adult');
				res.body.facts[0].blob.should.include('Short surname');
				res.body.facts[1].should.have.property('language');
				res.body.facts[1].language.should.equal('node-rules/javascript');
				res.body.facts[1].should.have.property('blob');
				res.body.facts[1].blob.should.not.include('Short surname');
				res.body.facts[1].blob.should.include('Cool person B)');
				res.body.facts[1].blob.should.include('Adult');
				done();
			});
		});
		
		it('Run some rules with code 200', function(done) {
			chai.request(server)
			.post('/api/rules/run?token=' + businessToken)
			.send({
				rules: [
					'2',
					'3'
				],
				facts: [
					{ language: 'node-rules/javascript', blob: serialize(fact1) },
					{ language: 'node-rules/javascript', blob: serialize(fact2) }
				]
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('facts');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.facts.should.be.a('array');
				res.body.facts.length.should.equal(2);
				res.body.facts[0].should.have.property('language');
				res.body.facts[0].language.should.equal('node-rules/javascript');
				res.body.facts[0].should.have.property('blob');
				res.body.facts[0].blob.should.not.include('Cool person B)');
				res.body.facts[0].blob.should.not.include('Adult');
				res.body.facts[0].blob.should.include('Short surname');
				res.body.facts[1].should.have.property('language');
				res.body.facts[1].language.should.equal('node-rules/javascript');
				res.body.facts[1].should.have.property('blob');
				res.body.facts[1].blob.should.not.include('Short surname');
				res.body.facts[1].blob.should.include('Cool person B)');
				res.body.facts[1].blob.should.not.include('Adult');
				done();
			});
		});
		
		it('Run rules with code 400', function(done) {
			chai.request(server)
			.post('/api/rules/run?token=' + businessToken)
			.end(function(err, res) {
				res.should.have.status(400);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(400);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Run rules with code 404', function(done) {
			chai.request(server)
			.post('/api/rules/run?token=' + businessToken)
			.send({
				rules: [
					'29',
					'32'
				],
				facts: [
					{ language: 'node-rules/javascript', blob: serialize(fact1) },
					{ language: 'node-rules/javascript', blob: serialize(fact2) }
				]
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
});

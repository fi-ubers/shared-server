process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');
var moment = require('moment');

chai.use(chaiHttp);
chai.should();

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
				res.body.users.length.should.equal(6);
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
				res.body.users[2].cars.should.deep.equal([{id: 3, _ref: 'specialRefForTesting', owner: 3, properties: [{ name: 'Chevrolet Spin', value: 'NAF248'}]}]);
				res.body.users[4].cars.should.deep.equal([{id: 1, _ref: 'ref1', owner: 5, properties: [{ name: 'Volkswagen Suran', value: 'AA123BF' }]}, {id: 2, _ref: 'ref2', owner: 5, properties: [{ name: 'Fitito', value: 'GOF226' }]}]);
				res.body.users[0].should.not.have.property('password');
				res.body.users[0].should.not.have.property('fb');
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
				res.body.users.length.should.equal(6);
				res.body.users[2].should.have.property('id');
				res.body.users[2].id.should.equal(3);
				res.body.users[2].should.have.property('_ref');
				res.body.users[2].should.have.property('applicationOwner');
				res.body.users[2].applicationOwner.should.equal('1');
				res.body.users[2].should.have.property('type');
				res.body.users[2].type.should.equal('driver');
				res.body.users[2].should.have.property('cars');
				res.body.users[2].cars.should.deep.equal([{id: 3, _ref: 'specialRefForTesting', owner: 3, properties: [{ name: 'Chevrolet Spin', value: 'NAF248'}]}]);
				res.body.users[2].should.have.property('username');
				res.body.users[2].username.should.equal('iwilldriveu');
				res.body.users[2].should.have.property('name');
				res.body.users[2].name.should.equal('Marcos');
				res.body.users[2].should.have.property('surname');
				res.body.users[2].surname.should.equal('Sarmiento');
				res.body.users[2].should.have.property('country');
				res.body.users[2].country.should.equal('Argentina');
				res.body.users[2].should.have.property('email');
				res.body.users[2].email.should.equal('marquisar@gmail.com');
				res.body.users[2].should.have.property('birthdate');
				res.body.users[2].birthdate.should.equal('10/03/1990');
				res.body.users[2].should.have.property('images');
				res.body.users[2].images.should.deep.equal(['imageLink', 'anotherImageLink']);
				res.body.users[2].should.have.property('balance');
				res.body.users[2].balance.should.deep.equal([]);
				res.body.users[0].should.not.have.property('password');
				res.body.users[0].should.not.have.property('fb');
				done();
			});
		});
		
		it('Get users with BusinessToken but unauthorized role', function(done) {
			chai.request(server)
			.get('/api/users?token=' + managerToken)
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

	describe('POST /api/users', function() {
		it('Register user with code 201', function(done) {
			chai.request(server)
			.post('/api/users?token=' + appToken)
			.send({
				type: 'driver',
				username: 'olibeer',
				password: 'ninjaWArrior',
				firstname: 'Oliver',
				lastname: 'Williams',
				country: 'Argentina',
				email: 'oliwilli@gmail.com',
				birthdate: '14/12/1992',
				images: ['myCarImageLink']
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('user');
				res.body.user.should.have.property('id');
				res.body.user.id.should.equal(7);
				res.body.user.should.have.property('_ref');
				res.body.user.should.have.property('applicationOwner');
				res.body.user.applicationOwner.should.equal('15');
				res.body.user.should.have.property('type');
				res.body.user.type.should.equal('driver');
				res.body.user.should.have.property('cars');
				res.body.user.should.have.property('username');
				res.body.user.username.should.equal('olibeer');
				res.body.user.should.have.property('name');
				res.body.user.name.should.equal('Oliver');
				res.body.user.should.have.property('surname');
				res.body.user.surname.should.equal('Williams');
				res.body.user.should.have.property('country');
				res.body.user.country.should.equal('Argentina');
				res.body.user.should.have.property('email');
				res.body.user.email.should.equal('oliwilli@gmail.com');
				res.body.user.should.have.property('birthdate');
				res.body.user.birthdate.should.equal('14/12/1992');
				res.body.user.should.have.property('images');
				res.body.user.images.should.deep.equal(['myCarImageLink']);
				res.body.user.should.have.property('balance');
				res.body.user.should.not.have.property('password');
				res.body.user.should.not.have.property('fb');
				chai.request(server)
				.post('/api/users/7/cars?token=' + appToken)
				.send({
					properties: [{ name: 'Ford Focus', value: 'MNA872' }]
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
					res.body.car.owner.should.equal(7);
					res.body.car.should.have.property('properties');
					res.body.car.properties[0].name.should.equal('Ford Focus');
					res.body.car.properties[0].value.should.equal('MNA872');
					chai.request(server)
					.get('/api/users?token=' + appToken)
					.end(function(err, res) {
						res.should.have.status(200);
						res.should.be.json;
						res.body.should.be.a('Object');
						res.body.users.should.be.a('array');
						res.body.users.length.should.equal(7);
						res.body.users[5].should.have.property('cars');
						done();
					});
				});
			});
		});
		
		it('Register user with existing email code 201', function(done) {
			chai.request(server)
			.post('/api/users?token=' + appToken)
			.send({
				type: 'driver',
				username: 'olibeer',
				password: 'ninjaWArrior',
				firstname: 'Oliver',
				lastname: 'Williams',
				country: 'Argentina',
				email: 'marquisar@gmail.com',
				birthdate: '14/12/1992',
				images: ['myCarImageLink']
			})
			.end(function(err, res) {
				res.should.have.status(500);
				done();
			});
		});
		
		it('Register user with code 400', function(done) {
			chai.request(server)
			.post('/api/users?token=' + appToken)
			.send({
				username: 'RockingDerekkk',
				password: 'der101',
				firstname: 'Derek',
				lastname: 'Brown'
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
	
	describe('POST /api/users/validate', function() {
		it('Validate user with code 200', function(done) {
			chai.request(server)
			.post('/api/users/validate?token=' + appToken)
			.send({
				username: 'iwilldriveu',
				password: 'rightnow'
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('user');
				res.body.user.should.have.property('id');
				res.body.user.id.should.equal(3);
				res.body.user.should.have.property('_ref');
				res.body.user.should.have.property('applicationOwner');
				res.body.user.applicationOwner.should.equal('1');
				res.body.user.should.have.property('type');
				res.body.user.type.should.equal('driver');
				res.body.user.should.have.property('cars');
				res.body.user.cars.should.deep.equal([{ id: 3, _ref: 'specialRefForTesting', owner: 3, properties: [{name: 'Chevrolet Spin', value: 'NAF248'}]}]);
				res.body.user.should.have.property('username');
				res.body.user.username.should.equal('iwilldriveu');
				res.body.user.should.have.property('name');
				res.body.user.name.should.equal('Marcos');
				res.body.user.should.have.property('surname');
				res.body.user.surname.should.equal('Sarmiento');
				res.body.user.should.have.property('country');
				res.body.user.country.should.equal('Argentina');
				res.body.user.should.have.property('email');
				res.body.user.email.should.equal('marquisar@gmail.com');
				res.body.user.should.have.property('birthdate');
				res.body.user.birthdate.should.equal('10/03/1990');
				res.body.user.should.have.property('images');
				res.body.user.images.should.deep.equal(['imageLink', 'anotherImageLink']);
				res.body.user.should.have.property('balance');
				res.body.user.should.not.have.property('password');
				res.body.user.should.not.have.property('fb');
				done();
			});
		});
		
		it('Validate user with code 400: missing parameters', function(done) {
			chai.request(server)
			.post('/api/users/validate?token=' + appToken)
			.send({
				username: 'emi94'
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
		
		it('Validate user with code 400: missing parameters', function(done) {
			chai.request(server)
			.post('/api/users/validate?token=' + appToken)
			.send({
				password: 'p4assw0rd'
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
		
		it('Validate user with code 400: failed validation', function(done) {
			chai.request(server)
			.post('/api/users/validate?token=' + appToken)
			.send({
				username: 'olibeer',
				password: 'ninjaWArrior'
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
	
	describe('DELETE /api/users/:id', function() {
		it('Delete user by id with code 204 and ApplicationToken', function(done) {
			chai.request(server)
			.delete('/api/users/5?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/users/7?token=' + appToken)
				.end(function(err, res) {
					res.should.have.status(404);
					res.should.be.json;
					res.body.should.have.property('code');
					res.body.code.should.equal(404);
					res.body.should.have.property('message');
					// Check the cars of the deleted user
					chai.request(server)
					.get('/api/users/6/cars?token=' + appToken)
					.end(function(err, res) {
						res.should.have.status(200);
						res.should.be.json;
						res.body.cars.should.deep.equal([]);
						done();
					});
				});
			});
		});
		
		it('Delete user by id with code 204 and BusinessToken', function(done) {
			chai.request(server)
			.delete('/api/users/1?token=' + managerToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/users/1?token=' + userToken)
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
		
		it('Delete user by id with unauthorized role', function(done) {
			chai.request(server)
			.delete('/api/users/1?token=' + userToken)
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
		
		it('Delete user by id with code 404', function(done) {
			chai.request(server)
			.delete('/api/users/7?token=' + managerToken)
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

	describe('GET /api/users/:id', function() {
		it('Get user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/users/3?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('user');
				res.body.user.should.have.property('id');
				res.body.user.id.should.equal(3);
				res.body.user.should.have.property('_ref');
				res.body.user.should.have.property('applicationOwner');
				res.body.user.applicationOwner.should.equal('1');
				res.body.user.should.have.property('type');
				res.body.user.type.should.equal('driver');
				res.body.user.should.have.property('cars');
				res.body.user.cars.should.deep.equal([{ id: 3, _ref: 'specialRefForTesting', owner: 3, properties: [{name: 'Chevrolet Spin', value: 'NAF248'}]}]);
				res.body.user.should.have.property('username');
				res.body.user.username.should.equal('iwilldriveu');
				res.body.user.should.have.property('name');
				res.body.user.name.should.equal('Marcos');
				res.body.user.should.have.property('surname');
				res.body.user.surname.should.equal('Sarmiento');
				res.body.user.should.have.property('country');
				res.body.user.country.should.equal('Argentina');
				res.body.user.should.have.property('email');
				res.body.user.email.should.equal('marquisar@gmail.com');
				res.body.user.should.have.property('birthdate');
				res.body.user.birthdate.should.equal('10/03/1990');
				res.body.user.should.have.property('images');
				res.body.user.images.should.deep.equal(['imageLink', 'anotherImageLink']);
				res.body.user.should.have.property('balance');
				res.body.user.should.not.have.property('password');
				res.body.user.should.not.have.property('fb');
				done();
			});
		});
	
		it('Get user by id with code 404', function(done) {
			chai.request(server)
			.get('/api/users/7?token=' + userToken)
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
	
	describe('PUT /api/users/:id', function() {
		it('Update user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/users/1?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/users/1?token=' + appToken)
				.send({
					_ref: result.body.user._ref,
					type: 'passenger',
					username: 'roblue',
					password: 'betterPassword',
					firstname: 'Robin',
					lastname: 'Scherbatsky',
					country: 'Argentina',
					email: 'robinscher@gmail.com',
					birthdate: '23/07/1980',
					images: ['imageLink', 'anotherImageLink']
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('Object');
					res.body.should.have.property('metadata');
					res.body.should.have.property('user');
					res.body.user.should.have.property('id');
					res.body.user.id.should.equal(1);
					res.body.user.should.have.property('_ref');
					res.body.user.should.have.property('applicationOwner');
					res.body.user.applicationOwner.should.equal('2');
					res.body.user.should.have.property('type');
					res.body.user.type.should.equal('passenger');
					res.body.user.should.have.property('cars');
					res.body.user.cars.should.deep.equal([]);
					res.body.user.should.have.property('username');
					res.body.user.username.should.equal('roblue');
					res.body.user.should.have.property('name');
					res.body.user.name.should.equal('Robin');
					res.body.user.should.have.property('surname');
					res.body.user.surname.should.equal('Scherbatsky');
					res.body.user.should.have.property('country');
					res.body.user.country.should.equal('Argentina');
					res.body.user.should.have.property('email');
					res.body.user.email.should.equal('robinscher@gmail.com');
					res.body.user.should.have.property('birthdate');
					res.body.user.should.have.property('images');
					res.body.user.images.should.deep.equal(['imageLink', 'anotherImageLink']);
					res.body.user.should.have.property('balance');
					res.body.user.should.not.have.property('password');
					res.body.user.should.not.have.property('fb');
					chai.request(server)
					.get('/api/users/1?token=' + userToken)
					.end(function(err, res1) {
						res1.should.have.status(200);
						res1.should.be.json;
						res1.body.should.be.a('Object');
						res1.body.should.have.property('metadata');
						res1.body.should.have.property('user');
						res1.body.user.should.have.property('id');
						res1.body.user.id.should.equal(1);
						res1.body.user.should.have.property('_ref');
						res1.body.user.should.have.property('applicationOwner');
						res1.body.user.applicationOwner.should.equal('2');
						res1.body.user.should.have.property('type');
						res1.body.user.type.should.equal('passenger');
						res1.body.user.should.have.property('cars');
						res1.body.user.should.have.property('username');
						res1.body.user.username.should.equal('roblue');
						res1.body.user.should.have.property('name');
						res1.body.user.name.should.equal('Robin');
						res1.body.user.should.have.property('surname');
						res1.body.user.surname.should.equal('Scherbatsky');
						res1.body.user.should.have.property('country');
						res1.body.user.country.should.equal('Argentina');
						res1.body.user.should.have.property('email');
						res1.body.user.email.should.equal('robinscher@gmail.com');
						res1.body.user.should.have.property('birthdate');
						res1.body.user.should.have.property('images');
						res1.body.user.images.should.deep.equal(['imageLink', 'anotherImageLink']);
						res1.body.user.should.have.property('balance');
						res1.body.user.should.not.have.property('password');
						res1.body.user.should.not.have.property('fb');
						done();
					});
				});
			});
		});
	
		it('Update user by id with code 400', function(done) {
			chai.request(server)
			.put('/api/users/1?token=' + appToken)
			.send({
				username: 'fiuber',
				password: 'password'
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
	
		it('Update user by id with code 404', function(done) {
			chai.request(server)
			.put('/api/users/7?token=' + appToken)
			.send({
				_ref: 'test',
				type: 'passenger',
				username: 'roblue',
				password: 'betterPassword',
				firstname: 'Robin',
				lastname: 'Scherbatsky',
				country: 'Argentina',
				email: 'robinscher@gmail.com',
				birthdate: '23/07/1980',
				images: ['imageLink', 'anotherImageLink']
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
		
		it('Update user by id with code 409', function(done) {
			chai.request(server)
			.put('/api/users/1?token=' + appToken)
			.send({
				_ref: 'test',
				type: 'passenger',
				username: 'roblue',
				password: 'betterPassword',
				firstname: 'Robin',
				lastname: 'Scherbatsky',
				country: 'Argentina',
				email: 'robinscher@gmail.com',
				birthdate: '23/07/1980',
				images: ['imageLink', 'anotherImageLink']
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
		
		it('Update user by id with code 200 and then 409', function(done) {
			chai.request(server)
			.get('/api/users/1?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/users/1?token=' + appToken)
				.send({
					_ref: result.body.user._ref,
					type: 'passenger',
					username: 'roblue',
					password: 'betterPassword',
					firstname: 'Robin',
					lastname: 'Scherbatsky',
					country: 'Argentina',
					email: 'robinscher@gmail.com',
					birthdate: '23/07/1980',
					images: ['imageLink', 'anotherImageLink']
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					chai.request(server)
					.put('/api/users/1?token=' + appToken)
					.send({
						// Try to update with previous _ref
						_ref: result.body.user._ref, 
						type: 'passenger',
						username: 'roblue',
						password: 'betterPassword',
						firstname: 'Robin',
						lastname: 'Scherbatsky',
						country: 'Argentina',
						email: 'robinscher@gmail.com',
						birthdate: '23/07/1980',
						images: ['imageLink', 'anotherImageLink']
					})
					.end(function(err, res) {
						res.should.have.status(409);
						done();
					});
				});
			});
		});
	});
	
	describe('GET /api/users/:userId/cars', function() {
		it('Get cars of user by id with code 200', function(done) {
			chai.request(server)
			.get('/api/users/5/cars?token=' + appToken)
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
		
		it('Get cars of user by id with code 404', function(done) {
			chai.request(server)
			.get('/api/users/8/cars?token=' + userToken)
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
	
	describe('POST /api/users/4/cars', function() {
		it('Register user car by id with code 201', function(done) {
			chai.request(server)
			.post('/api/users/4/cars?token=' + appToken)
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
			.post('/api/users/7/cars?token=' + appToken)
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
			.post('/api/users/4/cars?token=' + appToken)
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
	
	describe('DELETE /api/users/:userId/cars/:carId', function() {
		it('Delete user car by id with code 204', function(done) {
			chai.request(server)
			.delete('/api/users/5/cars/1?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(204);
				chai.request(server)
				.get('/api/users/5/cars/1?token=' + appToken)
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
			.delete('/api/users/1/cars/2?token=' + managerToken)
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
	
	describe('GET /api/users/:userId/cars/:carId', function() {
		it('Get user car by id with code 200', function(done) {
			chai.request(server)
			.get('/api/users/3/cars/3?token=' + appToken)
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
			.get('/api/users/8/cars/3?token=' + userToken)
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
			.get('/api/users/6/cars/3?token=' + appToken)
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
	
	describe('PUT /api/users/:userId/cars/:carId', function() {
		it('Update user car by id with code 200', function(done) {
			chai.request(server)
			.get('/api/users/3/cars/3?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/users/3/cars/3?token=' + appToken)
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
			.put('/api/users/3/cars/3?token=' + appToken)
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
			.put('/api/users/3/cars/8?token=' + appToken)
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
			.put('/api/users/3/cars/3?token=' + appToken)
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
			.get('/api/users/3/cars/3?token=' + appToken)
			.end(function(err, result) {
				chai.request(server)
				.put('/api/users/3/cars/3?token=' + appToken)
				.send({
					_ref: result.body.car._ref,
					properties: [{ name: 'Toyota Corolla', value: 'AA563BD' }]
				})
				.end(function(err, res) {
					res.should.have.status(200);
					res.should.be.json;
					chai.request(server)
					.put('/api/users/3/cars/3?token=' + appToken)
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
	
	describe('GET /api/users/:id/transactions', function() {
		it('Get user transactions by userId with code 200', function(done) {
			chai.request(server)
			.get('/api/users/1/transactions?token=' + appToken)
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
				res.body.transactions[0].id.should.equal(2);
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
				res.body.transactions[1].id.should.equal(3);
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
			.get('/api/users/8/transactions?token=' + userToken)
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
	
	describe('POST /api/users/4/transactions', function() {
		it('Create a payment for the user by id with code 200', function(done) {
			chai.request(server)
			.post('/api/users/4/transactions?token=' + appToken)
			.send({
				trip: 1,
				cost: { currency: "ARS", value: 50 }, 
				description: "Trip card payment", 
				paymethod: { name: 'card', parameters: { ccvv: '1234', expiration_month: '08', expiration_year: '2018', number: '656435362525', type: 'visa', method: 'card' }}
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('transaction');
				res.body.transaction.should.have.property('id');
				res.body.transaction.id.should.equal(4);
				res.body.transaction.should.have.property('trip');
				res.body.transaction.should.have.property('timestamp');
				res.body.transaction.should.have.property('cost');
				res.body.transaction.cost.should.deep.equal({ currency: "ARS", value: 50 });
				res.body.transaction.should.have.property('description');
				res.body.transaction.description.should.equal('Trip card payment');
				res.body.transaction.should.have.property('data');
				res.body.transaction.should.not.have.property('paymethod');
				done();
			});
		});
	});
	
	describe('GET /api/users/:id/trips', function() {
		it('Get user trips by userId with code 200', function(done) {
			chai.request(server)
			.get('/api/users/2/trips?token=' + appToken)
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
				res.body.trips.length.should.equal(4);
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
			.get('/api/users/8/trips?token=' + userToken)
			.end(function(err, res) {
				res.should.have.status(404);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(404);
				res.body.should.have.property('message');
				done();
			});
		});
	})
});

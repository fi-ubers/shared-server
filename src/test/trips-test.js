process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');
var knex = require('./../db/knex');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');
var geolib = require('geolib');

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


describe('API trips routes', function() {
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
	
	describe('GET /api/trips', function() {
		it('Get trips', function(done) {
			chai.request(server)
			.get('/api/trips?token=' + userToken)
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
				res.body.trips[0].should.not.have.property('paymethod');
				done();
			});
		});
	});


	describe('POST /api/trips', function() {
		it('Register trip with card and code 201', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 1,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 6000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]
				},
				paymethod: { name: 'card', parameters: { ccvv: '1234', expiration_month: '08', expiration_year: '2018', number: '656435362525', type: 'visa' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('trip');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.trip.should.have.property('id');
				res.body.trip.id.should.equal(5);
				res.body.trip.should.have.property('applicationOwner');
				res.body.trip.applicationOwner.should.equal('1');
				res.body.trip.should.have.property('driver');
				res.body.trip.driver.should.equal(3);
				res.body.trip.should.have.property('passenger');
				res.body.trip.passenger.should.equal(1);
				res.body.trip.should.have.property('start');
				res.body.trip.start.should.deep.equal({ address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'});
				res.body.trip.should.have.property('end');
				res.body.trip.end.should.deep.equal({ address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'});
				res.body.trip.should.have.property('totalTime');
				res.body.trip.totalTime.should.equal(1440);
				res.body.trip.should.have.property('waitTime');
				res.body.trip.waitTime.should.equal(300);
				res.body.trip.should.have.property('travelTime');
				res.body.trip.travelTime.should.equal(1140);
				res.body.trip.should.have.property('distance');
				res.body.trip.distance.should.equal(6000);
				res.body.trip.should.have.property('route');
				res.body.trip.route.should.deep.equal([{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]);
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 50 });
				done();
			});
		});
		
		it('Register trip with cash and code 201', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 1,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 6000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('trip');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.trip.should.have.property('id');
				res.body.trip.id.should.equal(5);
				res.body.trip.should.have.property('applicationOwner');
				res.body.trip.applicationOwner.should.equal('1');
				res.body.trip.should.have.property('driver');
				res.body.trip.driver.should.equal(3);
				res.body.trip.should.have.property('passenger');
				res.body.trip.passenger.should.equal(1);
				res.body.trip.should.have.property('start');
				res.body.trip.start.should.deep.equal({ address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'});
				res.body.trip.should.have.property('end');
				res.body.trip.end.should.deep.equal({ address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'});
				res.body.trip.should.have.property('totalTime');
				res.body.trip.totalTime.should.equal(1440);
				res.body.trip.should.have.property('waitTime');
				res.body.trip.waitTime.should.equal(300);
				res.body.trip.should.have.property('travelTime');
				res.body.trip.travelTime.should.equal(1140);
				res.body.trip.should.have.property('distance');
				res.body.trip.distance.should.equal(6000);
				res.body.trip.should.have.property('route');
				res.body.trip.route.should.deep.equal([{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]);
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 50 });
				done();
			});
		});
		
		it('Register free trip', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 4,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 6000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 0 });
				done();
			});
		});
		
		it('Register trip testing cost per km', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 2,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 10000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 150 });
				done();
			});
		});
		
		it('Register trip testing discounts I', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 2,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T15:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-08T15:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 10000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-11-08T15:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 142.5 });
				done();
			});
		});
		
		it('Register trip testing discounts II', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 2,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-28T15:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-28T15:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 10000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-28T15:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 142.5 });
				done();
			});
		});
		
		it('Register trip testing surcharges', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 2,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T18:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-08T18:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 10000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-11-08T18:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(201);
				res.should.be.json;
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: "ARS", value: 165 });
				done();
			});
		});
		
		it('Register trip fail: Negative balance', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 6,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T18:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-08T18:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 10000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-11-08T18:24:30.000Z'}]
				},
				paymethod: { name: 'cash', parameters: { type: 'someType' } }
			})
			.end(function(err, res) {
				res.should.have.status(402);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(402);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Register trip with code 400', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 1
				}
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
		
		it('Register trip with payment fail', function(done) {
			chai.request(server)
			.post('/api/trips?token=' + appToken)
			.send({
				trip: {
					driver: 3,
					passenger: 1,
					start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-10-30T10:15:54.000Z'},
					end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-10-30T10:39:10.000Z'},
					totalTime: 1440, 
					waitTime: 300,
					travelTime: 1140,
					distance: 6000,
					route: [{ location: {lat: -34.617867373, lon: -58.385875225 }, timestamp: '2017-10-30T10:24:30.000Z'}]
				},
				paymethod: { name: 'card', parameters: { type: 'visa' } }
			})
			.end(function(err, res) {
				res.should.have.status(500);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(500);
				res.body.should.have.property('message');
				res.body.message.should.include('Create Payment Error');
				res.body.should.have.property('transaction');
				done();
			});
		});
	});
	
	describe('POST /api/trips', function() {

		it('Estimate trip with code 200', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 2,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-08T18:39:10.000Z'},
				distance: 10000
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('metadata');
				res.body.metadata.should.have.property('version');
				res.body.should.have.property('cost');
				res.body.cost.should.deep.equal({ currency: "ARS", value: 165 });
				done();
			});
		});
		
		it('Estimate free trip', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 4,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-08T18:39:10.000Z'}
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('metadata');
				res.body.metadata.should.have.property('version');
				res.body.should.have.property('cost');
				res.body.cost.should.deep.equal({ currency: "ARS", value: 0 });
				done();
			});
		});
		
		it('Estimate trip with first trip discount', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 1,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-05T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: null},
				distance: 10000
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('metadata');
				res.body.metadata.should.have.property('version');
				res.body.should.have.property('cost');
				res.body.cost.should.deep.equal({ currency: "ARS", value: 50 });
				done();
			});
		});
		
		it('Estimate trip with estimated distance', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 2,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-05T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: null}
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('metadata');
				res.body.metadata.should.have.property('version');
				res.body.should.have.property('cost');
				var estimatedDistance = geolib.getDistance({ latitude: -34.616213000, longitude: -58.369527000 }, { latitude: -34.586252120, longitude: -58.398663998 });
				var cost = estimatedDistance/1000 * 15;
				res.body.cost.should.deep.equal({ currency: "ARS", value: parseFloat(cost.toFixed(2)) });
				done();
			});
		});
		
		it('Estimate trip with minimum cost', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 1,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-05T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: '2017-11-05T18:39:10.000Z'},
				distance: 2000
			})
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.have.property('metadata');
				res.body.metadata.should.have.property('version');
				res.body.should.have.property('cost');
				res.body.cost.should.deep.equal({ currency: "ARS", value: 50 });
				done();
			});
		});
		
		it('Estimate trip fail: Negative balance', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				passenger: 6,
				start: { address: {street: 'Av. Paseo Colon', location: {lat: -34.616213000, lon: -58.369527000}}, timestamp: '2017-11-08T18:15:54.000Z'},
				end: { address: {street: 'Av. Gral. Las Heras', location: {lat: -34.586252120, lon: -58.398663998}}, timestamp: null},
				distance: 6000
			})
			.end(function(err, res) {
				res.should.have.status(402);
				res.should.be.json;
				res.body.should.have.property('code');
				res.body.code.should.equal(402);
				res.body.should.have.property('message');
				done();
			});
		});
		
		it('Estimate trip with code 400', function(done) {
			chai.request(server)
			.post('/api/trips/estimate?token=' + appToken)
			.send({
				driver: 3,
				passenger: 1
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
	
	describe('GET /api/trips/:id', function() {
		it('Get application trip by id with code 200', function(done) {
			chai.request(server)
			.get('/api/trips/1?token=' + appToken)
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('Object');
				res.body.should.have.property('metadata');
				res.body.should.have.property('trip');
				res.body.metadata.should.be.a('Object');
				res.body.metadata.should.have.property('version');
				res.body.trip.should.be.a('Object');
				res.body.trip.should.have.property('id');
				res.body.trip.id.should.equal(1);
				res.body.trip.should.have.property('applicationOwner');
				res.body.trip.applicationOwner.should.equal('2');
				res.body.trip.should.have.property('driver');
				res.body.trip.driver.should.equal(5);
				res.body.trip.should.have.property('passenger');
				res.body.trip.passenger.should.equal(2);
				res.body.trip.should.have.property('start');
				res.body.trip.start.should.deep.equal({ address: {street: 'Av. Santa Fe', location: {lat: -34.595402353, lon: -58.398621082}}, timestamp: '2017-10-28T21:30:23.000Z'});
				res.body.trip.should.have.property('end');
				res.body.trip.end.should.deep.equal({ address: {street: 'Av. Juan B. Justo', location: {lat: -34.585093255, lon: -58.434187174}}, timestamp: '2017-10-28T21:51:10.000Z'});
				res.body.trip.should.have.property('totalTime');
				res.body.trip.totalTime.should.equal(1260);
				res.body.trip.should.have.property('waitTime');
				res.body.trip.waitTime.should.equal(300);
				res.body.trip.should.have.property('travelTime');
				res.body.trip.travelTime.should.equal(960);
				res.body.trip.should.have.property('distance');
				res.body.trip.distance.should.equal(5600);
				res.body.trip.should.have.property('route');
				res.body.trip.route.should.deep.equal([{ location: {lat: -34.596448030, lon: -58.426966667 }, timestamp: '2017-10-28T21:45:12.000Z'}]);
				res.body.trip.should.have.property('cost');
				res.body.trip.cost.should.deep.equal({ currency: 'ARS', value: 50 });
				res.body.trip.should.not.have.property('paymethod');
				done();
			});
		});
	
		it('Get trip by id with code 404', function(done) {
			chai.request(server)
			.get('/api/trips/6?token=' + userToken)
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

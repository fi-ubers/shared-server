// Seed file
var uuidv4 = require('uuid/v4');
var serialize = require('serialize-javascript');
var data = require('./../../../test/servers-test');

var rule1 = { 
	condition: function(R) {
		R.when(this.age >= 21);
	},
	
	consequence: function(R) {
		this.ageResult = 'Adult';
		R.next();
	}
};

var rule2 = { 
	condition: function(R) {
		R.when(this.surname.length < 5);
	},
	
	consequence: function(R) {
		this.surnameResult = 'Short surname';
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

// Passenger rules
var ruleP1 = { 
	condition: function(R) {
		R.when(this);
	},
	
	consequence: function(R) {
		this.minCost = 50;
		R.next();
	}
};

var ruleP2 = { 
	condition: function(R) {
		R.when(this.trip.distance);
	},
	
	consequence: function(R) {
		this.cost += this.trip.distance/1000 * 15;
		R.next();
	}
};

var ruleP3 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp)
		var dayOfWeek = tripDate.getDay();
		var hour = tripDate.getHours();
		R.when((dayOfWeek == 3) && (hour == 15 || hour == 16));
	},
	
	consequence: function(R) {
		this.discount.push(0.05);
		R.next();
	}
};

var ruleP4 = { 
	condition: function(R) {
		R.when(this.firstTrip);
	},
	
	consequence: function(R) {
		this.cost -= 100;
		R.next();
	}
};

var ruleP5 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp)
		var dayOfWeek = tripDate.getDay();
		var hour = tripDate.getHours();
		R.when((dayOfWeek > 0 && dayOfWeek < 6) && (hour >= 17 || hour <= 19));
	},
	
	consequence: function(R) {
		this.surcharges.push(0.1);
		R.next();
	}
};

var ruleP6 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp);
		var currentTime = tripDate.getTime();
		
		queryController.selectAll('trips')
		.then(function(trips) {
			var count = 0;
			for(var i = 0; i < trips.length; i++) {
				var startTimestamp = trip[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var timeBetween = currentTime - otherTripDate.getTime();
				var thirtyMinutesInMs = 1800000;
				if (timeBetween <= thirtyMinutesInMs)
					count++;
			}
		})
		R.when(count > 10)
		
	},
	
	consequence: function(R) {
		this.surcharges.push(0.15);
		R.next();
	}
};

var ruleP7 = { 
	condition: function(R) {
		R.when(this.user.email.endsWith('@llevame.com'));
	},
	
	consequence: function(R) {
		this.free = true;
		R.stop();
	}
};

var ruleP8 = { 
	condition: function(R) {
		var negativeBalance = false;
		for(var i = 0; i < this.user.balance.length; i++) {
			if (this.user.balance[i].cost < 0)
				negativeBalance = true;
		}
		
		R.when(negativeBalance);
	},
	
	consequence: function(R) {
		this.canTravel = false;
		R.stop();
	}
};

var ruleP9 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp);
		var tripDay = tripDate.getDate();
		var tripYear = tripDate.getFullYear();
		var tripMonth = tripDate.getMonth();
		
		queryController.selectAllWhere('trips', {id: this.user.id})
		.then(function(trips) {
			var count = 0;
			for(var i = 0; i < trips.length; i++) {
				var startTimestamp = trip[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var otherTripDay = otherTripDate.getDate();
				var otherTripYear = otherTripDate.getFullYear();
				var otherTripMonth = otherTripDate.getMonth();
				if ((tripDay == otherTripDay) || (tripYear == otherTripYear) || (tripMonth == otherTripMonth))
					count++;
			}
		})
		R.when(count >= 5)
	},
	
	consequence: function(R) {
		this.discount.push(0.05);
		R.next();
	}
};

// Driver rules
var ruleD1 = { 
	condition: function(R) {
		R.when(this);
	},
	
	consequence: function(R) {
		this.minPayment = 30;
		R.next();
	}
};

var ruleD2 = { 
	condition: function(R) {
		R.when(this.trip.distance);
	},
	
	consequence: function(R) {
		this.cost += this.trip.distance/1000 * 5;
		R.next();
	}
};

var ruleD3 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp)
		var dayOfWeek = tripDate.getDay();
		var hour = tripDate.getHours();
		R.when((dayOfWeek > 0 && dayOfWeek < 6) && (hour >= 17 || hour <= 19));
	},
	
	consequence: function(R) {
		this.surcharges.push(0.03);
		R.next();
	}
};

var ruleD4 = { 
	condition: function(R) {
		var tripDate = new Date(this.trip.start.timestamp);
		var tripDay = tripDate.getDate();
		var tripYear = tripDate.getFullYear();
		var tripMonth = tripDate.getMonth();
		
		queryController.selectAllWhere('trips', {id: this.user.id})
		.then(function(trips) {
			var count = 0;
			for(var i = 0; i < trips.length; i++) {
				var startTimestamp = trip[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var otherTripDay = otherTripDate.getDate();
				var otherTripYear = otherTripDate.getFullYear();
				var otherTripMonth = otherTripDate.getMonth();
				if ((tripDay == otherTripDay) || (tripYear == otherTripYear) || (tripMonth == otherTripMonth))
					count++;
			}
		})
		R.when(count > 10)
	},
	
	consequence: function(R) {
		this.surcharges.push(0.02);
		R.next();
	}
};

exports.seed = function(knex, Promise) {
	return Promise.all([
		// Deletes ALL existing entries
		knex('app_servers').del()
		.then(function () {
			// Inserts seed entries
			return knex('app_servers').insert({
				_ref: uuidv4(),
				createdBy: 4, 
				createdTime: '2017-09-18T18:30:23.000Z',
				name: 'Fiuber',
				lastConnection: '2017-09-18T18:30:23.000Z'
			});
		}).then(function() {
			return knex('app_servers').insert({
				_ref: uuidv4(),
				createdBy: 2, 
				createdTime: '2017-09-15T10:40:14.000Z',
				name: 'AppJ',
				lastConnection: '2017-09-15T10:40:14.000Z'
			});
		}).then(function () {
			return Promise.all([                   	       
				knex('app_tokens').del()
				.then(function () {
					return knex('app_tokens').insert({
						id: 1, 
						token: data.appToken1,
					});
				}).then(function() {
					return knex('app_tokens').insert({
						id: 2, 
						token: data.appToken2,
					});
				})
			])
        }),
        
		knex('business_users').del()
		.then(function () {
			return knex('business_users').insert({
				_ref: uuidv4(),
				username: 'fiuberkpo',
				password: 'soyunapassword',
				name: 'Pedro',
				surname: 'Fernandez',
				roles: ['user']
			});
		}).then(function() {
            return knex('business_users').insert({
              _ref: 'test',
              username: 'cookie_monster',
              password: '1234',
              name: 'John',
              surname: 'Smith',
              roles: ['admin', 'manager']
          });
        }).then(function() {
			return knex('business_users').insert({
				_ref: uuidv4(),
				username: 'emma23',
				password: 'ilovedogs',
				name: 'Emma',
				surname: 'Duval',
				roles: ['manager', 'user']
			});
		}),
		
		knex('rules').del()
		.then(function () {
			// Inserts seed entries
			return knex('rules').insert({
				_ref: '1111',
				language: 'node-rules/javascript', 
				lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-08-12T18:30:23.000Z' },
				blob: serialize(rule1),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: '2222',
				language: 'node-rules/javascript', 
				lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-09-15T11:37:45.000Z' },
				blob: serialize(rule2),
				active: false
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: '3333',
				language: 'node-rules/javascript', 
				lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-09-19T10:08:25.000Z' },
				blob: serialize(rule3),
				active: true
			});
		}).then(function() {
			return knex('commits').del()
				.then(function () {
					return knex('commits').insert({
						rule: {
							id: 1,
							_ref: '1111',
							language: 'node-rules/javascript', 
							lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-08-12T18:30:23.000Z' },
							blob: serialize(rule1),
							active: true
						},
						ruleId: 1
					});
				}).then(function() {
					return knex('commits').insert({
						rule: {
							id: 2,
							_ref: '2222',
							language: 'node-rules/javascript', 
							lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-09-15T11:37:45.000Z' },
							blob: serialize(rule2),
							active: false
						},
						ruleId: 2
					});
				}).then(function() {
					return knex('commits').insert({
						rule: {
							id: 1,
							_ref: '3333',
							language: 'node-rules/javascript', 
							lastCommit: { author: {id: 2, _ref: 'test', username: 'cookie_monster', password: '1234', name: 'John', surname: 'Smith', roles: ['admin', 'manager']}, message: 'Create rule', timestamp: '2017-09-19T10:08:25.000Z' },
							blob: serialize(rule3),
							active: true
						},
						ruleId: 3
					});
				})
		}),
        
		knex('application_users').del()
		.then(function () {
			return knex('application_users').insert({
				_ref: uuidv4(),
				applicationOwner: '2',
				type: 'passenger',
				cars: [],
				username: 'robsparkles',
				password: '4321',
				fb: null,
				name: 'Robin',
				surname: 'Scherbatsky',
				country: 'Canada',
				email: 'robinscher@gmail.com',
				birthdate: '23/07/1980',
				images: ['imageLink', 'anotherImageLink'],
				balance: [{currency: 'ARS', value: 100}]
			});
		}).then(function() {
			return knex('application_users').insert({
				_ref: uuidv4(),
				applicationOwner: '5',
				type: 'passenger',
				cars: [],
				username: 'emi94',
				password: 'p4ssw0rd',
				fb: null,
				name: 'Emilia',
				surname: 'Lopez',
				country: 'Argentina',
				email: 'emilopez@gmail.com',
				birthdate: '18/11/1994',
				images: ['imageLink'],
				balance: [{currency: 'ARS', value: 50}]
			});
		}).then(function() {
			return knex('application_users').insert({
				_ref: uuidv4(),
				applicationOwner: '1',
				type: 'driver',
				cars: [],
				username: 'iwilldriveu',
				password: 'rightnow',
				fb: null,
				name: 'Marcos',
				surname: 'Sarmiento',
				country: 'Argentina',
				email: 'marquisar@gmail.com',
				birthdate: '10/03/1990',
				images: ['imageLink', 'anotherImageLink'],
				balance: []
			});
		}).then(function() {
			return knex('application_users').insert({
				_ref: uuidv4(),
				applicationOwner: '21',
				type: 'passenger',
				cars: [],
				username: 'driveMe',
				password: 'toTheCenteeer',
				fb: null,
				name: 'Paula',
				surname: 'Dominguez',
				country: 'Argentina',
				email: 'pauliDom@gmail.com',
				birthdate: '23/03/1976',
				images: ['my pic'],
				balance: []
			});
		}).then(function() {
			return knex('application_users').insert({
				_ref: uuidv4(),
				applicationOwner: '4',
				type: 'driver',
				cars: [],
				username: 'pickme',
				password: 'forafreeride',
				fb: null,
				name: 'Cecilia',
				surname: 'Jumanji',
				country: 'Argentina',
				email: 'cjumanji@gmail.com',
				birthdate: '12/01/1999',
				images: ['wooo'],
				balance: []
			});
		}).then(function() {
			return Promise.all([
				knex('cars').del()
				.then(function () {
					return knex('cars').insert({
						_ref: 'ref1',
						owner: 5,
						properties: [{ name: 'Volkswagen Suran', value: 'AA123BF' }]
					});
				}).then(function() {
					return knex('cars').insert({
						_ref: 'ref2',
						owner: 5,
						properties: [{ name: 'Fitito', value: 'GOF226' }]
					});
				}).then(function() {
					return knex('cars').insert({
						_ref: 'specialRefForTesting',
						owner: 3,
						properties: [{ name: 'Chevrolet Spin', value: 'NAF248' }]
					});
				}),
				
				knex('trips').del()
				.then(function () {
					return knex('trips').insert({
						applicationOwner: '2',
						driver: 5,
						passenger: 2,
						start: { address: {street: 'Av. Santa Fe', location: {lat: -34.595402353, lon: -58.398621082}}, timestamp: '2017-10-28T21:30:23.000Z'},
						end: { address: {street: 'Av. Juan B. Justo', location: {lat: -34.585093255, lon: -58.434187174}}, timestamp: '2017-10-28T21:51:10.000Z'},
						totalTime: 1260, 
						waitTime: 300,
						travelTime: 960,
						distance: 5600,
						route: [{ location: {lat: -34.596448030, lon: -58.426966667 }, timestamp: '2017-10-28T21:45:12.000Z'}],
						cost: { currency: 'ARS', value: 50},
						paymethod: { paymethod: 'cash', parameters: {type: 'banknote'} }
					});
				}),
				
				knex('transactions').del()
				.then(function () {
					return knex('transactions').insert({
						trip: 5,
						timestamp: '2017-10-08T20:30:45.000Z',
						cost: { currency: 'ARS', value: '250' },
						description: 'Some description',
						data: {},
						user: 2
					});
				}).then(function() {
					return knex('transactions').insert({
						trip: 5,
						timestamp: '2017-10-08T11:47:41.000Z',
						cost: { currency: 'ARS', value: '110' },
						description: 'Another interesting description',
						data: {},
						user: 1
					});
				}).then(function() {
					return knex('transactions').insert({
						trip: 10,
						timestamp: '2017-10-09T18:11:23.000Z',
						cost: { currency: 'ARS', value: '145' },
						description: 'Another incredible description',
						data: {},
						user: 1
					});
				})
			])
		})    
	])
};


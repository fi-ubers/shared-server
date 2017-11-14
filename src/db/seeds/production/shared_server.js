// Seed file
var uuidv4 = require('uuid/v4');
var serialize = require('serialize-javascript');

// Passenger rules
var ruleP1 = { 
	condition: function(R) {
		R.when(this && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.minCost = 50;
		R.next();
	}
};

var ruleP2 = { 
	condition: function(R) {
		R.when(this.userTrip.distance  && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.cost += this.userTrip.distance/1000 * 15;
		R.next();
	}
};

var ruleP3 = { 
	condition: function(R) {
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp)
			var dayOfWeek = tripDate.getUTCDay();
			var hour = tripDate.getUTCHours();
		}
		R.when((dayOfWeek == 3) && (hour == 15 || hour == 16) && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.discounts.push(0.05);
		R.next();
	}
};

var ruleP4 = { 
	condition: function(R) {
		R.when(this.firstTrip && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.cost = this.cost - 100;
		R.next();
	}
};

var ruleP5 = { 
	condition: function(R) {
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp)
			var dayOfWeek = tripDate.getUTCDay();
			var hour = tripDate.getUTCHours();
		}
		R.when((dayOfWeek > 0 && dayOfWeek < 6) && (hour >= 17 && hour <= 19) && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.surcharges.push(0.1);
		R.next();
	}
};

var ruleP6 = { 
	condition: function(R) {
		var count = 0;
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp);
			var currentTime = tripDate.getTime();
			for(var i = 0; i < this.trips.length; i++) {
				var startTimestamp = this.trips[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var timeBetween = currentTime - otherTripDate.getTime();
				var thirtyMinutesInMs = 1800000;
				if (timeBetween <= thirtyMinutesInMs) {
					count++;
				}
			}
		}
		R.when((count > 10) && (this.user.type == "passenger"))
	},
	
	consequence: function(R) {
		this.surcharges.push(0.15);
		R.next();
	}
};

var ruleP7 = { 
	condition: function(R) {
		R.when(this.user.email && this.user.email.endsWith('@llevame.com') && (this.user.type == "passenger"));
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
			if (this.user.balance[i].value < 0)
				negativeBalance = true;
		}
		
		R.when(negativeBalance && (this.user.type == "passenger"));
	},
	
	consequence: function(R) {
		this.canTravel = false;
		R.stop();
	}
};

var ruleP9 = { 
	condition: function(R) {
		var count = 0;
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp);
			var tripDay = tripDate.getUTCDate();
			var tripYear = tripDate.getUTCFullYear();
			var tripMonth = tripDate.getUTCMonth();

			for(var i = 0; i < this.trips.length; i++) {
				var startTimestamp = this.trips[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var otherTripDay = otherTripDate.getUTCDate();
				var otherTripYear = otherTripDate.getUTCFullYear();
				var otherTripMonth = otherTripDate.getUTCMonth();
				if ((this.trips[i].passenger == this.user.id) && (tripDay == otherTripDay) && (tripYear == otherTripYear) && (tripMonth == otherTripMonth)) {
					count++;
				}
			}
		}
		R.when((count >= 4) && (this.user.type == "passenger"))
	},
	
	consequence: function(R) {
		this.discounts.push(0.05);
		R.next();
	}
};

// Driver rules
var ruleD1 = { 
	condition: function(R) {
		R.when(this && (this.user.type == "driver"));
	},
	
	consequence: function(R) {
		this.minPayment = 30;
		R.next();
	}
};

var ruleD2 = { 
	condition: function(R) {
		R.when(this.userTrip.distance && (this.user.type == "driver"));
	},
	
	consequence: function(R) {
		this.gain += this.userTrip.distance/1000 * 5;
		R.next();
	}
};

var ruleD3 = { 
	condition: function(R) {
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp)
			var dayOfWeek = tripDate.getUTCDay();
			var hour = tripDate.getUTCHours();
		}
		R.when((dayOfWeek > 0 && dayOfWeek < 6) && (hour >= 17 && hour <= 19) && (this.user.type == "driver"));
	},
	
	consequence: function(R) {
		this.benefits.push(0.03);
		R.next();
	}
};

var ruleD4 = { 
	condition: function(R) {
		var count = 0;
		if(this.userTrip.start.timestamp) {
			var tripDate = new Date(this.userTrip.start.timestamp);
			var tripDay = tripDate.getUTCDate();
			var tripYear = tripDate.getUTCFullYear();
			var tripMonth = tripDate.getUTCMonth();
		
			for(var i = 0; i < this.trips.length; i++) {
				var startTimestamp = this.trips[i].start.timestamp;
				var otherTripDate = new Date(startTimestamp);
				var otherTripDay = otherTripDate.getUTCDate();
				var otherTripYear = otherTripDate.getUTCFullYear();
				var otherTripMonth = otherTripDate.getUTCMonth();
				if ((this.trips[i].driver == this.user.id) &&  (tripDay == otherTripDay) && (tripYear == otherTripYear) && (tripMonth == otherTripMonth)) {
					count++;
				}
			}
		}
		R.when((count > 10) && (this.user.type == "driver"))
	},
	
	consequence: function(R) {
		this.benefits.push(0.02);
		R.next();
	}
};

exports.seed = function(knex, Promise) {
	return Promise.all([
		// Deletes ALL existing entries
        
		knex('business_users').del()
		.then(function () {
			return knex('business_users').insert({
				_ref: uuidv4(),
				username: 'fiuber',
				password: 'CEJA',
				name: 'Fiuber',
				surname: 'Ceja',
				roles: ['user', 'admin', 'manager']
			});
		}),
		
		knex('rules').del()
		.then(function () {
			// Inserts seed entries
			return knex('rules').insert({
				_ref: 'P1',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP1),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P2',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP2),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P3',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP3),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P4',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP4),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P5',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP5),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P6',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP6),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P7',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP7),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P8',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP8),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'P9',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleP9),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'D1',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleD1),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'D2',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleD2),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'D3',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleD3),
				active: true
			});
		}).then(function() {
			return knex('rules').insert({
				_ref: 'D4',
				language: 'node-rules/javascript', 
				lastCommit: null,
				blob: serialize(ruleD4),
				active: true
			});
		})    
	])
};

process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./../index');

chai.use(chaiHttp);
chai.should();

describe('GET /api/statistics', function() {
	it('Get /api/statistics', function(done) {
		chai.request(server)
		.get('/api/statistics')
		.end(function(err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a('Object');
			res.body.should.have.property('metadata');
			res.body.should.have.property('stats');
			res.body.metadata.should.be.a('Object');
			res.body.metadata.should.have.property('count');
			res.body.metadata.should.have.property('total');
			res.body.metadata.should.have.property('version');
			res.body.stats.should.be.a('array');
			done();
		});
	});
});

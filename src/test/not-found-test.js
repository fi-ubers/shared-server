process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('./../index');

chai.use(chaiHttp);

describe('GET /api/servers', function() {
	it('Get application servers', function(done) {
		chai.request(server)
		.get('/api/somePath')
		.end(function(err, res) {
			res.should.have.status(404);
			res.should.be.json;
			res.body.should.have.property('code');
			res.body.code.should.equal(404);
			res.body.should.have.property('message');
			res.body.message.should.equal('Not found');
			done();
		});
	});
});

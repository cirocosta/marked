var marked = require('../index.js')
	,	assert = require('assert')
	,	path = require('path')
	,	fs = require('fs');

function assertFromData (filename, done) {
	var af = path.resolve(__dirname, filename);

	fs.readFile(af, {encoding: 'utf8'}, function (err, data) {
		if (err) done(err);

		var actual = marked.parse(data);
		var expected = JSON.parse(fs.readFileSync(af.replace('.md', '.json')));

		assert.deepEqual(actual, expected);
		done();
	});
}

describe('MarkedWI', function() {
	it('be sane', function() {
		assert(!!marked);
	});

	describe('parse,', function() {
		it('should parse heading', function(done) {
			assertFromData('./files/heading.md', done);
		});

		it('should parse heading + text with inline code', function (done) {
			assertFromData('./files/inlinecode.md', done);
		});
	});
});


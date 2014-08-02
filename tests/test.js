var marked = require('../index.js')
	,	assert = require('assert')
	,	path = require('path')
	,	fs = require('fs');

function assertFromData (filename, fun, done) {
	var af = path.resolve(__dirname, filename);

	fs.readFile(af, {encoding: 'utf8'}, function (err, data) {
		if (err) done(err);

		var actual = fun.call(this, data);
		var expected = JSON.parse(fs.readFileSync(af.replace('.md', '.json')));

		console.log(JSON.stringify(actual, undefined, 2));

		assert.deepEqual(actual, expected);
		done();
	});
}

describe('MarkedWI.', function() {
	it('be sane', function() {
		assert(!!marked);
	});

	// describe('parse', function() {
	// 	it('should parse heading', function (done) {
	// 		assertFromData('./files/heading.md',
	// 			 						 marked.parse,
	// 			 						 done);
	// 	});

	// 	it('should parse heading + text with inline code', function (done) {
	// 		assertFromData('./files/inlinecode.md',
	// 									 marked.parse,
	// 									 done);
	// 	});
	// });

	describe('parseWithoutInline', function () {
		it('should parse inline code and not put it on text', function (done) {
			assertFromData('./files/without-inlinecode.md',
										 marked.parseWithoutInline,
										 done);
		});
	})
});


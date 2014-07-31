var marked = require('../');
var fs = require('fs');
var path = require('path');

var Lexer = marked.Lexer;
var Parser = marked.Parser;

fs.readFile(path.resolve(__dirname, 'md.md'),
					  {encoding: 'utf8'},
					  function (err, data) {

	if (err) throw err;

	console.log(
		Parser.parse(
			Lexer.lex(data)));
});

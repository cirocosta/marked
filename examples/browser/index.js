var data = document.querySelector('pre').innerHTML;
var Lexer = marked.Lexer;
var Parser = marked.Parser;

console.log(
		Parser.parse(
			Lexer.lex(data)));

# marked-wi

> A full-featured markdown parser and compiler, written in JavaScript. Built
> for speed.

This fork of [marked](https://github.com/chjj/marked) is a slower version of the originial as it exposes the inline code stuff to the lexer.

## Install

``` bash
npm install marked-wi --save
```

## Usage

```javascript
var data = document.querySelector('pre').innerHTML;
var Lexer = marked.Lexer;
var Parser = marked.Parser;

console.log(
    Parser.parse(
      Lexer.lex(data)));
```
`Parser.parse()` returns an object just like `Lexer.lex()` but with the inline stuff that it found with the `InlineLexer` (notice that the `Parser` in the [original marked](https://github.com/chjj/marked) would return the rendered text, which is completly different from what we are doing here).

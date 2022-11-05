'use strict';


const num = 5; /* number| +-(2^53 -1) */
const floatNum = 5.2; /* number| +-(2^53 -1) */
const bigNum = 9999999999999999999999999999; /* число произвольной длины */
const strDoubleQuote = "string"; /* строка в двойных кавычках */
const strSingleQuote = 'string'; /* строка в одинарных кавычках */
const name = 'Hello! I\"m Andrew"'; /* Hello! I'm Andrew */
const quote = "He said: \"I wanna go home\""; /* He said: "I wanna go home" */
// const strItalicQuote = ``""'''String';
// const strItalicQuote = `
// fghfghgfhhhhhhh
// fffffffffffffffff
// ffffffffffffhghfghgh
// ооооооооооо
// `;
const strItalicQuote = `hello, I have ${bigNum} apples`;
console.log(strItalicQuote);
console.log(bigNum);
const strWith
'use strict';


// const num = 5; /* number| +-(2^53 -1) */
// const floatNum = 5.2; /* number| +-(2^53 -1) */
// const bigNum = 9999999999999999999999999999; /* число произвольной длины */
// const strDoubleQuote = "string"; /* строка в двойных кавычках */
// const strSingleQuote = 'string'; /* строка в одинарных кавычках */
// const name = 'Hello! I\"m Andrew"'; /* Hello! I'm Andrew */
// const quote = "He said: \"I wanna go home\""; /* He said: "I wanna go home" */
// // const strItalicQuote = ``""'''String';
// // const strItalicQuote = `
// // fghfghgfhhhhhhh
// // fffffffffffffffff
// // ffffffffffffhghfghgh
// // ооооооооооо
// // `;
// const strItalicQuote = `hello, I have ${bigNum} apples`;
// console.log(strItalicQuote);
// const strWithApples = 'Hello, I have ' + bigNum + ' apples';
// console.log(strWithApples);
// const isVisible = true; // boolean;
// const isHidden = false; // boolean;
// const hasApples = true;

// //----------------------------

// // let someVariable; // undefined;
// const someConstant = null; // null;
// let someVariable = undefined; // undefined;
// console.log(someConstant);
// console.log(someVariable);

// const num = 5;
// console.log(typeof 5); // 'number;
// console.log(typeof num); // 'number;

// const floatNum = 5.2;
// const typeofFloatNum = typeof floatNum;
// console.log(typeofFloatNum);

// const bigNum = 9909999999999994; // число произвольной длины;
// const bigNum = BigInt(9909999999999994); // число произвольной длины;
// console.log(typeof bigNum);
// const bigNum = 999999999999999;
// const strWithApples = 'Hello, I have ' + bigNum + ' apples';
// console.log(typeof strWithApples);

// const isVisible = true; // boolean;
// const isHidden = false;//boolean;
// const hasApples=true;
// console.log(typeof hasApples);

// let someConstant = null; //null;
// let someVariable; //undefined;

// console.log(typeof someConstant);
// console.log(typeof someVariable);

//след.тема Преобразование Типов Данных;

//строковый тип преобразования;

// const num = 5;
// // const bool = true;
// const bool = false;

// // const strFromNum = String(num);
// // console.log(strFromNum);
// const strFromNum = '' + num;
// console.log(typeof strFromNum);

// const strFromBool = String(bool);
// console.log(strFromBool);

// Числовой тип преобразования

// // const str = '5';
// // const str = '5.5';
// const str = '5.5 hgh'; //Not A Number;//NaN;
// // const bool = true;
// const bool = false;

// // const numberFromStr = Number(str);
// const numberFromStr = +str; //другой вид преобразования в числа;
// console.log(numberFromStr);
// console.log(typeof numberFromStr);

// // const numberFromBool = Number(bool);
// const numberFromBool = +bool; //Другой вид преобразования в числа;
// console.log(numberFromBool);

// // Булевский тип преобразования

// const str = 'dfgdfg';
// const num = 5;

// const boolFromStr = Boolean(str);
// console.log(boolFromStr);
// //Преобразование к boolean всегда дает true, кроме значений указанных в falsey исключением конкретных значений будет false значения ;
// const boolFromNum1 = Boolean(num);
// console.log(boolFromNum1);

// //falsey-значения ;
// // 0, null, undefined, '', NaN;

// const boolFromNum = Boolean(NaN);
// console.log(boolFromNum);

// Тема: Выражения в простой математики;

// Выражение;

// Операторы -  "-", "+", "/", "*";

// Операнды - числа, с которыми производится операция;

// 5 + 10;

// Типы операторов: унарные и бинарные;

// "-", "+", "/", "*"   -- бинарные операторы; два операнда используемых чисел;

// +sum --- унарные операторы; ; один операнд используемое число;

// Математика

const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

// const division = 15 % 4;
const division = 15 % 4 * result;
console.log(division);

const pow = 5 ** 2;
console.log(pow);

// const res = 5 + 'fghkfg'; // Преобразуется к строке из-за вставленных кавычек строки;
// const res = 5 - 'fghkfg'; // не смог преобразовать к числу;
const res = 5 - '123568'; // смог преобразовать к числу;
console.log(res);
'use strict';


function makeFibonacciFunction() {
    let next = 1;
    let last = -1;

    return function () {
        const result = last + next;
        last = next;
        next = result;
        console.log(result);
        return result;
    };
}

const fibonacci1 = makeFibonacciFunction();

fibonacci1(); //  0
fibonacci1(); //  1
fibonacci1(); //  1
fibonacci1(); //  2
fibonacci1(); //  3
fibonacci1(); //  5
fibonacci1(); //  8
fibonacci1(); //  13
fibonacci1(); //  21
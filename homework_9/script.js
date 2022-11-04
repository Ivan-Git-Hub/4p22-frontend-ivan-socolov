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

const fibonacci2 = (function makeFibonacciFunction() {
    let next = 1;
    let last = -1;

    return function () {
        const result = last + next;
        last = next;
        next = result;
        console.log(result);
        return result;
    };
})();

fibonacci2(); //  0
fibonacci2(); //  1
fibonacci2(); //  1
fibonacci2(); //  2
fibonacci2(); //  3
fibonacci2(); //  5
fibonacci2(); //  8
fibonacci2(); //  13
fibonacci2(); //  21

// подробные значения функции со звездочкой *
// console.log(`last.${last}`);
// console.log(`next.${ next}`);
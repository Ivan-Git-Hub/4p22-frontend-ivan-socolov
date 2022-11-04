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

const fibonacci_I = makeFibonacciFunction();

fibonacci_I(); //  0
fibonacci_I(); //  1
fibonacci_I(); //  1
fibonacci_I(); //  2
fibonacci_I(); //  3
fibonacci_I(); //  5
fibonacci_I(); //  8
fibonacci_I(); //  13
fibonacci_I(); //  21

const fibonacci_II = (function makeFibonacciFunction() {
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

fibonacci_II(); //  0
fibonacci_II(); //  1
fibonacci_II(); //  1
fibonacci_II(); //  2
fibonacci_II(); //  3
fibonacci_II(); //  5
fibonacci_II(); //  8
fibonacci_II(); //  13
fibonacci_II(); //  21

// подробные значения функции со звездочкой *
// console.log(`last.${last}`);
// console.log(`next.${ next}`);
const fibonacci_III = (() => {
    let last = -1,
        next = 1;

    return () => {
        const result = last + next;
        last = next;
        next = result;
        console.log(result);
        return result;
    };
})();

fibonacci_III(); //  0
fibonacci_III(); //  1
fibonacci_III(); //  1
fibonacci_III(); //  2
fibonacci_III(); //  3
fibonacci_III(); //  5
fibonacci_III(); //  8
fibonacci_III(); //  13
fibonacci_III(); //  21
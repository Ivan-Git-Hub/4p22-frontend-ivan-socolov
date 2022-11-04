function makeFibonacciFunction() {
    let next = 1;
    let last = -1;
    return function () {
        const result = last + next;
        last = next; /* 0 */
        next = result; /* 1 */
        console.log(result);
        console.log('last.${last}');
        console.log('next.${next}');
        return result;
    };
}

const fibonacci = makeFibonacciFunction();

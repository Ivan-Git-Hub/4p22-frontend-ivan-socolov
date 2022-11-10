'use script';


// setTimeout - выполняет callback после паузы (1 раз)
// setInterval - выполняет callback через промежуток времени

// setTimeout(() => {
//     console.log('Hello World! Timeout')
// }, 1000);

// setInterval(() => {
//     console.log('Hello World! Interval');
// }, 1000);

// // 1000 миллисекунд ;

// function makeTimeoutFunction() {
//     let i = 0;
//     return () => {
//         i++;
//         console.log(`Вызвано ${i} раз`);
//     }
// }

// function stopInterval() {
//     clearInterval(interval);
// }

// const timeoutFunction = makeTimeoutFunction();
// const interval = setInterval(timeoutFunction, 1000);

// // clearInterval(interval);

// // setTimeout(() => {
// // clearInterval(interval);
// // }, 3000);
// setTimeout(stopInterval, 3000);

// Promise;

const promise = new Promise((resolve, reject) => {

});

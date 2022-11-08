'use script'


// Promise;

const promise = new Promise((resolve, reject) => {
            resolve();
            setTimeout(() => {
                    resolve();
                }, 1000;
            });

        promise.then(() => {
            console.log('Промис завершился успешно!');

        })

        // setTimeout(() => {
        //     console.log('Hello World!');
        // }, 1000);
        // setInterval(() => {
        //     console.log('Hello World!');
        // }, 1000);
        // // 1000 миллисекунд ;

        // function makeTimeoutFunction() {
        //     return () => {
        //         i++;
        //         console.log(`Вызвано ${i}раз`);
        //     }
        // };

        // const timeoutFunction = makeTimeoutFunction();
        // const interval = setInterval(timeoutFunction, 1000);

        // function stopInterval() {
        // }
        // setTimeout(stopInterval, 3000);
'use strict';


let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// экран 
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''; // первое число и результат
    b = ''; // второй номер и результат
    sign = ''; // знак операции
    finish = false; //сброс чисел
    out.textContent = 0; //сброс до 0
}
    document.querySelector('.ac').onclick = clearAll; //очистка чисел

    document.querySelector('.buttons').onclick = (event) => { //работа по клику

        if (!event.target.classList.contains('btn')) return; // нажата не кнопка

        if (event.target.classList.contains('ac')) return; // нажата кнопка clearAll ac

        out.textContent = '';

        const key = event.target.textContent; // получаю нажатую кнопку

        if (digit.includes(key)) { // если нажата клавиша 0-9 или .
            if (b === '' && sign === '') {
                a += key;

                out.textContent = a; //вывод переменной a;
            } else if (a !== '' && b !== '' && finish) {
                b = key;
                finish = false;
                out.textContent = b; //вывод переменной b;
            } else {
                b += key;
                out.textContent = b; //вывод переменной b;
            }
            console.table(a, b, sign); //вывод в console и возврат значений чисел;
            return;
        }

        if (action.includes(key)) { // если нажата клавиша + - / x;
            sign = key; //введен знак операции;
            out.textContent = sign; //вывод знака операции;
            console.table(a, b, sign); //вывод в console знака операции;
            return; //возврат итоговых значений операции;
        }

        if (key === '=') { // нажата =;
            if (b === '') b = a;
            switch (sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "X":
                    a = a * b;
                    break;
                case "/":
                    if (b === '0') {
                        out.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        sign = '';
                        return;
                    }
                    a = a / b;
                    break;
            }
            finish = true;
            out.textContent = a; //вывод переменной a;
            console.table(a, b, sign); //вывод в console значений операций;
        }
    }
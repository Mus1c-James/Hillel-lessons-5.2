"use strict";
// debugger

const rateUa = 26; // Курс 26 грн за 1 доллар

for (let dollars = 10; dollars <= 100; dollars += 10) {

    let cost = dollars * rateUa;
    
    console.log(`${dollars} USD = ${cost} UAH`);
}
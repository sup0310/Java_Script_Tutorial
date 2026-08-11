// Numbers and Maths in JavaScript

// Number types

const integer = 42;
const float = 3.14;
const negative = -5;

// Basic arithmetic
const sum = integer + float;         // 45.14
const difference = integer - float;  // 38.86
const product = integer * float;     // 131.88
const quotient = integer / float;    // 13.375
const remainder = integer % 5;       // 2

// console.log('sum:', sum);
// console.log('difference:', difference);
// console.log('product:', product);
// console.log('quotient:', quotient);
// console.log('remainder:', remainder);
console.log(`
    Sum: ${sum}, 
    Difference: ${difference}, 
    Product: ${product}, 
    Quotient: ${quotient}, 
    Remainder: ${remainder}
`);
console.log();



const score = 400
console.log(score, typeof score);

const balance = new Number(19000.6969)
console.log(balance, typeof balance);
console.log(balance.toString(), typeof balance.toString())
console.log(balance.toFixed(2), typeof balance.toFixed(2));
console.log(balance.toPrecision(5), typeof balance.toPrecision(5));
console.log();


const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
console.log();
console.log();






// Math object

// console.log(Math);
// console.log('PI:', Math.PI);
// console.log('abs:', Math.abs(negative));
// console.log('round:', Math.round(2.7));
// console.log('ceil:', Math.ceil(2.1));
// console.log('floor:', Math.floor(2.9));
// console.log('sqrt:', Math.sqrt(16));
// console.log('power:', Math.pow(2, 5));
// console.log('random:', Math.random());
console.log(`
    Math: ${Math}, 
    PI: ${Math.PI}, 
    abs: ${Math.abs(negative)}, 
    round: ${Math.round(2.7)}, 
    ceil: ${Math.ceil(2.1)}, 
    floor: ${Math.floor(2.9)}, 
    sqrt: ${Math.sqrt(16)}, 
    power: ${Math.pow(2, 5)}, 
    random between 0 & 1: ${Math.random()}, 
    random between 1 & 10: ${Math.random() * 9+1}, 
    max: ${Math.max(1, 5, 3, 9)},
    min: ${Math.min(1, 5, 3, 9)}
`);

const min = 10
const max = 20
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random number between 10 and 20:', randomInRange);


// Converting strings to numbers
const intString = '100';
const floatString = '12.34';
console.log('parseInt:', parseInt(intString, 10));
console.log('parseFloat:', parseFloat(floatString));

// NaN and Infinity
const badNumber = Number('abc');
console.log('badNumber is NaN:', Number.isNaN(badNumber));
console.log('infinity example:', 1 / 0);

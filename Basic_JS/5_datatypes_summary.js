/*
Primitive Data Types

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


JavaScript is a DYNAMICALLY typed language.
This means that variables types are determined at runtime, and yo do not need to explicitely declare the type of a variable before using it.
You can assign different types of values to a variable during its lifetime.


Reference (Non Primitive)

3 types : Array, Objects, Functions
*/

const score = 100
const scoreValue = 99.9999
const isLoggedIn = false
const outsideTemp = null
let eserEmail1;
let userEmail2 = undefined

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1, typeof(id1), id2, typeof(id2));
console.log(id1 == id2);
console.log(id1 === id2);
console.log();


const bigNum = 987654321000123456789n
console.log(typeof(bigNum));
console.log();


// Array
const heros = ["Iron Man", "Captain America", "Thor", "Hulk"]
console.log(heros, heros[5]);
console.log();


// Object
let myInfo = {
    name: "Supriyo",
    age: 25
}
console.log(myInfo);

// Function
let myFunc = function(){
    console.log("Hello World!");
    
}
console.log(myFunc, typeof(myFunc));


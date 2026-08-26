// FUNCTIONS TUTORIAL
// console.log("S");
// console.log("U");
// console.log("P");
// console.log("R");
// console.log("I");
// console.log("Y");
// console.log("O");
// console.log();

// 1. Basic Function Declaration
function my_name(){
    console.log("S");
    console.log("U");
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("O");
}

// Call the function
my_name();
console.log();


// 2. Function with Parameters
function addNumbers(num1, num2){
    console.log(num1 + num2);
}

addNumbers(5, 10);
addNumbers(5, "10");
addNumbers("5", "10");
addNumbers("5, 10");

function printName(str){
    console.log(`Hello, ${str}!`);
}

printName("SUPRIYO");
console.log();


// 3. Function with Return Value
function add(a, b){
    return a + b;
}
const sum = add(5, 3);
console.log("Sumation : ", sum);


function greetUser(name){
    return `Welcome, ${name}!`;
}
console.log(greetUser("SUPRIYO"));
console.log(greetUser());
console.log();


function greetUser1(name){
    if (name === undefined) {
        console.log("Name is not provided");
        return
    }
    return `Welcome, ${name}!`;
}
console.log(greetUser1());
console.log();


function greetUser2(name="Guest"){
    if (name === undefined) {
        console.log("Name is not provided");
        return
    }
    return `Welcome, ${name}!`;
}
console.log(greetUser2());
console.log(greetUser2("Supriyo"));
console.log();




function calculateCartPrice(num){
    return num
}

console.log(calculateCartPrice(200, 400, 600));

// rest operator
function calculateCartPrice1(...num){
    return num
}

console.log(calculateCartPrice1(200, 400, 600));

function calculateCartPrice2(val1, val2, ...num){
    return num
}

console.log(calculateCartPrice2(200, 400, 600, 700, 900));
console.log();



const user = {
    name: "Supriyo",
    prince: 1999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and cartvalue is ${anyObject.prince}`);
    
}
handleObject(user)


function returnArrValue(anyArr){
    console.log(`Second value of the array ${anyArr} in ${anyArr[1]}`)
}

returnArrValue([1,2,3,4,5])
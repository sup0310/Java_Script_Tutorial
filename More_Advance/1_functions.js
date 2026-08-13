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

const user = {
    username: 'JohnDoe',
    price: 999,
    welcomeMessage: function() {
        console.log(`Welcome to the website ${this.username}, your price is ${this.price}`);
        console.log(this);
    }
}
// user.welcomeMessage();
user.username = "sam";
// user.welcomeMessage();

// console.log(this); // this will refer to the global object (window in browsers, global in Node.js)





// ARROW FUNCTIONS

// can not use this keyword in arrow functions, it will refer to the global object instead of the object that called the function
// function chai() {
//     let username = 'JohnDoe';
//     console.log(this.username);
//     console.log(this);
// }
// chai();


const chaiArrow = () => {
    let username = 'JohnDoe';
    console.log(this.username);
    console.log(this);
}
chaiArrow();


// explicit return, must have to use return keyword as using curly braces
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(2, 3)); // 5

// implicit return, do not need to use return keyword as not using curly braces
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(2, 5)); // 7
// or
const addTwo2 = (num1, num2) => (num1 + num2);
console.log(addTwo2(7, 5)); // 7

const returnObj = () => ({ username: 'JohnDoe', price: 999 });
console.log(returnObj()); // { username: 'JohnDoe', price: 999 }
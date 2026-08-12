// singleton pattern
// Object.create

// object literals

const mySYm = Symbol("Submit");

const user = {
    name: "supriyo",
    "full name": "supriyo Mandal",
    [mySYm]: "Submit1",
    age: 25,
    location: "kolkata",
    email: "supriyo.a.mandal@accenture.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    score: {
        value: 100,
        bonus: 10
    }
}

console.log(user.name) // supriyo
console.log(user["name"]) // supriyo
console.log()

// console.log(user."full name") // SyntaxError: Unexpected string
console.log(user["full name"]) // supriyo Mandal
console.log(user[mySYm], typeof user[mySYm]) // Submit1 string
console.log()


console.log('before update', user)
console.log()
user.email = "supriyoa.mondal@bsci.com" // update
user.isLoggedIn = false // update
console.log('after update', user)
console.log()


// Object.freeze(user) // freeze the object, no update or delete possible
// user.email = "supriyomandal310@gmail.com" // update will not work
// console.log('after freeze', user)
// console.log()


user.greeting = function(){
    console.log("Hello User!");
}

user.greeting1 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(user.greeting)
console.log(user.greeting()) // Hello User!

console.log(user.greeting1) // [Function: greeting1]
console.log(user.greeting1()) // Hello supriyo
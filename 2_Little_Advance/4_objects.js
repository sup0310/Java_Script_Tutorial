// singleton object
const User = new Object()
console.log(User);

// non singleton object
const appUser = {}

appUser.id = "14143719"
appUser.name = "Supriyo"
appUser.isLoggedIn = true

console.log(appUser);
console.log();


const dummyUser = {
    emai: "alexanderstewart@bsci.com",
    details: {
        name: {
            first_name: "Alexander",
            last_name: "Stewart"
        }
    }

}

console.log(dummyUser["details"]["name"]["first_name"]);
console.log(dummyUser.details.name.last_name);
console.log();


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "A", 4: "B"}
const obj3 = {obj1, obj2}
console.log(obj3);

// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) // every time will combine and return the result in object 
console.log(obj4);
console.log('using spread opeator : ', {...obj1, ...obj2}); // most of the time use this method to merge objects
console.log();


// const obj10 = {1: "a", 2: "b"}
// const obj20 = {1: "A", 2: "B"}
// const obj30 = Object.assign({}, obj20, obj10)
// console.log(obj30);
// console.log('using spread opeator : ', {...obj1, ...obj2, ...obj10, ...obj20});


// how to merge values coming from database (array of objects)
const db_values = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
    {
        id: 4,
        email: "user4@gmail.com"
    },
    {
        id: 5,
        email: "user5@gmail.com"
    },
]

console.log(db_values[3]["id"]);
console.log(db_values[3].email);
console.log();


console.log(appUser);
console.log(Object.keys(appUser)); // get all keys of the object which comes in array, can sotre this and use loop on it
console.log(Object.values(appUser)); // get all values of the object which comes in array, can sotre this and use loop on it
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty("isLoggedIn"));
console.log(appUser.hasOwnProperty("date_of_birth"));
console.log();

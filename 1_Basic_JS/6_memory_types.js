/*
Memory is of 2 types : 
Stack (used in Primitive datatypes) > copy of a variable
& 
Heap (used in Non-Primitive datatypes) > reference of a variable

*/

let primaryEmail = "mondalsupriyopm2000@gmail.com"
let secondaryEmail = primaryEmail
secondaryEmail = "supriyomandal310@gmail.com"

console.log(primaryEmail);
console.log(secondaryEmail);
console.log();



let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ptsbi"
}
console.log(userOne);
console.log();

let userTwo = userOne
userTwo.age = 26

console.log(userOne);
console.log(userTwo);

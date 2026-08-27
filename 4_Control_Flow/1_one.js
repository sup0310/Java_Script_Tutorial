// Comparison Operators
// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to


// IF-ELSE Statement
const isUserLoggedIn = false;

if (isUserLoggedIn) {
    console.log('User is logged in');
}
else {
    console.log('User is not logged in');
}
console.log()



const age = 25;
if (age > 18) {
    const ability = 'Eligible';
    console.log(`${ability} for Voting`);
}
// console.log(`${ability} for Voting `);
console.log()


const age1 = 25;
if (age1 > 18) {
    var ability = 'Eligible';
    console.log(`${ability} for Voting`);
}
console.log(`${ability} for Voting `);
console.log()


// Short Hand IF-ELSE Statement
const balance = 1000;

if (balance > 500) console.log('Sufficient balance');



// IF-ELSE IF-ELSE Statement
const marks = 75;

if (marks >= 90) {
    console.log('Grade A');
}
else if (marks >= 80) {
    console.log('Grade B');
}
else if (marks >= 70) {
    console.log('Grade C');
}
else if (marks >= 60) {
    console.log('Grade D');
}
else {
    console.log('Grade F');
}
console.log()


// Logic Operators
// && AND
// || OR
// ! NOT

const isUserLoggedIn1 = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (isUserLoggedIn1 && debitCard) {
    console.log('User is logged in and has a debit card');
}

if (loggedInWithGoogle || loggedInWithEmail) {
    console.log('User is logged in with Google or Email');
}
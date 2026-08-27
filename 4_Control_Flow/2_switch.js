const month = 13;

switch (true) {
    case (month === 1):
        console.log('January');
        break;
    case (month === 2):
        console.log('February');
        break;
    case (month === 3):
        console.log('March');
        break;
    case (month === 4):
        console.log('April');
        break;
    case (month === 5):
        console.log('May');
        break; 
    case (month === 6):
        console.log('June');
        break;
    case (month === 7):
        console.log('July');
        break;
    case (month === 8):
        console.log('August');
        break;
    case (month === 9):
        console.log('September');
        break;
    case (month === 10):
        console.log('October');
        break;
    case (month === 11):
        console.log('November');
        break;
    case (month === 12):
        console.log('December');
        break;
    default:
        console.log('Invalid month! Please select a number in between 1 & 12');
}
console.log();


// Truthy & Falsy Values
// Falsy Values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values -> except the falsy values all are truthy but "0", "false", " ", [], {}, function(){}, etc. are truthy values

const userEmail = " "

if (userEmail){
    console.log("Got user Email");
}
else{
    console.log("Didn't have user Email");   
}


const Obj = {}

if (Object.keys(Obj).length === 0){
    console.log("Object is empty");
    
}
console.log();



// Nullish Coalescing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? undefined ?? 15

console.log(val1);
console.log();


// Terniary Operator
// condition ? true : false

const balance = 10000;

balance > 5000 ? console.log('Sufficient balance') : console.log('Insufficient balance');
console.log()
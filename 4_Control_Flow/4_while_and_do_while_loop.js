// While loop

let i = 1
while(i<=10){
    console.log(`Value if i is ${i}`);
    i+= 2
}
console.log();


const myArr = ["flash", "batman", "superman"];
let ind = 0;
while (ind < myArr.length){
    const elem = myArr[ind];
    if (elem.length > 5){
        console.log(elem);
    }
    else{
        console.log(`${elem} is too short`);
    }
    ind++;
}
console.log();





// Do While loop
let score = 5;
do{
    console.log(`Score is ${score}`);
    score += 5
}
while(score<50)
console.log();


let score1 = 5;
do{
    console.log(`Score is ${score1}`);
    score1 += 5
}
while(score1<5)
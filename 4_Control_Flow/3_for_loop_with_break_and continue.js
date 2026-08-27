// FOR LOOP

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}
console.log();


for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5){
        console.log("5 is the best");
    }
    console.log(element);
}
console.log();


// for (let i = 1; i <= 10; i ++){
//     for (let j = 1; j <= 10; j++){
//         const k = i*j
//         if (!k.toString().includes("0")){
//             console.log(`${i} * ${j} is equals to ${k}`);
//         }
//     }
// }


const myArr = ["flash", "batman", "superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}
console.log();


// BREAK & CONTINUE
for (let i = 1; i <= 20; i++){
    if (i == 5){
        console.log('Detected 5');
        break
    }
    console.log(`Value of i is ${i}`);
    
}
console.log();


for (let i = 1; i <= 20; i++){
    if (i == 5){
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${i}`);
    
}
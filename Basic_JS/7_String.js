const name = "Supriyo"
const age = 25

// console.log("Hello my name is " + name + ", and I am " + age + " years old");  // old and bad approach

console.log(`Hello my name is ${name}, and I am ${age} years old`); // new and efficient approach

// way to define string
const gameName = new String('Beacon-Frontdoor')
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n', 6));

const newStr = gameName.substring(0,6) // (,6) (6,)
console.log(newStr);

const anotherStr = gameName.slice(-10, -3) // can use negative to use from reverse
console.log(anotherStr);

const str1 = "    Supriyo    "
console.log(str1, str1.length)
console.log(str1.trim(), str1.trim().length);


const str2 = "Supriya"
console.log(str2.replace("a", "0"));
console.log(str2.includes('0'));
console.log(str2.replace("a", "0").includes('0'));

console.log(gameName.split('-'));

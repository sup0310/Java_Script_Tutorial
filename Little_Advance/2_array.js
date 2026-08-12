const marvelHeros = ["Thor", "Iron Man", "Spider Man"]
const dcHeros = ["Superman", "Flash", "Batman"]

// push() - adds element at end
marvelHeros.push(dcHeros)
console.log(marvelHeros) // ["Thor", "Iron Man", "Spider Man", ["Superman", "Flash", "Batman"]]
console.log(marvelHeros[3][2]);


// concat() - combines arrays
const marvelHeros1 = ["Thor", "Iron Man", "Spider Man"]
const dcHeros1 = ["Superman", "Flash", "Batman"]
const allHeros = marvelHeros1.concat(dcHeros1)

console.log(allHeros) // ["Thor", "Iron Man", "Spider Man", "Superman", "Flash", "Batman"]
console.log()


// spread operator - combines 2 or more arrays
const allNewHeros = [...marvelHeros1, ...dcHeros1]
console.log(allNewHeros) // ["Thor", "Iron Man", "Spider Man", "Superman", "Flash", "Batman"]


const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flattenArr = newArr.flat(Infinity)
console.log(flattenArr) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("supriyo")) // false;
console.log(Array.from("supriyo")) // ["s", "u", "p", "r", "i", "y", "o"];
console.log(Array.from({name: "supriyo"})) // []

const a = 100
const b = 200
const c = 300
console.log(Array.of(a, b, c)) // [100, 200, 300]
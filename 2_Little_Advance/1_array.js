// JavaScript arrays: resizable and ordered collections of values of different data types

// Create an array
// const fruits = new Array('apple', 'banana', 'cherry'); // using Array constructor
const fruits = ['apple', 'banana', 'cherry'];

// Access values by index
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log();


// Add values to the end
fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

fruits.unshift('peach'); // Add to the beginning
console.log(fruits); // ['peach', 'apple', 'banana', 'cherry', 'date']

fruits.shift(); // Remove the first value
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']   
console.log();

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('kiwi')); // false
console.log(fruits.indexOf('cherry')); // 2
console.log(fruits.indexOf('kiwi')); // -1


// Remove the last value
const last = fruits.pop();
console.log(last); // date
console.log(fruits); // ['apple', 'banana', 'cherry']


// join array elements into a string
const newArr = fruits.join(', '); // Join array elements into a string
console.log(newArr, typeof newArr); // apple, banana, cherry string
console.log();


// slice and splice
const sliced = fruits.slice(1, 3); // slice from index 1 to 3 (not including 3)
console.log(sliced); // ['banana', 'cherry']

const spliced = fruits.splice(1, 2); // remove 2 elements starting from index 1
console.log(spliced);
console.log(fruits);

fruits.splice(0, 1, 'blueberry', 'kiwi', 'guava', 'pinaple'); // remove 1 element at index 0 and add 'blueberry', 'kiwi', 'guava', 'pinaple'
console.log(fruits); // ['blueberry', 'kiwi', 'guava', 'pinaple']
console.log();





// Array Methods

const marvelHeros = ["Thor", "Iron Man", "Spider Man"]
const dcHeros = ["Superman", "Flash", "Batman"]

// push() - adds element at end
marvelHeros.push("Hulk")
console.log(marvelHeros)

// pop() - removes last element
dcHeros.pop()
console.log(dcHeros)

// shift() - removes first element
marvelHeros.shift()
console.log(marvelHeros)

// unshift() - adds element at beginning
dcHeros.unshift("Wonder Woman")
console.log(dcHeros)

// slice() - returns new array without modifying original
const sliced1 = marvelHeros.slice(0, 2)
console.log(sliced1)

// splice() - modifies array by removing/adding elements
const heros = ["A", "B", "C", "D"]
heros.splice(1, 2, "X", "Y")
console.log(heros)

// indexOf() - finds index of element
console.log(marvelHeros.indexOf("Iron Man"))

// includes() - checks if element exists
console.log(dcHeros.includes("Superman"))

// join() - converts array to string
console.log(marvelHeros.join(", "))

// reverse() - reverses array
const reversed = [...dcHeros].reverse()
console.log(reversed)

// map() - transforms each element
const lengths = marvelHeros.map(hero => hero.length)
console.log(lengths)

// filter() - returns new array with matching elements
const allHeros = [...marvelHeros, ...dcHeros]
const filtered = allHeros.filter(hero => hero.length > 5)
console.log(filtered)

// forEach() - iterates through array
marvelHeros.forEach((hero, index) => console.log(`${index}: ${hero}`))

// find() - returns first matching element
const found = allHeros.find(hero => hero.includes("Man"))
console.log(found)

// some() - checks if any element matches
console.log(allHeros.some(hero => hero.length > 10))

// every() - checks if all elements match
console.log(allHeros.every(hero => hero.length > 2))

// reduce() - accumulates values
const lengths2 = marvelHeros.reduce((sum, hero) => sum + hero.length, 0)
console.log(lengths2)
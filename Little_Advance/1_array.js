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

// FOR OF LOOP 

const myArr = [1, 2, 3, 4, 5]

for (const elem of myArr) {
    console.log(elem);
}
console.log();

for (const elem of myArr) {
    if (elem >= 3){
        console.log(elem);
        
    }
}


// MAP
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')
console.log(map);
console.log();


for (const key of map) {
    console.log(key); 
}
console.log();

for (const [key, value] of map) {
    console.log(`${key} == ${value}`); 
}
console.log();

const games= {
    'g1': "NFS",
    'g2': "GTA",
    'g3': "BGMI"
}
for (const [g, name] of Object.entries(games)) {
    console.log(`${g} == ${name}`); 
}
console.log();


// FOR IN LOOP
for (const key in games) {
    console.log(games[key]); 
}
console.log();

for (const num in myArr){
    console.log(myArr[num]);
}
console.log();

// for in is not implementable on maps

// FOR EACH LOOP
 const coding = ['HTML', 'CSS', 'JS', 'React', 'Angular', 'Python', 'Java']

coding.forEach(function(item){
    console.log(item);  
});
console.log();

coding.forEach((element, idx) => {
    console.log(idx + " > " + element);
});
console.log();


codings = [
    {
        name: "JavaScript",
        fileName: "js"
    },
    {
        name: "Hyper Text Markup Language",
        fileName: "html"
    },
    {
        name: "Python",
        fileName: "py"
    }
]

codings.forEach(code => {
    console.log(`The Shortcut of ${code.name} is ${code.fileName}`);
});
console.log();


// FILTER
// values = coding.forEach(function(item){
//     console.log(item);
//     return item;
// });
// console.log(values);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const greater = numbers.filter(num => num > 5);
console.log(greater);

const great = numbers.filter(num => {return num > 4})
console.log(great);

const newNums = []
numbers.forEach(num => {
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter(book => book.genre === 'Non-Fiction' && book.edition > 2000);
console.log(userBooks);
console.log();


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const added = mynums.map( num => num+10)
console.log(added);
console.log();


// CHAINING
const newnum = mynums.map(num => num * 10).map(num => num + 1).filter(num => num >= 50)
console.log(newnum);
console.log();


// REDUCE
// const initial = 0
// const summ = mynums.reduce( (acc, val) => { console.log(acc, val);
//  return acc + val}, 0)
// console.log(summ);
// console.log();

const initial = 0
const summ = mynums.reduce((acc, val) => acc + val, 0)
console.log(summ);
console.log();


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total_bill = shoppingCart.reduce((acc, item) => (acc+item.price), 0);
console.log(total_bill);

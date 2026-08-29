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
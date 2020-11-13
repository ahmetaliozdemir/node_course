const fs = require('fs');
// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON)
console.log(`Hello my name is ${data.name}. I am from ${data.planet}. I am ${data.age} years old.`);
data.name = "Ahmet Ali";
data.planet = "Earth";
data.age = "21";
console.log(`Hello my name is ${data.name}. I am from ${data.planet}. I am ${data.age} years old.`);
dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',dataJSON)
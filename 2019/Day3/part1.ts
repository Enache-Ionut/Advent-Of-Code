//

const fs = require('fs')

const data: string[] = fs.readFileSync('./input.txt','utf8').split('/n');

let wire1: string[] = data[0].split(',');
let wire2: string[] = data[1].split(',');

console.log(data[0]);
console.log(data[1]);

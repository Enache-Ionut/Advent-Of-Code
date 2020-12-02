const DataReader = require('../utils/dataReader');

const dataReader = new DataReader('./input.txt');
const input = dataReader.singleArrayOfStrings();

// I refuse to use regex :))
function getLineData(line) {
  const elements = line.split(' ');
  const range = elements[0].split('-')
  
  const min = range[0];
  const max = range[1];
  const letter = elements[1][0];
  const password = elements[2];

  return { min, max, letter, password };
}

let result = 0;
input.forEach(line => {
  const data = getLineData(line);
  if(data.password[data.min-1] === data.letter && data.password[data.max-1] !== data.letter)
    ++result;
  else if(data.password[data.min-1] !== data.letter && data.password[data.max-1] === data.letter)
    ++result;
});

console.log(result);

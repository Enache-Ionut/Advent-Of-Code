const DataReader = require('../utils/dataReader');

const dataReader = new DataReader('./input.txt');
const input = dataReader.singleArrayOfStrings();

function countTrees(input) {
  let j = 0;
  let trees = 0;
  for(let i = 0; i < input.length - 1;) {
    j = j + 3 >= input[i].length ? j + 3 - input[i].length : j + 3;
    if(input[++i][j] === '#') {
      ++trees;
    }
  }
  return trees;
}

console.log(countTrees(input));

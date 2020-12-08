const DataReader = require('../utils/dataReader');

const dataReader = new DataReader('./input.txt');
const input = dataReader.singleArrayOfStrings();

function countTrees(input, right, down) {
  let j = 0;
  let trees = 0;
  for(let i = 0; i < input.length - down;) {
    j = j + right >= input[i].length ? j + right - input[i].length : j + right;
    i += down;
    if(input[i][j] === '#') {
      ++trees;
    }
  }
  return trees;
}

console.log(countTrees(input, 1, 1) * countTrees(input, 3, 1) *
  countTrees(input, 5, 1) * countTrees(input, 7, 1) * countTrees(input, 1, 2));

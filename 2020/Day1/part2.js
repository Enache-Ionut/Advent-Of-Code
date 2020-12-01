const DataReader = require('../utils/dataReader');

function getProduct(input){
  for(let i = 0; i < input.length; ++i) 
    for(let j = i+1; j < input.length; ++j)
      for(let k = j+1; k < input.length; ++k)
        if(input[i] + input[j] + input[k] === 2020) 
          return input[i] * input[j] * input[k];
}

const dataReader = new DataReader('./input.txt');
const input = dataReader.singleArrayOfNumbers();

console.log(getProduct(input))

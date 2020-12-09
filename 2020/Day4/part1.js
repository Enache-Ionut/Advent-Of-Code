const DataReader = require('../utils/dataReader');

const dataReader = new DataReader('./input.txt');
const passports = dataReader.singleArrayOfElementsSplitByEmptyLine();

function countValidPassports (passports) {
  let valid = 0;
  passports.forEach(element => {
    let count = element.split(':').length;
    if(count == 9 || (count == 8 && !element.includes('cid') )) {
      ++valid;
    }
  });
  return valid;
}

console.log(countValidPassports(passports));

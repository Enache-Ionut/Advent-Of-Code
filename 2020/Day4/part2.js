const DataReader = require('../utils/dataReader');

const dataReader = new DataReader('./input.txt');
const passports = dataReader.Array2DofElementsSplitByEmptyLineAndSpaceOrNewLine();

function countValidPassports (passports) {
  let valid = 0;
  passports.forEach(passport => {
    let countFields = 0;
    passport.forEach(element => {
      const data = element.split(':');
      if(data[0] === 'byr' && +data[1] >= 1920 && +data[1] <= 2002 ) {
        ++countFields;
      }
      else if(data[0] === 'iyr' && +data[1] >= 2010 && +data[1] <= 2020 ) {
        ++countFields;
      }
      else if(data[0] === 'eyr' && +data[1] >= 2020 && +data[1] <= 2030 ) {
        ++countFields;
      }
      else if(data[0] === 'hgt') {
        const unit = data[1].slice(-2);
        const number = +data[1].slice(0, -2);
        if((unit === 'cm' && number >= 150 && number <= 193) || 
            (unit === 'in' && number >= 59 && number <= 76)) {
          ++countFields;
        }
      }
      else if(data[0] === 'hcl' && data[1].match(/#[0-9a-f]/) && data[1].length === 7) {
        ++countFields;
      }
      else if(data[0] === 'ecl' && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(c => data[1] === c )) {
        ++countFields;
      }
      else if(data[0] === 'pid' && data[1].match(/[0-9]/) && data[1].length === 9) {
        ++countFields;
      }
    });
    if(countFields === 7){
      ++valid;
    }
  });
  return valid;
}

console.log(countValidPassports(passports));

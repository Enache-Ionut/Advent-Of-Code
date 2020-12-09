const fs = require('fs');

class DataReader {
  constructor(path){
    this.inputPath = path;
  }

  singleArrayOfNumbers() {
    return fs.readFileSync(this.inputPath, 'utf8').split('\r\n').map((numberAsString) => +numberAsString);
  }

  singleArrayOfStrings() {
    return fs.readFileSync(this.inputPath, 'utf8').split('\r\n');
  }

  singleArrayOfElementsSplitByEmptyLine() {
    return fs.readFileSync(this.inputPath, 'utf8').split('\r\n\r\n');
  }

  Array2DofElementsSplitByEmptyLineAndSpaceOrNewLine() {
    const passports = fs.readFileSync(this.inputPath, 'utf8').split('\r\n\r\n');
    let passportsFields = [];
    passports.forEach(passport => {
      passportsFields.push(passport.split(/(?: |\r\n)+/));
    });
    return passportsFields;
  }
}

module.exports = DataReader;
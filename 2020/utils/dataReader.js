const fs = require('fs');

class DataReader {
  constructor(path){
    this.inputPath = path;
  }

  singleArrayOfNumbers() {
    return fs.readFileSync(this.inputPath, 'utf8').split('\r\n').map((numberAsString) => +numberAsString);
  }
}

module.exports = DataReader;
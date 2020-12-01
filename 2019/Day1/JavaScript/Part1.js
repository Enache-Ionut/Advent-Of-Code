//
main();

function readData(filePath) {
  var fs = require('fs');
  return fs.readFileSync(filePath).toString().split("\n");
}

function fuelRequired(data) {

  var fuelSum = 0;
  data.forEach(mass => {
    fuelSum += Math.floor(mass / 3) - 2;
  });
  return fuelSum;
}

function main() {
  var filePath = './Day1/JavaScript/input.txt';
  var data = readData(filePath);

  console.log(fuelRequired(data));
}
//
main();

function readData(filePath) {
  var fs = require('fs');
  return fs.readFileSync(filePath).toString().split("\n");
}

function fuelModuls(mass) {
  var massAux = Math.floor(mass / 3) - 2;
  var sum = 0;
  while (massAux > 0) {
    sum += massAux;
    massAux = Math.floor(massAux / 3) - 2;
  }
  return sum;
}

function fuelRequired(data) {
  var fuelSum = 0;
  data.forEach(mass => {
    fuelSum += fuelModuls(mass);
  });
  return fuelSum;
}

function main() {
  var filePath = './Day1/input.txt';
  var data = readData(filePath);

  console.log(fuelRequired(data));
}
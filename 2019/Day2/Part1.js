//
main();

function readData(filePath) {
    var fs = require('fs');
    return fs.readFileSync(filePath).toString().split(',').map(Number);
}

function intcodeComputation(data){
    for(var i = 0; i < data.length; i += 4){
        switch(data[i]){
            case 99:
                return data;
            case 1:
                data[data[i+3]] = data[data[i+1]] + data[data[i+2]];
                break;
            case 2:
                data[data[i+3]] = data[data[i+1]] * data[data[i+2]];
                break;
            default:
                return data;
        }
    }
    return data;
}

function main() {
    var filePath = './Day2/input.txt';
    var data = readData(filePath);
    
    data[1] = 12;
    data[2] = 2;

    var numbers = intcodeComputation(data);
    console.log(numbers[0]);
  }
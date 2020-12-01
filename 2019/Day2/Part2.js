//
main();

function readData(filePath) {
    var fs = require('fs');
    return fs.readFileSync(filePath).toString().split(',').map(Number);
}

function intcodeComputation(noun, verb){

    var filePath = './Day2/input.txt';
    var data = readData(filePath);

    data[1] = noun;
    data[2] = verb;

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
    for(var noun = 0; noun <= 99; ++noun){
        for(var verb = 0; verb <= 99; ++verb){
            var number = intcodeComputation(noun, verb)[0];
            if( number === 19690720 ){
                console.log(100 * noun + verb);
                return 0;
            }
        }
    }

  }
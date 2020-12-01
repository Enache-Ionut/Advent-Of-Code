var start = 347312;
var end = 805915;

var count = 0;

for(var i = start; i<= end; ++i){
    var startStr = i.toString();
    var increasingOrder = true;
    var pairDigits = false;

    for(var j = 1; j < startStr.length; ++j){
        if(+startStr[j-1] > +startStr[j] && increasingOrder){
            increasingOrder = false;
        } 

        if( +startStr[j-1] === +startStr[j] && pairDigits === false){
            pairDigits = true;
        }
    }

    if(increasingOrder && pairDigits){
        ++count;
    }
}

console.log(count);
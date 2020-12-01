var start = 347312;
var end = 805915;

var endStr = end.toString();
var count = 0;
for(var i = 347312; i<= 805915; ++i){
    var startStr = i.toString();
    var valid = true;

    if(startStr[0] == startStr[1] && startStr[1] == startStr[2] && 
        startStr[3] == startStr[4] && startStr[4] == startStr[5])
        {
            continue;
        }

    for(var j = 1; j < startStr.length; ++j){
        if(+startStr[j-1] > +startStr[j])
        {
            valid = false;
            break;
        } 
    }

    if(valid == false)
        continue;

    var aux = -1;
    for(var j = 2; j < startStr.length; ++j){
        if( +startStr[j-2] === +startStr[j-1] && +startStr[j-1] === +startStr[j] ){
            aux = +startStr[j];
            break;
        }
    }

    valid = false;
    for(var j = 1; j < startStr.length; ++j){
        if( +startStr[j-1] === +startStr[j] && aux != +startStr[j] ){
            valid = true;
            break;
        }
    }
  
    if(valid){
        ++count;
    }
}

console.log(count);
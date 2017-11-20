function printReverse(list){
    list.forEach(function(item,index){
        console.log(list[list.length-1-index]);
    });
}

function isUniform(list){
    var uniform = true;
    list.forEach(function(item){
        if (item!==list[0]){
            uniform = false;
            return uniform;
        }
    });
    return uniform;
}

function sumArray(list){
    var sum = 0;
    list.forEach(function(item){
        sum = sum + item;

    });
    return sum;
}

function max(list){
    var maxValue = list[0];
    list.forEach(function(item){
        if (item > maxValue){
            maxValue = item;
        }

    });
    return maxValue;
}
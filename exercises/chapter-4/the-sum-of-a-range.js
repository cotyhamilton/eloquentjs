function getRange(x,y,z) {
    var list = [],
        diff = Math.abs(x - y),
        max = (x > y ? x : y),
        min = (x < y ? x : y);

    if (z == undefined) z = 1;
    
    if (z > 0) {
        for (var i = 0; i <= (diff/z); i++) {
            if (!list.length) list.push(min);
            else list.push(min += z);
        }
    }

    else if (z < 0) {
        for (var i = 0; i >= (diff/z); i--) {
            if (!list.length) list.push(max);
            else list.push(max += z);
        }
    }

    console.log(list);

    return list;
}

function getSum(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

console.log(getSum(getRange(5,11,-2)));
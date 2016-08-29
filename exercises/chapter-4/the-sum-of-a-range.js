function range(x,y,z) {
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

function sum(list) {
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

console.log(sum(range(11,5,2))); //official solution will return correct results with this input

/* ----- OFFICIAL SOLUTION ----- *

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

 * ----------------------------- */
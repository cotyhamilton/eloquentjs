function reverseArray(list) {
    var rList = [];
    while (list.length) {
        rList.push(list.pop())
    }
    return rList;
}

function reverseArrayInPlace(list) {
    for (var i = 0; i < list.length; i++) {
        // delete first item and place it in last index, decrementing index each iteration
        list.splice(list.length - 1 - i, 0, list.shift())
    }
    return list;
}

console.log(reverseArray([1,2,3,4,5,6,7]));
console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));

/* ----- OFFICIAL SOLUTION ----- *

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

 * ----------------------------- */
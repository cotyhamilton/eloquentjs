function countChars(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char)
            count++;
    }
    return count;
}

console.log(countChars("Mississippi", "i"));

/* ----- OFFICIAL SOLUTION ----- *

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

 * ----------------------------- */
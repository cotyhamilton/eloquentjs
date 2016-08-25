for (var i = 1; i <= 100; i++) {
    var fb = "";
    if (i % 3 === 0) {
        fb += "Fizz";
    }
    if (i % 5 === 0) {
        fb += "Buzz";
    }
    console.log(fb || i)
}

/* ----- OFFICIAL SOLUTION ----- *

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

 * ----------------------------- */
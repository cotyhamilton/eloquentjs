function isEven(num) {
    if (num < 0) {
        return isEven(-num);
    }
    else if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return isEven(num - 2);
    }
}

console.log(isEven(-33));

/* ----- OFFICIAL SOLUTION ----- *

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

 * ----------------------------- */
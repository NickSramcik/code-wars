// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
    if (a.length > b.length)
        return b + a + b;
    else return a + b + a;
  }
  
// Can be simplified into following syntax 
// Return ends the function, so the second return won't fire if first conditional is met

function solution(a, b){
    if (a.length > b.length) return b + a + b;
    return a + b + a;
  }


// Using ternary, one liner

const solution = (a, b) => (a.length > b.length) ? (b + a + b) : (a + b + a);

// Parentheses not needed but looks nicer & more readable
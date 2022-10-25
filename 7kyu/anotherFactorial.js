// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial


// Pass in an integer
// Return its factorial
// 3 -> 3 * 2 * 1 = 6

// Create a sequential array of length n and reduce the product

function factorial(n){
    return n < 2 ? 1 : Array.from({length: n}, (_, i) => i + 1).reduce((a, c) => a * c);
  }

// Using a recursive function

const factorial = n => !n ? 1 : factorial(n - 1) * n; 
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Pass in two positive integers, a & b
// Return an array of numbers between a & b, inclusive
// 3, 7 -> [3, 4, 5, 6, 7]


// Create an array of length (b - a) + 1
// Assign each value to its index + a
// Return that array

function between(a, b) {
    return Array.from({length: (b - a) + 1}, (_, i) => i + a);
  }

// Refactored into arrow function

const between = (a, b) => Array.from({length: (b - a) + 1}, (_, i) => i + a);
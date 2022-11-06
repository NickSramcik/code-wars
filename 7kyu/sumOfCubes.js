// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


// Pass in a positive integer (no empty, no funny biz)
// Return the sum of every number from 1 to n cubed
// 3 -> 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36

// Create an array sequence from 1 to n
// Cube every value of that array
// Reduce the array & return

function sumCubes(n){
    return Array.from({length: n}, (_, i) => ++i).map(e => e * e * e).reduce((a, c) => a + c);
  }

// Refactored into arrow function

const sumCubes = n => Array.from({length: n}, (_, i) => Math.pow(++i, 3)).reduce((a, c) => a + c);

// Using array keys, cube while reducing

const sumCubes = n => [...Array(++n).keys()].reduce((a, c) => a + c ** 3);
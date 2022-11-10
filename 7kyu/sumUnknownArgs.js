// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// Pass in any number of arguments (numbers)
// Return a sum of all of them

// Create an array of all the arguments and reduce them, return result

function sum() {
    return [...arguments].reduce((a, c) => a + c, 0);
  }


// Refactored into arrow function

const sum = (...x) => [...x].reduce((a, c) => a + c, 0);
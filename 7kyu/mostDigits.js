// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


// Pass in an array of numbers (positive integers)
// Return the number with the most digits
// [1, 2, 99, 32, 111] -> 111

// Reduce the array, if current value has longer length, it becomes new accumulator. Return result

function findLongest(array){
    return array.reduce((a, c) => String(c).length > String(a).length ? c : a);
  }

// Refactored into arrow function

const findLongest = arr => arr.reduce((a, c) => (c+'').length > (a+'').length ? c : a);

// Sort by length and return first element

const findLongest = arr => arr.sort((a, b) => (b+'').length - (a+'').length)[0];

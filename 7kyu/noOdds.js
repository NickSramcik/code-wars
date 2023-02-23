// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Pass in an array of numbers
// Return that array with no odd numbers remaining
// [1, 2, 3, 4, 5] -> [2, 4]

// Filter the array to numbers that have no remainder when divided by 2

function noOdds(values){
    return values.filter(e => !(e % 2));
}

// Refactored into arrow function

const noOdds = arr => arr.filter(e => e % 2 == 0);
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:


// Pass in an array of arrays (no arrays are empty, each array contains positive integers)
// Return how many combinations you can make taking one number from each array
// solve([[1,2],[4,4],[5,6,6]]) = 4

// Map the parent array
// For each array, remove duplicates. Then reduce them, multiplying each length to get total combinations

function solve(arr) {
    return arr.map(e => [...new Set(e)]).reduce((a, c) => a * c.length, 1);
  };

// Refactored into arrow function

const solve = arr => arr.map(e => [...new Set(e)]).reduce((a, c) => a * c.length, 1);

// Use the size attribute of the set for the map, then reduce those

const solve = arr => arr.map(e => new Set(e).size).reduce((a, c) => a * c, 1);

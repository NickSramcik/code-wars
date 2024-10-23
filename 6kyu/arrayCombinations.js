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

function shreksolve(arr) {
    return arr.map(e => [...new Set(e)]).reduce((a, c) => a * c.length, 1);
  };

// Refactored into arrow function

const oldersolve = arr => arr.map(e => [...new Set(e)]).reduce((a, c) => a * c.length, 1);

// Use the size attribute of the set for the map, then reduce those

const oldsolve = arr => arr.map(e => new Set(e).size).reduce((a, c) => a * c, 1);
//

// 1, 4, 5
// 1, 4, 5

// Pass in an array of subarrays
// Return a number

// Pass in: [[1,2],[4,4],[5,6,6]], get: 4
// 1, 4, 5
// 2, 4, 5
// 1, 4, 6
// 2, 4, 6

// If we have a series of choices...
// (# of options for choice 1) * (# of options for choice 2) * (# of options for choice 3) = total # of combinations
// 2 * 1 * 2 = 4 


// [[1,2],[4,4],[5,6,6]]
// [[1,2], [4], [5, 6]] // no more duplicates! 
// [{1, 2}, {4}, {5, 6}] // Array of sets, each subarray became a set
// [2, 1, 2] // Array of set sizes

function solve(arrays) {
  return arrays.map(subarray => (new Set(subarray)).size).reduce((acc, cur) => cur * acc, 1);
}

// 1 * 2, 2 * 1, 2 * 2, 4

// Test Cases

console.log(solve([[1,2],[4,4],[5,6,6]]), 4);

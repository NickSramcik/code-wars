// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.


// Pass in an array of arrays, each containing positive integers
// Return the sum of each sub-array's minimum value
// [[1,2,3], [4,5,6], [7,8,9]] -> 1 + 4 + 7 = 12

// Reduce the minimum of each value of input array & return

function sumOfMinimums(arr) {
    return arr.reduce((a, c) => a + Math.min(...c), 0);
  }

// Refactored into arrow function

const sumOfMinimums = arr => arr.reduce((a, c) => a + Math.min(...c));
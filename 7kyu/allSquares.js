// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

// Pass in an array of numbers
// Return boolean

// Return undefined if arr length is 0
// Loop through array
//   if every number's square root is an integer, return true
//   return false if any number fails this test

var isSquare = function (arr) {
    if (!arr.length) return undefined;
    return arr.every(num => Number.isInteger(Math.sqrt(num)));
}

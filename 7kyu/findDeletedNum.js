// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// Pass in two arrays, one ordered, the other mixed with possible deletion from first arr (can be empty)
// Return an integer — which number was deleted (or 0 if no deletion) 
// [1, 2, 3, 4, 5], [4, 2, 3, 5] -> 1

// Filter the first array for numbers that don't exist in the second array
// Return that number or 0 if it is empty

function findDeletedNumber(arr, mixArr) {
    return arr.filter(e => !(mixArr.includes(e)))[0] || 0;
  }

// Refactored into arrow function

const findDeletedNumber = (arr, mixArr) => arr.filter(e => !mixArr.includes(e))[0] || 0;

// Using indexOf (a value of -1 means it doesn't exist)

const findDeletedNumber = (arr, mixArr) => arr.filter(e => mixArr.indexOf(e) == -1)[0] || 0;
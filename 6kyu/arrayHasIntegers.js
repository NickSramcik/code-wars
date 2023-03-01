// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

// Pass in an array
// Return boolean — true if input is empty or every element is an integer
// [1, 2, 3] -> true

// Return true if input is []
// Return true if every element is a number with no remainder 
// Return false otherwise

function isIntArray(arr) {
    if (!arr) return false;
    if (arr == [] || arr.every(e => Number.isInteger(e))) {
        return true;
    }return false;
}

// Refactored into arrow fuction

const isIntArray = arr => !!arr && arr.every(e => Number.isInteger(e));
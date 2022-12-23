// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// Return an array of positive, single digit integers
// Return that array as if it were a number + 1
// [1, 1, 9] -> [1, 2, 0]  (119 + 1 = 120) 

// Check for invalid inputs
// Add 1 to last value of array
// Loop through the array. If a number is > 9, change it to itself - 10, and add 1 to previous value
// Return new array

function upArray(arr){
    if (arr.find(e => e < 0 || e > 9) != undefined || arr.length < 1) return null;
    arr[arr.length - 1] += 1;
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > 9) {
            if (i > 0) {
                arr[i] = arr[i] - 10;
                arr[i - 1] += 1;
            }else {
                arr[i] = arr[i] - 10;
                arr.unshift(1);
            };
        };
    }return arr;
  }

// Refactored using while loop

function upArray(arr) {
    if (arr.length < 1 || arr.some(e => e < 0 || e > 9)) return null;

    let i = arr.length - 1;
    while (i >= 0 && arr[i] == 9) {
        arr[i--] = 0;
    }if (i < 0) {
        arr.unshift(1);
    }else {
        arr[i]++;
    }return arr;
}
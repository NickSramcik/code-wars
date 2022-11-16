// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// Pass in an array of positive integers (nonempty)
// Return the array with the odds sorted in ascending order w/ evens in their original place
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

function sortArray(array) {
    // Create new array of only the odds sorted in ascending order
    let odds = array.filter(e => e % 2 != 0).sort((a, b) => a - b);
    // Map the input array and replace odds with each element in the odd array, in order. Return result
    return array.map(e => e % 2 ? odds.shift() : e);
  }

// Refactored

function sortArray(arr) {
    let odds = arr.filter(e => e % 2 != 0).sort((a, b) => a - b);
    return arr.map(e => e % 2 ? odds.shift() : e);
  }
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


// Pass in an array of 3 unique numbers (pos or neg, some decimals)
// Return the index of the middle element (sorting the numbers from small to big)
// [1, 5, 2] -> 2

// Sort the array, find the 2nd element, and return its original index

function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

// Refactored into arrow function

const gimme = arr => arr.indexOf([...arr].sort((a, b) => a - b)[1]);
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.


// Pass in an array 
// Return how many elements are in the array, including elements inside deeper arrays
// See examples above
// Use a recursive function to loop through the array and check inside if an element is another array

function deepCount(a){
    let count = a.length;
    for (e of a) {
        if (Array.isArray(e)) {
            count += deepCount(e);
        };
    }return count;
  }

// Refactored using arrow function

const deepCount = a => a.reduce((a, c) => a + (Array.isArray(c) ? deepCount(c) : 0), a.length);


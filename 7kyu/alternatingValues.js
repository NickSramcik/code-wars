// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!


// Return a positive integer & 2 values
// Alternate between 2 strings in an array for input length
// 5, 'onion', 'shrek' -> ['onion', 'shrek', 'onion', 'shrek', 'onion']

// Create array, push values to it in a for loop for n iterations, checking odd or even

function alternate(n, v1, v2){
    let arr = [];
    for (i = 0; i < n; i++) {
      i % 2 ? arr.push(v2) : arr.push(v1);
    }return arr;
  }

// One liner using Array.from() 

const alternate = (n, v1, v2) => Array.from({length: n}, (_, i) => i%2 ? v2 : v1);
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


// Pass in an array of strings, each string being repeats of 1 letter (nonempty)
// Return the same array with every string having the same length as the average string length
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3

function averageLength(arr) { 
    // Store the average string length
    const avg = Math.round(arr.reduce((a, c) => a + c.length, 0) / arr.length);
    // Map array, make each element equal average length
    return arr.map(e => e[0]).map(e => e.padEnd(avg, e[0]));
  }

// Refactored using repeat method

function averageLength(arr) { 
    const avg = Math.round(arr.reduce((a, c) => a + c.length, 0) / arr.length);
    return arr.map(e => e[0].repeat(avg));
  }
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Pass in an array of numbers (length > 2)
// Return the unique number 
// [1, 1, 1, 69, 1, 1] -> 69


// Sort the array. If first 2 are equal, return last. Otherwise, return first. 

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] === arr[1]) return arr[arr.length - 1];
    else return arr[0];
  }

// Condensed

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr.pop() : arr[0];
}

// Using an array method
// The index of the unique value must equal the last index of that same value, since there's only 1

const findUniq = arr => arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e));
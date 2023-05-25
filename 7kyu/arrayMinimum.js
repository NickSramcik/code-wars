// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// Pass in an array and a string, array having numbers no dupes, string being 'value' or 'index'
// Return a number, representing smallest value or index of input array
// min([1,2,3,4,5], 'value') // => 1

// Store minimum value
// Check the value of the 2nd input string
//  if 'value', return minimum value
//  if 'index', return index of minimum value 

function min(arr, toReturn) {
    const minimum = Math.min(...arr);
    if (toReturn == 'value') return minimum;
    if (toReturn == 'index') return arr.indexOf(minimum);
}

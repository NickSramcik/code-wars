// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

// Pass in a positive integer
// Return a sequential array equaling that length
// 6 -> [0, 1, 2, 3, 4, 5]

// Create an array of length n and make each element equal to its index

const arr = n => Array.from({length: n}, (e, i) => e = i);

// You don't need to specify the element 

const arr = n => Array.from({length: n}, (_, i) => i);

// Using array keys

const arr = n => [...Array(n).keys()];

// Doesn't work if no input is given, check that n is truthy

const arr = n => n ? [...Array(n).keys()] : [];
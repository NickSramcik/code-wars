// Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

// Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

// If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

// Examples:

// t = [1, 2, 3, 4]
// tCopy = copyList(t)
// t[1] += 5
// t = [1, 7, 3, 4]
// tCopy = [1, 2, 3, 4]

// Pass in an array
// Return an array (deep copy)

// Join input into a string, split back into array, map to convert to nums, return

const copyListOld = arr => arr.join('.').split('.').map(num => +num);

// Refactored using spread

const copyList = arr => [...arr];

// Test cases

const shrek = [1, 2, 3, 4];
const donkey = copyList(shrek);

shrek[1] = 10;
console.log(shrek, donkey);

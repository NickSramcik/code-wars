// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// Pass in an array
// Return boolean

// Check if every value is an array, return result

const arrCheckOld = arr => arr.every(thing => Array.isArray(thing));

// Still works written this way

const arrCheck = arr => arr.every(Array.isArray);

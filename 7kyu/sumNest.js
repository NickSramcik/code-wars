// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

// Pass in an array
// Return a number

// Reduce the input array
//  if current element is an array, recurse
//  Otherwise add it to accumulator
// Return result

const sumNestedOld = arr => {
    return arr.reduce((a, c) => Array.isArray(c) ? a + sumNested(c) : a + c, 0);
};

// Refactored with flat

const sumNested = arr => arr.flat(Infinity).reduce((a, c) => a + c, 0);

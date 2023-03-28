// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//     prefill("1", 1) --> [1]

//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]

//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"

// Pass in 2 inputs, a positive integer n and any input x (check that n is a number)
// Return an array of length n, with every element equaling x
// 2, 'onion' -> ['onion', 'onion']

// If Number(n) is not a number, return 'n is invalid'
// Construct an array of length n, and fill it with x
// Return this new array

function prefill(n, v) {
    if (!Number.isInteger(Number(n)) || n < 0 || typeof n == 'boolean') {
        throw new TypeError(`${n} is invalid`);
    }
    return Array.from({ length: n }).fill(v);
}

// Refactored

const prefill = (n, v) => {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
};

// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// No Loops 1 - Small enough?

// Pass in an array and a positive integer
// Return boolean
// check([66, 101], 66) -> true

// Store an object with keys of each index's value
// Check object's keys for input property equaling undefined and return this condition

function check(a, x) {
    return a.includes(x);
}

// Refactored

const check = (a, x) => a.some(e => e == x);

check([66, 101], 66);

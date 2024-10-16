// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false

// Pass in 3 numbers
// Return boolean

// Declare a helper function that takes in a number and returns boolean, whether it is positive
// If any of the following are true, return true:
//    a & b are positive, c is not
//    b & c are positive, a is not
//    a & c are positive, b is not
// Return false if none of above is true

const pos = n => n > 0;

function twoArePositive(a, b, c) {
    if (pos(a) && pos(b) && !pos(c) ||
        pos(b) && pos(c) && !pos(a) ||
        pos(a) && pos(c) && !pos(b)) return true;
    
    return false;
}

// Refactored using filter and length

const twoArePositive = (...nums) => nums.filter(n => n > 0).length == 2;

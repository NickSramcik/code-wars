// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.


// Pass in a positive integer
// Return bool, whether input is a power of 2
// 4 -> true  6 -> false

// Run a loop, if modulus of 2 is nonzero and the number isn't 1, return false

function isPowerOfTwo(n){
    while (n % 2 === 0) {
        n = n / 2;
    }if (n === 1) return true;
    else return false;
  }
// ^This works but will timeout if you input 0


function isPowerOfTwo(n){
    if (n === 0) return false;
    while (n % 2 === 0) {
        n = n / 2;
    }return n === 1;
  }

// Using logarithms

const isPowerOfTwo = n => Number.isInteger(Math.log2(n));
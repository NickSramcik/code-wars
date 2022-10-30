// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// maxMultiple (37,200) ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .


// Pass in two positive integers, d and b
// Return the maximum multiple of d that is positive and <= b
// 10, 50 -> 50
// 37, 200 -> 185

// Run a loop from the bound downwards. If the current number is divisible by d, return it

function maxMultiple(divisor, bound){
    for (i = bound; i > 0; i--) {
        if (i % divisor == 0) return i;
    };
  }

// Refactored into arrow function using an array

const maxMultiple = (d, b) => Array.from({length: b}, (_, i) => ++i).reverse().find(e => !(e % d));
// This works but is extremely inefficient 

// Use modulus, which gives you remainder of a division
// bound % divisor subsequently tells us how far removed the maximum multiple of the divisor is from the bound

const maxMultiple = (d, b) => b - b % d;
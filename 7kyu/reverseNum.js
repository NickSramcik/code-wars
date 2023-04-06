// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// Pass in a number
// Return a number, the input reversed
// 123 ->> 321


// Convert number to string, then to an array
// Reverse the array
// Convert back to string, then number, and return
// If input is negative, use the absolute value and then make it negative

function reverseNumber(n) {
    if (n < 0) return Number(Math.abs(n).toString().split('').reverse().join('')) * -1;
    return Number(n.toString().split('').reverse().join(''));
}

// Refactored using arrow function

const reverseNumber = n => (n > 0 ? 1 : -1) * +[...String(Math.abs(n))].reverse().join('');

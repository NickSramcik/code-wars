// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

// Pass in a number
// Return a number

// While n % 3 is not 0 and n has length:
//   Slice the last digit off of n
// Return n (or null if n is falsey)

const prevMultOfThreeOld = n => {
    while (n % 3 !== 0 && String(n).length) {
        n = Number(String(n).slice(0, -1));
    }

    return n || null;
};

// Refactored using recursion

const removeLastDigit = n => Number(n.toString().slice(0, -1));

const prevMultOfThree = n => {
    if (!n) return null;
    if (n % 3 == 0) return n;
    
    return prevMultOfThree(removeLastDigit(n));
};

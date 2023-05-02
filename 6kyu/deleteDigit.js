// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

// Pass in a positive integer
// Return the largest number produced by removing one digit
// 123 -> 23

// Store an empty result array
// Loop through the number
// Remove index digit and push result to result array
// Return the maximum of the result array

function deleteDigit(n) {
    const result = [];
    n = n.toString();

    for (i = 0; i < n.length; i++) {
        const digitDeleted = Number(n.slice(0, i) + n.slice(i + 1));
        result.push(digitDeleted);
    }

    return Math.max(...result);
}

// Refactored into one line just for fun

const deleteDigit = (n, s = String(n)) => Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(++i)));

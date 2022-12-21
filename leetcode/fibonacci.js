// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).


// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

// Pass in a positive integer, n
// Return a number, the nth term of the fibonacci sequence
// 2 -> 1 (0, 1, '1')
// 3 -> 2 (0, 1, 1, '2')
// 4 -> 3 (0, 1, 1, 2, '3')

// Start with an array of [0, 1]
// Loop from i = 2 to n, pushing a new value to array (previous 2 summed)
// Return the nth element of the array

function fib(n) {
    let fib = [0, 1];
    for (i = 2; i <= n; i++) {
        let sum = fib[i - 1] + fib[i - 2];
        fib.push(sum);
    }return fib[n];
};

// Using Binet's formula

const fib = n => (Math.abs(((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n)) / Math.sqrt(5)
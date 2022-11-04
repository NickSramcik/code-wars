// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.


// Pass in a positive integer n, non empty, no funny biz
// Return the nth number of the fibonacci sequence
// 4 -> 2

function nthFibo(n) {
    // Create an array for the fibonacci sequence, starting with 0 and 1
    let fibSeq = [0, 1]
    // Loop for n - 2 iterations, creating the rest of the sequence
    for (i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 2] + fibSeq[i - 1]);
    }
    // Return the last element of the sequence
    return fibSeq[n - 1];
  }

// Refactored

function nthFibo(n) {
    let fibSeq = [0, 1]
    for (i = 2; i < n; i++) {
        fibSeq.push(fibSeq.slice(-2).reduce((a, c) => a + c));
    }return fibSeq[--n] || 0;
  }

// Refactored into one line using recursion

const nthFibo = n => n < 2 ? 0 : n == 2 ? 1 : nthFibo(n - 1) + nthFibo(n - 2);

// Using destructuring

function nthFibo(n, [prev, cur] = [0, 1]) {
    for (i = 1; i < n; i++) [prev, cur] = [cur, prev + cur];
    return prev;
} 
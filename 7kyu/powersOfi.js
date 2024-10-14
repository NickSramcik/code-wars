// i is the imaginary unit, it is defined by i²=−1
// i²=−1, therefore it is a solution o x²+1=0
// x²+1=0.

// Your Task
// Complete the function pofi that returns i to the power of a given non-negative integer in its simplest form, as a string (answer may contain i).

// pfoi(0) = '1'
// pfoi(0) = 'i'
// pfoi(0) = '-1'
// pfoi(0) = '-i'

// Pass in a number n
// Return a string

// Result follows a pattern shown above
// Let result be an array of that pattern
// Return (n % 4)th index of result array

function pofi(n) {
    const result = ['1', 'i', '-1', '-i'];
    return result[n % 4];
}

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// Pass in a positive integer
// Return a number, the result of halving sum as shown above

// Store a count, and a divisor as numbers
// While n / divisor >= 1, do:
    // Add n / divisor to count (round it down)
    // Double the divisor
// Return the result

function halvingSum(n) {
    let divisor = 1,
        result = 0;

    while (n / divisor >= 1) {
        result += Math.floor(n / divisor);
        divisor *= 2;
    }

    return result;
}

// Refactored using recursion

function halvingSum(n) {
    if (n < 1) return 0;
    return n + Math.floor(halvingSum(n / 2));
}

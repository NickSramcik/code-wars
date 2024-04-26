// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

// Pass in 2 numbers
// Return an array of numbers

// Create an empty result array
// Loop from 1 to m
//      Push n * i to result array
// Return array

function multiples(m, n) {
    const result = [];

    for (i = 1; i <= m; i++) {
        result.push(n * i);
    }

    return result;
}

// Refactored using methods
// Index starts at 0 so we need to increment it before multiplying it with n

function multiples(m, n) {
    return Array.from({length: m}).map((_, i) => (i + 1) * n);
}

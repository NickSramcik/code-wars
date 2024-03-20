// Write this function

// for i from 1 to n, do i % m and return the sum

// f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)
// You'll need to get a little clever with performance, since n can be a very large number

// Pass in 2 numbers
// Return a number

// This function can be optimized by utilizying the repeating pattern in this function
// Store repetitions by flooring n / m
// Store remainder, n % m
// Store sum of sequence from 0 to m - 1
// Total sum is repetitions * sequenceSum
// Loop from 1 to remainder to add last values (i % m)
// Return result

function f(n, m) {
    const repetitions = Math.floor(n / m),
        remainder = n % m,
        sequenceSum = (m * (m - 1)) / 2;

    let totalSum = repetitions * sequenceSum;

    for (i = 1; i <= remainder; i++) {
        totalSum += i % m;
    }

    return totalSum;
}

// Refactored

function f(n, m) {
    return ((Math.floor(n / m) * m * (m - 1)) / 2 + ((n % m) * ((n % m) + 1)) / 2);
}

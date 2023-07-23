// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// Pass in 2 integers
// Return a number, sum of multiples of n below m
// Examples above

// If either input < 0 return 'INVALID'
// Store a count variable
// Loop from n to m in steps of n
// Increment count by index
// Return count

function sumMul(n, m) {
    if (n < 1 || m < 1) return 'INVALID';
    let sum = 0;

    for (i = n; i < m; i += n) sum += i;

    return sum;
}

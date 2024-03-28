// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// Pass in a number
// Return a number

// Store a result set to 0
// Store step, set to 1
// Store current count, set to 0
// Loop from 1 to input n
//      Add step to current
//      Add current to result
//      Increment step by 1
// Return result

function sumTriangularNumbers(n) {
    let result = 0,
        current = 0,
        step = 1;

    for (i = 1; i <= n; i++) {
        current += step;
        result += current;
        step += 1;
    }

    return result;
}

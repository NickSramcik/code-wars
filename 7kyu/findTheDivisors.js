// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// Pass in a number
// Return an array OR a string
// 12 -> [2, 3, 4, 6]      13 -> '13 is prime'

// Store a result array
// Run a loop from 2 to n (not including n)
// If n is divisible by i, add it to result array
// If result array has items, return it, otherwise return 'n is prime'

function divisors(n) {
    let result = [];

    for (i = 2; i < n; i++) {
        if (n % i == 0) result.push(i);
    }

    return result.length > 1 ? result : `${n} is prime`;
}

// Refactored using arrow function and a filter
// Construct an array of length n-2, assign values to index + 2 to create an array of numbers from 2 to n-1
// Filter that array to values that can divide evenly into n
// Return it if it has length, otherwise return the prime string

const divisors = (
    n,
    r = Array.from({ length: n - 2 }, (_, i) => i + 2).filter(e => !(n % e))
) => (r.length ? r : `${n} is prime`);

// Refactored for readability

const divisors = n => {
    const result = Array.from({ length: n - 2 }, (_, i) => i + 2).filter(
        e => !(n % e)
    );
    return result.length ? result : `${n} is prime`;
};

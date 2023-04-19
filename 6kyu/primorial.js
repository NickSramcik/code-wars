[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 
    509, 521, 523, 541]

// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.!alt!alt

// Only positive numbers will be passed (N > 0) .
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation:
// Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

// Mathematically written as , P3# = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation:
// Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .


// Pass in a positive integer n
// Return its primorial, the product of the 1 to nth primes
// 5 -> 2 * 3 * 5 = 30

// Store an array of prime numbers
// Loop from 1 to n, multiplying the i-th prime number to result
// Return result

function numPrimorial(n){
    const PRIME = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    let result = 1;

    for (i = 1; i <= n; i++) {
        result *= PRIME[i];
    }

    return result;
}

// Refactored using slice and reduce

const numPrimorial = n => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79].slice(0, n).reduce((a, c) => a * c, 1);

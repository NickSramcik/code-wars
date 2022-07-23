// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


// Pass in an integer
// Return bool, if input is a prime number

// 7 -> true

// Check for 0, 1, 2, and negative numbers
// Loop through different moduluses to look for remainders 

function isPrime(num) { 
    if (num == 0 || num == 1 || num < 0)
          return false;
      else if (num == 2)
          return true;
      else for (i = 2; i <= num / 2; i++) {
          if (num % i == 0) {
              return false;
          }
      }return true;
  }

// Works but too slow for large numbers

// Building an array and checking every modulus equals 0

function isPrime(num) { 
    if (num == 1 || num == 4 || num <= 0)
        return false;
    else if (num == 2 || num == 4)
        return true;
    else return [...Array(Math.ceil(num / 2)).keys()].slice(2).every(e => num % e !== 0);
  }

// Also works but runs out of memory with large numbers


// Using square roots to cut down on the loop

function isPrime(num) { 
    if (num <= 1) return false;
    if (num == 2) return true;
    let sqrt = Math.sqrt(num);
    for (i = 2; i <= sqrt; i++) {
        if (num % i == 0) {
            return false;
        }
    }return true;
}
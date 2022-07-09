// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Pass in a positive integer
// Return an array of numers/strings, with Fizz for 3s, Buzz for 5s, FizzBuzz for 15s
// 5 -> [1, 2, 'Fizz', 4, 'Buzz']

// Run a loop for input iterations, pushing a new element to an array according to modulus. 
// Instead of checking that a modulus equals 0, we can check if it's falsey

function fizzbuzz(n) {
    let arr = [];
    for (i = 1; i <= n; i++) {
        if (!(i % 15)) arr.push('FizzBuzz');
        else if (!(i % 5)) arr.push('Buzz');
        else if (!(i % 3)) arr.push('Fizz');
        else arr.push(i);
    }return arr;
};

// One liner using maps
// First map is changing each value to sequential by adding the index to 1 (not starting with 0)
// Second map is changing the multiples of 3 & 5 to add the FizzBuzz stuff

const fizzbuzz = n => Array(n).fill(1).map((e, i) => e+i).map(e => (e%3 ? '':'Fizz')+(e%5 ? '':'Buzz')||e);

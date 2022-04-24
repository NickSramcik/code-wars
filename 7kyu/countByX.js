// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }
    return z;
}

//Single Liner

//Makes an array by intializing an object with length n, then mapping an arrow function into it
//v is unused, it's undefined for every index since the object is never given any values

const countBy = (x, n) => Array.from({length: n}, (v, i) => (i + 1) * x)

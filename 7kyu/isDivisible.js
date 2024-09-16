// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

// Pass in any amount of numbers
// Return boolean

// Collect all arguments into an array
// Return boolean, whether first argument % every other argument is 0

function isDivisible() {
    const first = [...arguments][0];
    const divisors = [...arguments].slice(1);
    return divisors.every(divisor => first % divisor == 0);
}

// Refactored by rewriting function definition

function isDivisible(first, ...divisors) {
    return divisors.every(divisor => first % divisor == 0);
}

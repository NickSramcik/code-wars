// Write a function named numbers.

// function should return True if all parameters are of the Number type.

// The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

// Pass in any number of arguments, any type
// Return boolean

// Return whether all arguments are numbers

function numbers() {
    return [...arguments].every(arg => typeof arg == 'number');
}

// Refactored

const numbers = (...args) => args.every(arg => typeof arg == 'number');

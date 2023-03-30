// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// Pass in a string
// Return a string with capitalization standardized
// 'shrek' => 'Hello Shrek!'

// Lowercase the input string and uppercase the first letter
// Wrap with a template literal and return

var greet = function (name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

// Refactored into arrow function

const greet = name =>
    `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

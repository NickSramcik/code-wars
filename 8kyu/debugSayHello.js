// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// function sayHello(name) {
//     return 'Hello'
//   }

// Example output:

// Hello, Mr. Spock

// Pass in a string
// Return a personalized string, by concatenating 'Hello, ' and the input string
// 'Shrek' -> 'Hello, Shrek'

// Return 'Hello ' and the input

function sayHello(name) {
    return 'Hello, ' + name;
  }

// Refactored into arrow function

const sayHello = s => 'Hello, ' + s;

// Using template literal

const sayHello = s => `Hello, ${s}`;

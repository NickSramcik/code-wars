// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// Pass in a string
// Return a string, conditional
// 'john' -> Hello, John!

// Process input with standardized capitalization, or change it to World if empty
// Return 'Hello' + input

function hello(name) {
    let result = (!name) ? 'World' : name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${result}!`;
  }

// refactored into single line arrow function

const hello = name => `Hello, ${!name ? 'World' : name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


// Pass in two strings
// If input strings are equal, return personalized message. Otherwise, return guest message. 
// 'bob', 'bob' -> 'Hello boss'

// Check if inputs are equal and return accordingly

function greet (name, owner) {
    return name == owner ? 'Hello boss' : 'Hello guest';
  }

// Refactored into arrow function w/ template literal

const greet = (n, o) => `Hello ${n == o ? 'boss' : 'guest'}`;
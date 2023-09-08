// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// Pass in a string
// Return a string

// Split the string with ''
// Join the string with ' ' and return

function spacify(str) {
    return str.split('').join(' ');
}

// Refactored

const spacify = str => [...str].join(' ');

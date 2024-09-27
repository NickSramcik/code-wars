// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// Pass in a string
// Return a string

// Convert input string into an array of words
// Map the array & change each word into its own first letter
// Join array back into string (no separator) & return result

function makeString(str) {
    return str.split(' ').map(word => word.slice(0, 1)).join('');
}

// Refactored w/ reduce

const makeString = str => str.split(' ').reduce((acc, cur) => acc + cur[0], '');

// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two inputs are ASCII strings of equal length.

// Pass in 2 strings of equal length
// Return a number, how many characters of the strings are not equal
// 'ogres have layers', 'onion have layers' -> 4

// Store a counter
// Loop through a string and check the corresponding characters
// If they're not equal, increment counter
// Return counter

function hamming(a, b) {
    let ham = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) ham++;
    }

    return ham;
}

// Refactored using reduce

const hamming = (a, b) => [...a].reduce((a, c, i) => (c === b[i] ? a : ++a), 0);

// Using filter

const hamming = (a, b) => [...a].filter((n, i) => n != b[i]).length;

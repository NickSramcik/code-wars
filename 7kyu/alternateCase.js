// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// Pass in a string
// Return a string

// Write a function that returns if a letter is capital
// Loop through the input string
// If current letter is capital, make it lowercase
// Otherwise, capitalize it
// Return new string

function isCapital(s) {
    return s === s.toUpperCase();
}

function alternateCase(str) {
    const result = [];

    for (letter of str) {
        if (isCapital(letter)) result.push(letter.toLowerCase());
        else result.push(letter.toUpperCase());
    }

    return result.join('');
}

// One line solution just for fun
const alternateCase = s => [...s].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');

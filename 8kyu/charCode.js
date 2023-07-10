// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// Pass in a string, consisting of a single letter
// Return a string, containing the alphabetical order of the input
// 'b' -> 2

// Return teh character code of the input - 96
// character code of a = 97

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

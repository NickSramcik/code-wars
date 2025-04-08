// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

// Examples
// "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
// "h-o" ➞ "hijklmno"
// "Q-Z" ➞ "QRSTUVWXYZ"
// "J-J" ➞ "J"
// Notes
// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

// Pass in a string
// Return a string

// Store alphabet string
// let start be index of first input letter
// let end be index of second input letter + 1
// Slice correct alphabet string from start to end
// If input is uppercase, uppercase the output
// Return result

function gimmeTheLetters(range) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    const start = abc.indexOf(range[0].toLowerCase());
    const end = abc.indexOf(range[2].toLowerCase());
    const isUpperCase = range[0] === range[0].toUpperCase();
    let result = abc.slice(start, end + 1);
    return isUpperCase ? result.toUpperCase() : result;
}

// Refactored w/ character codes

function gimmeTheLetters(range) {
    const [start, end] = range.split('-').map(letter => letter.charCodeAt());
    let result = '';

    for (i = start; i <= end; i++) {
        result += String.fromCharCode(i);
    }

    return result;
}

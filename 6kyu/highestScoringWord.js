// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// Pass in a string of words
// Return the string with the highest score, which each letter scoring in ascending order alphabetically
// 'ogres are like onions' -> 'onions'

// Store the score of each letter in an object
// Split the string of words
// For each word, determine the word's score
// Determine which score is the highest, then return the word who's index matches that score

function high(x){
    const alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5, 
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    };
    let words = x.toLowerCase().split(' ');
    let scores = words.map(e => e.split('').reduce((a, c) => a + alphabet[c], 0))
    return words[scores.indexOf(Math.max(...scores))]
}


// Store the scores with the index of each letter of the alphabet in a string
// Create a function that calculates the score of a word by getting the index of each letter in abc string
// Sort the words by their scores and position 
// Take the last object, and return its word property

function high(str) {
    const abc = ' abcdefghijklmnopqrstuvwxyz';
    const Score = word => word.split('').reduce((a, c) => a + abc.indexOf(c), 0);
    return str.split(' ')
                .map((e, i) => ({ word: e, pos: i, score: Score(e) }))
                .sort((a, b) => a.score - b.score || b.pos - a.pos)
                .pop()
                .word;
}



// Store the scores of each word into an array by subtracting 96 from its character code
// Split original string into array of words, return index of that array which equals index of max score

function high(str) {
    let scores = str.split(' ').map(e => [...e].reduce((a, c) => a + c.charCodeAt(0)-96, 0));
    return str.split(' ')[scores.indexOf(Math.max(...scores))];
}
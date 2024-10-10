// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// Pass in a string
// Return boolean

// Lowercase the input string
// Map each character's number of occurences in the string
// Loop through items in the map
// If any value does not equal the first value, return false
// Return true after the loop

function validateWord(str) {
    const map = {};
    str = str.toLowerCase();

    for (char of str) {
        map[char] = map[char] + 1 || 1;
    }

    const charCounts = Object.values(map);
    return charCounts.every(count => count == charCounts[0]);
}

// Refactored using set size
// If every character appears in equal amounts, the input string length will be divisible by set size
// Broken by this edge case: 'aaaabb'

function validateWordNew(str, uncased = str.toLowerCase()) {
    return uncased.length % new Set(uncased).size == 0;
}

console.log(validateWordNew('aaaabb'))

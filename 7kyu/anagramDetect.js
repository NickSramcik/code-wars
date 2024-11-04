// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//Pass in two strings (ignore casing)
//Return boolean, whether the two strings are anagrams
//'bee' + 'Eeb' -> true

//Convert strings to lowercase arrays, sort them, stringify again, and return whether they are equal. 

var isAnagramold = function(test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    return test === original;
};

//Using two functions

const sortWord = str => str.toLowerCase().split('').sort().join('');
const isAnagramoldold = (t, o) => sortWord(t) == sortWord(o);

// Redux

// Case sensitive 
// Ignore spaces, only count letters

// Pass in 2 strings
// Return boolean

// Declare helper function that verifies if a character is a letter

// Let map1 and map2 be empty objects
// Filter both input strings to only letters, return false if their lengths are inequal
// Loop through each input string, using corresponding map to count letter occurences
// Loop through each map, compare the values in each, return false if we ever see an inequality
// Return true, because we've compared every map value, they're all equal

const isLetter = char => {
    const VALIDCHARS = 'abcdefghijklmnopqrstuvwxyz';
    return VALIDCHARS.includes(char.toLowerCase());
}

const filterLetters = str => str.split('').filter(char => isLetter(char)).join('');

var isAnagram = function(test, original) {
    const testMap = {};
    const originalMap = {};

    test = filterLetters(test);
    original = filterLetters(original);
    if (test.length !== original.length) return false;

    for (char of test) {
        testMap[char] = testMap[char] || 1;
    }

    for (char of original) {
        originalMap[char] = originalMap[char] || 1;
    }

    for (letter in testMap) {
        if (testMap[letter] !== originalMap[letter]) return false; 
    }

    return true;
};

// Test Cases
console.log(isAnagram("foefet", "toffee"), true)
console.log(isAnagram("Buckethead", "DeathCubeK"), false)
console.log(isAnagram("dormitory", "Dormitory"), false)
console.log(isAnagram("computer", " computer"), true)
console.log(isAnagram("abc", "abcd"), false)
console.log(isAnagram("abc", "abc "), true)

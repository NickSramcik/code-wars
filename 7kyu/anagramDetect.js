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

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('');
    original = original.toLowerCase().split('').sort().join('');
    return test === original;
};

//Using two functions

const sortWord = str => str.toLowerCase().split('').sort().join('');
const isAnagram = (t, o) => sortWord(t) == sortWord(o);
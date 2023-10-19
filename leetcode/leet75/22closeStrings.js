// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

// Return false if word lengths aren't equal
// Return true if words are the same

// Declare an array map for each input word, each storing how often each letter occurs 
// Loop through each word 
    // Increment each letter's position in respective array map
    
// Loop through both array maps
    // If either map has a letter not present in the other, return false

// Sort both array maps from big-small to organize how often each letter is occuring
// Loop through array maps again
    // If occurences are ever non-equal, return false

// All failure-checks have passed, return true

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    if (word1 == word2) return true;

    const abcMap1 = Array(26).fill(0),
          abcMap2 = Array(26).fill(0);
    
    for (i = 0; i < word1.length; i++) {
        const letter1 = word1.charCodeAt(i) - 97,
              letter2 = word2.charCodeAt(i) - 97;

        abcMap1[letter1] += 1;
        abcMap2[letter2] += 1;
    }

    for (i = 0; i < abcMap1.length; i++) {
        if (abcMap1[i] && !abcMap2[i]) return false;
        if (!abcMap1[i] && abcMap2[i]) return false;
    }

    abcMap1.sort((a, b) => b - a);
    abcMap2.sort((a, b) => b - a);

    for (i = 0; i < abcMap1.length; i++) {
        if (abcMap1[i] !== abcMap2[i]) return false;
    }

    return true;
};

// Test Cases

console.log(closeStrings('abc', 'bca'), '->', true)
console.log(closeStrings('a', 'aa'), '->', false)
console.log(closeStrings('cabbba', 'abbccc'), '->', true)


// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // Store an empty result string
    let result = '';
    // Loop from 0 to the longest word length
    for (i = 0; i < word1.length || i < word2.length; i++) {
        // console.log(`Index=${i}, letter1=${word1[i]}, letter2=${word2[i]}, result=${result}`)
        // Add curent index's letter from word1 to result, then do the same for word 2 (add empty string if letter is undefined)
        result += word1[i] || '';
        result += word2[i] || '';
    }
    // Return result string
    return result;
};

// Refactored using a result array
// This is apparently supposed to be faster due to Javascript's garbage collection quirks w/ string concatenation
// But the difference was negligible on leetcode. Previous solution was actually faster (margin of error) 

var mergeAlternately = function(word1, word2) {
    let result = [];

    for (i = 0; i < word1.length || i < word2.length; i++) {
        result.push(word1[i] || '');
        result.push(word2[i] || '');
    }
    
    return result.join('');
};

// Test cases

console.log(mergeAlternately('abc', 'pqr'), '->', 'apbqcr')
console.log(mergeAlternately('ab', 'pqrs'), '->', 'apbqrs')
console.log(mergeAlternately('abcd', 'pq'), '->', 'apbqcd')

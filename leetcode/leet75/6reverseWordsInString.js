// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    // Split input string into an array of words, filter out empty words
    const words = str.split(' ').filter(Boolean);
    // Reverse the array, join it into a string, and return
    return words.reverse().join(' ');
};

// Refactored into one line for fun

const reverseWords = string => string.split(' ').filter(Boolean).reverse().join(' ');

// Refactored for efficiency 

// Trim the input and split it into an array of words
// Store an empty result string
// Loop through the words backwards, not including the first word
    // If current word is valid, append it to result string with a space
// Add first word to result string without a trailing space
// Return result string

var reverseWords = function(str) {
    const words = str.trim().split(' ');
    let result = '';
    
    for (i = words.length - 1; i > 0; i--) {
        if (words[i]) result += words[i] + ' ';
    }

    result += words[0];
    return result;
};

// Test Cases
console.log(reverseWords('the sky is blue'), '->', 'blue is sky the');
console.log(reverseWords('  hello world  '), '->', 'world hello');
console.log(reverseWords('a good   example'), '->', 'example good a');

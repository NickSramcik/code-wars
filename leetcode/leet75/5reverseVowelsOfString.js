// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.
// Accepted
// 628.1K
// Submissions
// 1.2M

// Create separate function that returns boolean, checks if input letter string is a vowel

// Filter vowels out of input string, store as an array of letters
// Loop through input string
    // If current letter is a vowel, replace it with next vowel in queue (last letter in vowels array)
// Return result

/**
 * @param {string} s
 * @return {string}
 */
var isVowel = function(letter) {
    const VOWELS = 'aeiou';
    return VOWELS.includes(letter.toLowerCase());
}

var reverseVowels = function(str) {
    const vowels = [...str].filter(letter => isVowel(letter))
    return [...str].map(letter => isVowel(letter) ? vowels.pop() : letter).join('');
};

// Test Cases

console.log(reverseVowels('hello'), '->', 'holle');
console.log(reverseVowels('leetcode'), '->', 'leotcede');
console.log(reverseVowels('shrek is king'), '->', 'shrik is keng');

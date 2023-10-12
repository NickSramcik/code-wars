// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

//----

// Store a function that returns boolean, whether a letter is a vowel
// Store 2 pointers, left at 0, right at k - 1
// Store a current vowel count and a max vowel count
// Set initial vowel count value to vowels from 0 to k
// Loop through the input string, while right < str.length
    // Store last and next values of the string
    // If last value is a vowel, decrement vowel count
    // Advance left pointer
    // If next value is a vowel, increment vowel count
    // Advance right pointer
    // Set maxVowel count to max of current vowel count, and max vowel count
// Return max vowel count

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var isVowel = function(letter) {
    const VOWELS = 'aeiou';
    return VOWELS.includes(letter);
}

var maxVowels = function(str, k) {
    let left = 0,
        right = k - 1,
        firstSubstr = str.slice(0, k).split(''),
        currentVowels = firstSubstr.reduce((acc, cur) => isVowel(cur) ? acc + 1 : acc, 0),
        maxVowels = currentVowels;

    while (right < str.length - 1) {
        const lastLetter = str[left],
              nextLetter = str[right + 1];

        if (isVowel(lastLetter)) {
            currentVowels -= 1;
        }

        if (isVowel(nextLetter)) {
            currentVowels += 1;
        }

        left += 1;
        right += 1;
        maxVowels = Math.max(currentVowels, maxVowels);
    }

    return maxVowels;
};

// Test Cases

console.log(maxVowels('abciiidef', 3), '->', 3);
console.log(maxVowels('aeiou', 2), '->', 2);
console.log(maxVowels('leetcode', 3), '->', 2);
console.log(maxVowels('ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33), '->', 7);

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// Declare a stack
// Loop through the input string
    // If current char isn't ], push it to stack
    // If current char is ], pop stack characters until [ is found
        // Store the characters that are popped into placeholder string
        // Pop numbers that are found and store those as n
        // Repeat the placeholder n times and push that to stack
// Join stack into string and return it

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(str) {
    const stack = [];

    for (char of str) {
        if (char !== ']') stack.push(char);

        else {
            let placeholder = '';
            while (true) {
                const popped = stack.pop();
                if (popped == '[') break;
                placeholder = popped + placeholder;
            }

            let n = '';
            while (Number.isInteger( +stack[stack.length - 1] )) {
                const poppedNum = stack.pop();
                n = poppedNum + n;
            }

            stack.push(placeholder.repeat(+n));
        }
    }

    return stack.join('');
};

// Test Cases
console.log(decodeString('3[a]2[bc]'), '->', 'aaabcbc')
console.log(decodeString('3[a2[c]]'), '->', 'accaccacc');
console.log(decodeString('2[abc]3[cd]ef'), '->', 'abcabccdcdcdef');

if (decodeString('3[a]2[bc]') == 'aaabcbc' &&
    decodeString('3[a2[c]]') == 'accaccacc' &&
    decodeString('2[abc]3[cd]ef') == 'abcabccdcdcdef') {
        console.log('All Tests Passed!')
    };

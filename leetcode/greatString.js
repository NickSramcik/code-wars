// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

// Example 1:

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

// Input: s = "s"
// Output: "s"

// Constraints:

// 1 <= s.length <= 100
// s contains only lower and upper case English letters.

// Write checker function w/ 2 inputs, a & b that:
//      return true if a & b aren't the same letter
//      return false if a & b are the same letter with alternate casing
// Convert input into result array
// Declare left and right pointer, left = 0, right = 1
// Loop through the result until right pointer is outside the array
//      If left & right are good, increment both pointers
//      If left & right are bad, change both to '', join and split result array, reset both pointers
// Return result array converted to a string

/**
 * @param {string} s
 * @return {string}
 */
var isGood = function(a, b) {
    if (a !== b && (a.toLowerCase() == b || a == b.toLowerCase())) return false;
    return true;
}

var makeGood = function(s) {
    let result = s.split(''),
        left = 0,
        right = 1;

    while (right < result.length) {
        if (isGood(result[left], result[right])) {
            left++;
            right++
        }
        else {
            result[left] = '';
            result[right] = '';
            result = result.join('').split('');
            left = 0;
            right = 1;
        }
    }

    return result.join('');
};

// Refactored with a stack

/**
 * @param {string} s
 * @return {string}
 */

function isBad(a, b) {
    return Math.abs(a.charCodeAt() - b.charCodeAt()) == 32;
}

function makeGood(str) {
    const stack = [];

    for (char of str) {
        if (stack.length && isBad(char, stack[stack.length - 1])) {
            stack.pop();
        }
        else stack.push(char);
    }

    return stack.join('');
}



// Test Cases
console.log(isGood('a', 'A'), false)
console.log(isGood('A', 'a'), false)
console.log(isGood('A', 'A'), true)
console.log(isGood('a', 'a'), true)
console.log(isGood('A', 'b'), true)

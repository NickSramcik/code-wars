// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:

// Input: s = "()(())((()()))"

// Output: 3

// Constraints:

// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

// Store a stack and a maxDepth
// Loop through the input string
//     if current char is (, push it to stack
//     if current char is ), pop the stack
//     if stack length > maxDepth, set maxDepth to stack length
// Return maxDepth

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(str) {
    const stack = [];
    let maxDepth = 0;

    for (char of str) {
        if (char == '(') stack.push(char);
        if (char == ')') stack.pop();
        if (stack.length > maxDepth) maxDepth = stack.length;
    }

    return maxDepth;
};

// Refactored without stacks

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(str) {
    let [depth, maxDepth] = [0, 0];

    for (char of str) {
        if (char == '(') depth++;
        if (char == ')') depth--;
        if (depth > maxDepth) maxDepth = depth;
    }

    return maxDepth;
};

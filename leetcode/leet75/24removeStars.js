// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.

// Example 1:

// Input: s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".
// Example 2:

// Input: s = "erase*****"
// Output: ""
// Explanation: The entire string is removed, so we return an empty string.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters and stars *.
// The operation above can be performed on s.

// Store an empty result array
// Store a star count
// Loop through input string backwards
    // If stars < 1 and current char is not a star, add it to result
    // If stars > 0 and current char is not a star, decrement star count
    // If current char is a star, increment star count
// Reverse result array, join into string and return

/**
 * @param {string} s
 * @return {string}
 */
var removeStarsOld = function(str) {
    let stars = 0,
        result = [];

    for (i = str.length - 1; i >= 0; i--) {
        const currentChar = str[i];

        if (currentChar == '*') stars++;
        else if (stars < 1) result.push(currentChar); 
        else stars--;
    }

    return result.reverse().join('');
};

// Refactored to avoid reversing

var removeStars = function(str) {
    let stars = 0,
        result = '';

    for (i = str.length - 1; i >= 0; i--) {
        const currentChar = str[i];

        if (currentChar == '*') stars++;
        else if (stars > 0) stars--;
        else result = currentChar + result; 
    }

    return result;
};

// Refactored with stack method

var removeStarsStack = function(str) {
    const stack = [];

    for (char of str) {
        if (char == '*' && stack.length) stack.pop();
        else stack.push(char);
    }

    return stack.join('');
}

// Test Cases

console.log(removeStars('leet**cod*e'), '->', 'lecoe');
console.log(removeStars('erase*****'), '->', '');

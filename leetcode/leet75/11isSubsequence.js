// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isWholeSubsequence = function(sub, target) {
    // Store 2 pointers, subPointer and targetPointer
    let subPointer = 0,
        targetPointer = 0;
    // Loop through the target string, while targetPointer < target length - 1
    while (targetPointer < target.length - 1) {
        // While current target character = current sub character:
        while(sub[subPointer] == target[targetPointer]) {
            // If subPointer = sub.length - 1, we found the entire substring! Return true
            if (subPointer == sub.length - 1) return true;
            // Increment both pointers
            subPointer++;
            targetPointer++;
        }
        // Current characters are no longer equal, reset subPointer and increment targetPointer
        subPointer = 0;
        targetPointer++
    }
    // We've looped through the entire target string and no substring was found, return false
    return false
};

// Oops! ^That checks if the substring is found without interruptions, let's try again so that we don't care about interruptions

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(sub, target) {
    // Return true if sub input is empty
    if (!sub) return true;
    // Store 2 pointers, subPointer and targetPointer
    let subPointer = 0,
        targetPointer = 0;
    // Loop through the target string, while targetPointer < target length - 1
    while (targetPointer < target.length) {
        // If current target character = current sub character, increment both pointers. Otherwise, increment targetPointer
        if (sub[subPointer] == target[targetPointer]) {
            subPointer++;
            targetPointer++;
            // If subPointer = sub.length, we found the entire substring! Return true. 
            if (subPointer == sub.length) return true;
        }
        else targetPointer++;
    }
    // We looped through the entire target string without finding the entire substring, return false
    return false;
};

// Test Cases

console.log(`${isSubsequence('abc','ahbgdc')} -> true`)
console.log(`${isSubsequence('bb','ahbgdc')} -> false`)
console.log(`${isSubsequence('axc','ahbgdc')} -> false`)
console.log(`${isSubsequence('','ahbgdc')} -> true`)
console.log(`${isSubsequence('shrek','my main man is shrek')} -> true`)

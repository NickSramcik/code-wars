// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// Pass in a string of letters
// Return a number, length of longest substring that is the same in reverse

// Reverse loop starting with string length. Slice smaller sections until a palindrome is found. 
// Store that string and return its length


const isPalindrome = str => str === [...str].reverse().join('');

function longestPalindrome(s) {
    let longest = 0,
        length = s.length;
    
    for (i = 0; i < length; i++) {
        for (j = i + 1; j <= length; j++) {
            let str = s.slice(i, j),
                l = str.length;
            
            if (isPalindrome(str) && l > longest) {
                longest = l;
            };
        };
    };
    
    return longest;
}
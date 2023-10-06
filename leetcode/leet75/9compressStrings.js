// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // Store empty result string, empty last value, empty current value, empty count value
    let result = '',
        count = 1;
    // Loop through input array
    for (i = 0; i <= chars.length; i++) {
        // Store current and previous values
        const current = chars[i],
              previous = chars[i - 1];
        // If current == previous, increment count
        if (current == previous) count++;
        // Otherwise if a last value exists, append previous to result, and append count if > 1
        else if (previous) {
            result += previous
            if (count > 1) result += count;
            count = 1;
        }
    }
    // Change input array to split result string
    chars.forEach((_, i) => chars[i] = result[i])
    // Return result string length
    return result.length
};

// Refactored to avoid second loop
// Use 2 pointers, i and j
// Loop throuch chars with a while loop & j pointer
// Set a count, and while current value = char[j], increment count and j
// Set chars[i] to current value, and increment i
// If count > 1, add the count and increment 1
// Account for count > 10 by changing count to a string, loop through it, and increment i as we mutate the input array like before
// Return i, cuz that'll end as the length


var compress = function(chars) {
    let i = 0,
        j = 0;

    while (j < chars.length) {
        let count = 0;
        const current = chars[j];

        while (j < chars.length && current == chars[j]) {
            count++;
            j++;
        }

        chars[i++] = current;
        if (count > 1) {
            for (digit of String(count)) {
                chars[i++] = digit;
            }
        }
    }

    return i;
}

// Test cases
console.log(compress(["a","a","b","b","c","c","c"]), '->', 6)
console.log(compress(["a"]), '->', 1)
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), '->', 4)

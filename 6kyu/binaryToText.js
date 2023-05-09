// Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

// Each 8 bits on the binary string represent 1 character on the ASCII table.

// The input string will always be a valid binary string.

// Characters can be in the range from "00000000" to "11111111" (inclusive)

// Note: In the case of an empty binary string your function should return an empty string.

// Pass in a string of 1s and 0s
// Return a string of text
// '01100001' -> 'a'

// Store an empty array and store an empty string
// Loop through the string, pushing every 8 characters to the array using stored string as placeholder
// Map that array, parsing the binary int into a character code, then converting to string
// Join back into string and return

function binaryToString(binary) {
    let arr = [],
        letter = '';

    for (num of binary) {
        letter += num;
        if (letter.length == 8) {
            arr.push(letter);
            letter = '';
        }
    }

    return arr.map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
}

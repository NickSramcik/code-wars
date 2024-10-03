// Split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

// Pass in a string and a number
// Return a string

// Let result be empty string
// Let count be 0
// Loop through letters of input string
//   Concat letter to result string
//   Increment count
//   If count equals partLength, concat a space to result string and reset count to 0
// Return result (trimmed to remove extra spaces)

var splitInParts = function (str, partLength) {
    let result = '';
    let count = 0;

    for (letter of str) {
        result += letter;
        count++;

        if (count == partLength) {
            result += ' ';
            count = 0;
        }
    }

    return result.trim();
};

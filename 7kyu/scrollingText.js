// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// Pass in a string
// Return an array

// Array length must equal input string (text) length
// Let result be an empty array
// Make text uppercase
// While result length < text length:
//      Push text to result
//      Slice the first letter of text and add it to end
// Return result

function scrollingText(text) {
    const result = [];
    text = text.toUpperCase();

    while (result.length < text.length) {
        result.push(text);
        text = text.slice(1) + text.slice(0, 1);
    }

    return result;
}

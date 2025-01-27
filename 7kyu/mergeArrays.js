// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// Pass in 2 arrays
// Return 1 array

// Let maxLength be a's length or b's length, whichever is larger
// Let result be an empty array
// Loop from 0 to maxLength
//    Push a[i] to result if it exists
//    Push b[i] tp result if it exists

function mergeArrays(a, b) {
    const result = [];
    const maxLength = Math.max(a.length, b.length);

    for (i = 0; i < maxLength; i++) {
        if (a[i]) result.push(a[i]);
        if (b[i]) result.push(b[i]);
    }

    return result;
}

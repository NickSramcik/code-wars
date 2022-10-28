// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


// Pass in an array of consecutive letters (always consecutive, only 1 letter missing, length > 2, no funny biz)
// Return the letter that is missing (string)
// ['a','b','c','d','f'] -> 'e'

// Loop through the array, looking to find a character who's unicode isn't the last element's +1
// When aformentioned test fails, return the character of that unicode value

function findMissingLetter(arr) {
  // Start loop at index 1, because there is no element before index 0
    for (i = 1; i < arr.length; i++) {
        // Store character codes at current and previous index
        const current = arr[i].charCodeAt(0),
              previous = arr[i - 1].charCodeAt(0);
        // Check if current code is 1 more than previous code
        if (current !== previous + 1) {
            // If it isn't, return character of unicode that should exist
            return String.fromCharCode(previous + 1);
        };
    };
}

// Refactored into arrow function
// .charCodeAt() with no arguments is the same as .charCodeAt(0)

const findMissingLetter = arr => 
    String.fromCharCode((arr.find((e, i) => e.charCodeAt() + 1 != arr[++i].charCodeAt())).charCodeAt() + 1);

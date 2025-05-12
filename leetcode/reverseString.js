// Write a function that reverse a string input, do not use reverse method
// reverseString('shrek') -> 'kerhs'

// Pass in a string
// Return a string

// Let result be an empty string
// Let letters be an array of letters from input string
// Loop through input string backwards
//   Add each current character to result
// Return result

function reverseString(str) {
    let result = '';
    let letters = str.split('');

    for (i = letters.length - 1; i >= 0; i--) {
        const currentLetter = letters[i];
        result += currentLetter;
    }

    return result;
}

// One liner for fun

const reverseStr = str => [...str].reduceRight((acc, cur) => acc + cur, '');

// Test Cases

console.log(reverseStr('shrek'), 'kerhs');

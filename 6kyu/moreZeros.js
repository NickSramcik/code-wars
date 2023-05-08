// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False
                   
//         --> ['a','b','d']
    
// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

// Pass in a string of letters
// Return an array of strings, the characters which have binary numbers with majority 0s
// 'abcde' -> ['a','b','d']

// Store a result array
// Loop through letters of string
// If result array doesn't include character, and its binary value is mostly 0s, add it to array
// Return result array

function checkZeros(string) {
    let binary = string.charCodeAt(0).toString(2).split('');
    return binary.reduce((a, c) => c == 0 ? ++a : a, 0) > binary.length / 2;
}

function moreZeros(string) {
    const result = [];

    for (letter of string) {
        if (checkZeros(letter) && !result.includes(letter)) {
            result.push(letter);
        }
    }
    
    return result; 
}

// Refactored to create a set to remove duplicate values and filtering values that meet conditions

const moreZeros = s => [...new Set(s)].filter(e => [...e.charCodeAt(0).toString(2)].filter(x => x == 0).length > 3);

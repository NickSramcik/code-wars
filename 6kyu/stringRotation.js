// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

// Pass in 2 strings
// Return a number, how many times 1st string must shift forward to equal 2nd string
// "eecoff", "coffee" => 4

// Store a counter value
// Run a while loop, while the two strings are unqeual:
//  if counter = 1st string.length return -1
//  Drop last letter of string and add it to front
//  Incremend counter
// Return the counter after the while loop

function shiftedDiff(first, second) {
    let rotations = 0;
    while (first != second) {
        if (rotations == first.length) return -1;
        first = first.slice(-1) + first.slice(0, -1);
        rotations++;
    }
    return rotations;
}

// Refactored by repeating the second string and returning first index of the first string within that

function shiftedDiff(first, second) {
    if (first.length != second.length) return -1;
    return (second + second).indexOf(first);
}

// Refactored into arrow function using ternary

const shiftedDiff = (first, second) => first.length == second.length ? (second + second).indexOf(first) : -1;

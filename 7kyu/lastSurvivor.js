// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// Pass in a string and an array
// Return a string

// Loop through the array
// For each element in array, set input string to itself sliced from 0 to e, e + 1 to length - 1
// Return string

function lastSurvivor(letters, coords) {
    for (num of coords) {
        letters = letters.slice(0, num) + letters.slice(num + 1, letters.length);
    }
    return letters;
}

// Refactored using splice

function lastSurvivor(letters, coords) {
    letters = letters.split('');
    for (i of coords) letters.splice(i, 1);
    return letters[0];
}

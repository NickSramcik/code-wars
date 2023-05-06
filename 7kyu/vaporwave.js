// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Pass in a string
// Return a string, V  A  P  O  R  W  A  V  E  D
// 'shrek' -> 'S  H  R  E  K'

// Set the string to uppercase
// Split the string into array of letters
// Join the string with two space separator and return

function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ');
}

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// Pass in a string
// Return an array or string

// If input length < 2 or > 100 return 'invalid string'
// Split input string into an array of characters
// Filter array for characters at odd indices (prompt starts index at 1)
// Return resulting array

function evenChars(string) {
    if (string.length < 2 || string.length > 100) return 'invalid string';
    return string.split('').filter((_, i) => i % 2 !== 0);
}

// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


// Pass in 2 strings
// Return boolean, whether the sum of each string's character codes are equal or not (treat as uppercase)
// If a string has non-letters, treat it as empty
// 'shrek', 'SHREK', -> true

// Uppercase both strings, split into arrays, and reduce their character codes. Then compare

function compare(s1, s2) {
    s1 = s1 || '';
    s2 = s2 || '';
    s1.split('').forEach(e => {
        if (e.toUpperCase() === e.toLowerCase()) s1 = '';
    });
    s2.split('').forEach(e => {
        if (e.toUpperCase() === e.toLowerCase()) s2 = '';
    });
    s1 = s1.toUpperCase().split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    s2 = s2.toUpperCase().split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return s1 === s2;
}

// Using 2 functions and the string.match() method

const sc = s => !s || s.match(/[^A-Za-z]/) ? 0 : s.toUpperCase().split('').reduce((a, c) => a + c.charCodeAt(0), 0);
const compare = (s1, s2) => sc(s1) === sc(s2);

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?"
// "No?" --> "No?"

// Pass in a string
// Return a string

// If last char is ?, return input
// Otherwise return input + '?'

function ensureQuestion(s) {
    if (s[s.length - 1] == '?') return s;
    return s + '?';
}

// Refactored with endsWith

const ensureQuestion = s => s.endsWith('?') ? s : s + '?';

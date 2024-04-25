// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// Pass in two strings
// Return a string

// If a.length < b.length, reverse b and concat a + b + a
// Otherwise, reverse a and concat b + a + b
// Return result

function shorterReverseLongerOld(a, b) {
    if (a.length < b.length) return a + b.split('').reverse('').join('') + a;
    return b + a.split('').reverse('').join('') + b;
}

// Refactored

const revStr = str => str.split('').reverse().join('');
function shorterReverseLonger(a, b) {
    if (a.length < b.length) return a + revStr(b) + a;
    return b + revStr(a) + b;
}

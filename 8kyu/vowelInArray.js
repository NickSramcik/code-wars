// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// Pass in an array of numbers
// Return an array of numbers and strings, vowel codes converting to string
// [101,121,110,113,113,103,121,121,101,107,103] -> "e",121,110,113,113,103,121,121,"e",107,103]

// Map the array, converting character codes to their letter, and return
// a = 97, e = 101, i = 105, o = 111, u = 117

function isVow(a) {
    return a.map(num => {
        if (num == 97) return 'a';
        if (num == 101) return 'e';
        if (num == 105) return 'i';
        if (num == 111) return 'o';
        if (num == 117) return 'u';
        return num;
    });
}

// Refactored using a premade map

function isVow(arr) {
    const vowels = {'97': 'a', '101': 'e', '105': 'i', '111': 'o', '117': 'u'};
    return arr.map(num => vowels[num] || num);
}

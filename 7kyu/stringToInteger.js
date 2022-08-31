// JavaScript provides a built-in parseInt method.

// It can be used like this:

// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

// You are asked to write a myParseInt method with the following rules:

// It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10

// Pass in a string
// Convert string to integer. If input is not an integer, return NaN
// '    16' -> 16    '16.5' -> NaN

// Check if string contains a decimal, if so, return NaN, otherwise, return string converted to number. 

function myParseInt(str) {
    if (str.indexOf('.') != -1) return NaN;
    return Number(str);
  }

// One line using ternary
// Also checks for x to handle the '0x10' edge case

const myParseInt = str => str.includes('.') || str.includes('x') ? NaN : Number(str);

// You can also handle edge cases by trimming and adding a period to the end
// I think this is because it assumes a period with no leading digits equals decimal zero (50. = 50.0) 
// If it already has a decimal or an x, it will now read as NaN when converted to a number

const myParseInt = str => Number(str.trim() + '.');

// Shorter just for fun

const myParseInt = s => +(s.trim() + '');

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// Pass in as string ('50 years old')
// Return just the number in that string (50)
// '50 years old' -> '50'
// Split the string into words, return the first one converted to number

function getAge(str){
    return Number(str.split(' ')[0]);
}

// Refactored into arrow function

const getAge = s => +s.split(' ')[0];

// Using parseInt

const getAge = s => parseInt(s);
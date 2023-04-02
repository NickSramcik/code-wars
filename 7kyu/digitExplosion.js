// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

// Pass in a string number
// Return a string number, with each digit repeating as many times as its value
// '123' -> '122333'

// Convert string into an array of numbers
// Map the array, repeating each digit as many times as its number
// Convert back to string and return

function explode(string) {
    return string
        .split('')
        .map(digit => digit.repeat(Number(digit)))
        .join('');
}

// Refactored into arrow function

const explode = s => [...s].map(e => e.repeat(+e)).join('');

// Complete the function which converts hex number (given as a string) to a decimal number.

// Pass in a string, a number in hex format
// Return a number, the string converted to decimal format
// ''FF' -> 255

// Use parseInt() to convert the string and return

function hexToDec(hexString){
    return parseInt(hexString, 16);
  }

// Refactored into arrow function

const hexToDec = hexString => parseInt(hexString, 16);
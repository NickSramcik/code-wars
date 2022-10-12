// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// Pass in a positive integer, no letters, no special chars, not empty, no funny biz, not > 5 digits
// Return a string, including a number with padded zeroes for a total of 5 digits
// solution(2121) -> 'Value is 02121'
// solution(30) -> 'Value is 00030'
// solution(50000) -> 'Value is 50000' 

function solution(value) {
    // Convert value to string, pad the start with 0 to a target length of 5
    value = value.toString().padStart(5, '0');
    // Concatenate that new value to string, 'Value is ' and return
    return `Value is ${value}`;
  }

// Refactored into arrow function

const solution = n => 'Value is ' + (n+'').padStart(5, '0');
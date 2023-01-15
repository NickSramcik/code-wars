// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Pass in a positive integer n
// Return a number -> n converted to binary
// 5 -> 101

// Use string method to convert to binary string, then convert back to number & return

function toBinary(n){
    return Number(n.toString(2));
  }

// Refactored into arrow function

const toBinary = n => +n.toString(2);
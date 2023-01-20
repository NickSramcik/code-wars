// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Pass in 3 positive integers, hours minutes & seconds
// Return a number representing the inputs combined, in milliseconds

// multiply h by 3600, m by 60, add all up, then multiply by 1000 & return

function past(h, m, s){
    return (3600 * h + 60 * m + s) * 1000;
  }
  
// Refactored into arrow function 

const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);
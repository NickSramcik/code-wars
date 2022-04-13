// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// Pass in a positive integer
// Return a sum from 1 to the input

// For example:

// summation(2) -> 3
// 1 + 2

// Loop to the input and add 1 each iteration

const summation = function (num) {
    let sum = 0
    for (let i = 1; i <= num ; i++) {
        sum += i  
    }
    return sum
  }


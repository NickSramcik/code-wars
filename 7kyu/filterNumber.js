// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// Pass in a string of numbers and letters (nonempty)
// Return the string with only numbers (in number form)
// 'Shrek1 is2 king3' -> '123'

// Split string into array, filter elements that are equal to number self, stringify and return

var filterString = function(value) {
    return Number(value.split('').filter(e => e == Number(e)).join(''));
  }

// Refactored into arrow function

const filterString = v => +[...v].filter(e => e == +e).join('');

// Using isNaN

const filterString = v => +[...v].filter(e => !isNaN(e)).join('');
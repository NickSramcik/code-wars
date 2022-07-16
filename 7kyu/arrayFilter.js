// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


// Pass in an array of numbers
// Return a filtered array of the even inputs
// [1, 2, 3, 4, 5] -> [2, 4]

// Filter the input for values that are divisible by 2

function getEvenNumbers(numbersArray){
    return numbersArray.filter(e => e % 2 === 0);
  }

// One liner

const getEvenNumbers = arr => arr.filter(e => !(e%2));
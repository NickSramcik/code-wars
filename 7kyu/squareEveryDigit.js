// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//Prep

//Pass in a number, each digit is squared and concatenated, then returned as a number
//squareDigits(23) = 49


//Convert number to string and split into an array
//Loop through the array and reduce to a concatenation of each element's square
//Return as an integer

function squareDigits(num){
    let res = num.toString().split('').reduce((acc, cur) => acc + String(cur*cur), '')
    return Number(res)
  }

// One liner
// +variable is the same as Number(variable)

const squareDigits = num => +num.toString().split('').reduce((a, c) => a + c*c, '');

//You cannot .split() a number
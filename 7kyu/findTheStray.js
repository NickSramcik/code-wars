// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//PREP

//Pass in an array of numbers
//Return the lone number that is not like the others
// [1, 1, 1, 1, 69, 1] -> 69

//Sort the array. Check if slots 0 and 1 are the same. Return slot 0 if they aren't, otherwise return the last number


function stray(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    if (numbers[0] !== numbers [1]) return numbers[0];
    else return numbers[numbers.length - 1];
  }

//Using the XOR operator, since a number ^ itself is 0

const stray = nums => nums.reduce((acc, cur) => acc ^ cur);
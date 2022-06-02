// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//PREP

//Pass in an array of positive integers
//Return a number, the sum of the two smallest integers
//[1, 2, 50, 100, 420] -> [3]

//Sort the array from smallest to largest, sum the first two indices and return

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a, b) => a - b);
    return sorted[0] + sorted[1];
  }

//You don't need to declare a new array, sort can alter the original array automatically

function sumTwoSmallestNumbers(nums) {  
    nums.sort((a, b) => a - b);
    return nums[0] + nums[1];
  }

// Using slice and reduce

const sumTwoSmallestNumbers = nums => nums.sort((a, b) => a - b).slice(0, 2).reduce((acc, cur) => acc + cur);
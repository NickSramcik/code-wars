// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// Pass in an array of numbers, and a divisor, n
// return an array of numbers that are divisible by n 
// [2, 4, 5, 6, 10, 11], 5 -> [5, 10] 

// Return a filter of the input array where n % x = 0 

function divisibleBy(numbers, divisor){
    return numbers.filter(number => number % divisor == 0);
}

// Refactored into arrow function

const divisibleBy = (nums, divisor) => nums.filter(num => num % divisor == 0);
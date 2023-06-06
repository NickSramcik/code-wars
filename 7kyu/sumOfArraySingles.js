// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// Pass in an array of integers
// Return an integer, the sum of the two values that appear only once
// [4,5,7,5,4,8] -> 7 + 8 = 15

// Loop through the input array and build a map of values, counting occurences 
// Sum the two properties of the hash map whos value is 1 and return the result

function repeats(arr){
    const nums = {};
    let result = 0;

    for (number of arr) {
        nums[number] = nums[number] + 1 || 1;
    }

    for (number in nums) {
        if (nums[number] == 1) result += +number;
    }

    return result;
};

// Refactored using arrow function, filter the array for nums whos first index is also last index of that num and reduce it
// This solution is less efficient because it loops through the array twice for each value

const repeats = arr => arr.filter(n => arr.indexOf(n) == arr.lastIndexOf(n)).reduce((a, c) => a + c, 0);

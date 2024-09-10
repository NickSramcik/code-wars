// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// Pass in an array of numbers, length = 100
// Return a number

// Sort the input array
// Loop through the sorted array
// If current number is not previous number + 1, return current - 1

function missingNo(nums) {
    nums = nums.sort((a, b) => a - b);

    for (i = 1; i < nums.length; i++) {
        const current = nums[i];
        const prev = nums[i - 1];

        if (current != prev + 1) return current - 1;
    }
}

// ^ Bottlenecked by sorting method which has time complexity of O(n * log(n))

// Refactored for better time complexity:
// 0 + 1 + 2 + 3 .... + 100 = 5050
// Get the sum of the input array, the difference between that sum and 5050 is the missing number

function missingNo(nums) {
    const sum = nums.reduce((a, c) => a + c, 0);
    return 5050 - sum;
}

// ^ Time complexity of O(n) because we loop through the input array once to get the sum

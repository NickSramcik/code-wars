// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // Store a left and right pointer
    let left = 0,
        right = 0;
    // Loop through input array, while right < nums.length
    while (right < nums.length) {
        // If value @ right is 0, decrease k by 1. This is a 0 we need to flip.
        if (nums[right] == 0) k -= 1;
        // If k is negative, we've run out of 0s to flip! 
        if (k < 0) {
            // If left value is 0, increment k, we don't need to flip this 0 anymore.
            if (nums[left] == 0) k += 1;
            // Advance the left pointer
            left += 1;
        }
        // Advance the right pointer
        right += 1;
    }
    // Return the difference between the 2 pointers, giving us max sequence length
    return right - left;
};

// Refactored

var longestOnes = function(nums, k) {
    let left = 0,
        right = 0;

    while (right < nums.length) {
        if (nums[right] == 0) k -= 1;
        if (k < 0) {
            if (nums[left] == 0) k += 1;
            left += 1;
        }
        right += 1;
    }

    return right - left;
};

// Test Cases

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2), '->', 6);
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3), '->', 10);

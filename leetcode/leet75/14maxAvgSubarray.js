// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // Store two pointers: left at 0, right at k - 1. Store a max avg, and store an initial avg from left to right
    let left = 0,
        right = k - 1,
        avg = nums.slice(0, k).reduce((a, c) => a + c, 0) / k;
        maxAvg = avg; 
    // While right < nums.length - 1, loop through the input array
    while (right < nums.length) {
        // Subtract nums[left] / k from avg
        avg -= nums[left] / k;
        // Increment both pointers
        left++;
        right++;
        // Add nums[right] / k to avg
        avg += nums[right] / k;
        // If avg > maxAvg, set maxAvg to avg
        if (avg > maxAvg) maxAvg = avg;
    }
    // Return maxAvg
    return maxAvg;
};

// Refactored

var findMaxAverage = function(nums, k) {
    let left = 0,
        right = k - 1,
        avg = nums.slice(0, k).reduce((a, c) => a + c, 0) / k;
        maxAvg = avg; 

    while (right < nums.length) {
        const lastNum = nums[left++] / k,
              nextNum = nums[++right] / k;
              
        avg -= lastNum;
        avg += nextNum;
        if (avg > maxAvg) maxAvg = avg;
    }
    return maxAvg;
};

// Test Cases

console.log(findMaxAverage([1,12,-5,-6,50,3], 4), '->', 12.75000)
console.log(findMaxAverage([5], 1), '->', 5)

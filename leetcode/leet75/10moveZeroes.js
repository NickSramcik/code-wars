// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// [0, 1, 0, 3, 12]
// [1, 0, 3, 12, 0]
// [1, 3, 12, 0, 0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let [low, high] = [0, 1];
    // Loop through the input array, as long as high < length - 1
    while (high <= nums.length - 1) {
        // If low pointer is not 0, increment both pointers
        if (nums[low] != 0) {
            low++;
            high++;
        }
        // Otherwise, increment high pointer until nonzero found
        else {
            if (nums[high] !== 0) {
                // High pointer has found a nonzero, swap numbers @ low & high pointers, increment low pointer
                [nums[low], nums[high]] = [nums[high], nums[low]];
                low++;
            }
            high++
        }
    }
};

// Test Cases

console.log(moveZeroes([0,1,0,3,12]), '->', [1,3,12,0,0])
console.log(moveZeroes([0]), '->', [0])

// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.
// Example 2:

// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109
// 1 <= k <= 109

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperationsOld = function(nums, k) {
    // Store a count of pairs, a left pointer, and a right pointer
    let pairsCount = 0,
        left = 0,
        right = nums.length - 1;
    // Sort the input array
    nums.sort((a, b) => a - b);
    // Loop through the input array, while left < right
    while (left < right) {
        // Store a sum of pointer values
        const sum = nums[left] + nums[right];
        // If sum = k, increment pairs count, and advance both pointers
        if (sum == k) {
            pairsCount++;
            left++;
            right--;
        }
        // Otherwise, advance left pointer if sum < k, advance right pointer if sum > k
        else sum < k ? left++ : right--;
    }
    // Return pairs count
    return pairsCount;
};

// Refactored with hash map

var maxOperationsMap = function(nums, k) {
    const map = new Map;
    let pairsCount = 0;

    for (num of nums) {
        const pair = k - num;
        if (map.has(pair)) {
            map.set(pair, map.get(pair) - 1);
            if (map.get(pair) == 0) map.delete(pair);
            pairsCount++;
        }
        else map.set(num, map.get(num) + 1 || 1);
    }

    return pairsCount
};

// Refactored without using map methods

var maxOperations = function(nums, k) {
    const map = {};
    let pairsCount = 0;

    for (num of nums) {
        const pair = k - num;
        
        if (map[pair]) {
            map[pair]--;
            pairsCount++;
        }
        else map[num] = map[num] + 1 || 1;
    }

    return pairsCount
};

// Test Cases

console.log(maxOperations([1,2,3,4], 5), '->', 2);
console.log(maxOperations([3,1,3,4,3], 6), '->', 1);

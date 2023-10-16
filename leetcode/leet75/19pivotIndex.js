// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// Store 2 arrays, sums of values to left, and sums of values to right. Set all values to 0.
// Loop through rightsum from right to left, starting at index length - 2
    // Set current value of rightsum to next index of input array + next index of leftsum array
// Loop through leftsum from left to right, starting with index 0
    // Set current value of leftsum to previous index of input array + last index of leftsum array
        // Set current to 0 if this produces NAN, too account for index 0
    // If current index of rightsum == current index of leftsum, return index
// Return -1, because we never found a match. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndexOld = function(nums) {
    const leftSum = Array(nums.length).fill(0),
          rightSum = Array(nums.length).fill(0);

    for (i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = nums[i + 1] + rightSum[i + 1];
    }

    for (i = 0; i < leftSum.length; i++) {
        leftSum[i] = nums[i - 1] + leftSum[i - 1] || 0;    
        if (leftSum[i] == rightSum[i]) return i;   
    }

    return -1;
};

// Refactored

var pivotIndex = function(nums) {
    const totalSum = nums.reduce((accumulator, current) => accumulator + current);
    let leftSum = 0;

    for (i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        if (leftSum == rightSum) return i;
        leftSum += nums[i];
    }

    return -1;
}

// Test Cases

console.log(pivotIndex([1,7,3,6,5,6]), '->', 3)
console.log(pivotIndex([1,2,3]), '->', -1)
console.log(pivotIndex([2,1,-1]), '->', 0)
console.log(pivotIndex([-1,-1,0,0,-1,-1]), '->', 2)

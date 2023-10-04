// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Store a product of the input array using reduce
    const product = nums.reduce((acc, cur) => acc * cur, 1);
    // Map the input array, dividing product by current value, store it as new array
    let result = nums.map((num, i) => {
        // If num is 0, get new product to avoid dividing by 0
        if (num == 0) {
            const numsExceptCurrent = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
            return numsExceptCurrent.reduce((acc, cur) => acc * cur, 1);
        }
        return product / num;
    });
    // Return result array
    return result;
};

// Refactored for readability 
var productOfArray = function(array) {
    return array.reduce((acc, cur) => acc * cur, 1);
}

var productExceptSelf = function(nums) {
    // Store a product of the input array using reduce
    const product = productOfArray(nums);
    // Map the input array, dividing product by current value, store it as new array
    let result = nums.map((num, i) => {
        // If num is 0, get new product to avoid dividing by 0
        if (num == 0) {
            const prevProduct = productOfArray(nums.slice(0, i)),
                  nextProduct = productOfArray(nums.slice(i + 1, nums.length));
            return prevProduct * nextProduct;
        }
        return product / num;
    });
    // Return result array
    return result;
};

// Refactored for O(n) time complexity

var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1);

    // Calculate product of nums before current index
    let productBefore = 1;
    for (i = 0; i < nums.length; i++) {
        result[i] *= productBefore;
        productBefore *= nums[i];
    }

    // Calculate product of nums after current index
    let productAfter = 1;
    for (i = nums.length - 1; i >= 0; i--) {
        result[i] *= productAfter;
        productAfter *= nums[i];
    }

    return result;
}

// Test Cases

console.log(productExceptSelf([-1,1,0,-3,3]), '->', [24,12,8,6])
console.log(productExceptSelf([-1,1,0,-3,3]), '->', [0,0,9,0,0])

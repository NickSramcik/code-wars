// Given an integer array `nums`, return the length of the longest strictly increasing
// Input: nums = [10,2,5,3,4,101,18,50]
// Output: 5
// Explanation: The longest increasing subsequence is [2,3,4,18,50], therefore the length is 5.

// Pass in array of numbers, length >= 1, no funny biz
// Return a number

// Let lengths be an empty array
// Let sub be an empty array
// Let left be 0
// Let right be 1
// While left < arr.length:
//   Construct biggest increasing sub array
//   Push sub's length to lengths, set sub back to empty array
//   Increment left
// Return largest value in lengths


function longestIncSub(nums) {
    let tails = new Array(nums.length).fill(0);
    let size = 0;

    for (let num of nums) {
        let i = 0, j = size;

        while (i !== j) {
            let m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            }else {
                j = m;
            }
        }

        tails[i] = num;
        if (i === size) ++size;
    }
    return size;
}

// Test Cases

console.log(longestIncSub([10,2,5,3,4,101,18,50]), 5)
console.log(longestIncSub([3,7,22,4,8,13,9,11,12]), 6)
console.log(longestIncSub([7,7,7,7,7,7,7]), 1)

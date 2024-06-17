// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// Pass in an array
// Return an array

// Store result array, same length as input, filled w/ 0
// Store left pointer at 0, right at 1
// While left < arr.length:
//   if right pointer == arr.length - 1, reset pointers to next num
//   else if left > right, increment result[left], move right pointer
// return result

function smaller(nums) {
    const result = Array(nums.length).fill(0);
    let left = 0,
        right = 1;

    while (left < nums.length) {
        if (right == nums.length) {
            left++;
            right = left + 1;
        } else {
            if (nums[left] > nums[right]) result[left]++;
            right++;
        }
    }

    return result;
}

smaller([1, 2, 3]);

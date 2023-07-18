// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.

// Pass in an array of integers
// Return a number, the amount of pairs that are consecutive
// [1,2,5,8,-4,-3,7,6,5] -> 3

// Store a count variable
// Loop through the input array in steps of 2
// If current value is 1 less or greater than the next value, increment counter
// Return counter

function pairs(arr) {
    let count = 0;

    for (i = 0; i <= arr.length - 1; i += 2) {
        if (arr[i] == arr[i + 1] + 1 || arr[i] == arr[i + 1] - 1) count++;
    }

    return count;
}

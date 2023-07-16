// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.

// Pass in an array of integers
// Return an integer, the count of the most frequent item
// [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3] -> 5

// Store an empty map
// Loop through the array, using the map to count occurance of each element
// Return the value of the highest count in the map

function mostFrequentItemCount(collection) {
    const map = {};
    let max = 0;

    for (item of collection) {
        map[item] = map[item] + 1 || 1;
    }

    for (item in map) {
        if (map[item] > max) max = map[item];
    }

    return max;
}

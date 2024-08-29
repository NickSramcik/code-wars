// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// Pass in an array of numbers
// Return a number

// Map the occurance of each number in the array
// Let sum be 0
// Loop through the map, if a number appears only once, add it to sum

function sumNoDuplicates(nums) {
    let sum = 0;
    const map = {};

    for (num of nums) {
        map[num] = map[num] + 1 || 1;
    }

    for (num in map) {
        if (map[num] == 1) sum += +num;
    }

    return sum;
}

// Refactored to filter numbers that only appear once (last index == first index) and reduce that

function sumNoDuplicates(nums) {
    return nums.filter(num => nums.indexOf(num) == nums.lastIndexOf(num)).reduce((a, c) => a + c, 0);
}


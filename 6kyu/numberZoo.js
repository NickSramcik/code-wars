// You're working in a number zoo, and it seems that one of the numbers has gone missing!

// Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

// In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

// Note: huge lists will be tested.

// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

// Pass in an array of numbers in sequence from 1 to n, with one number missing
// Return the missing number
// [1, 2, 3, 5] -> 4

// Sort the array from small to large
// If the first number is not 1, return 1
// Loop through the array
// If current value is not previous value + 1, return current value - 1
// If loop ends, return last value + 1

function findNumber(array) {
    array.sort((a, b) => a - b);
    if (array[0] != 1) return 1;
    for (i = 1; i < array.length; i++) {
        if (array[i] != array[i - 1] + 1) return array[i] - 1;
    }return array[array.length - 1] + 1;
}

// ^This works but it's way too slow

// Calculate the reduced sum of the array
// Use formula to determine what it should be: n(min + max) / 2
// Return expected sum - actual sum

function findNumber(array) {
    const n = array.length + 1,
          expectedSum = n * (1 + n) / 2;
          actualSum = array.reduce((a, c) => a + c, 0);
    return expectedSum - actualSum;
}
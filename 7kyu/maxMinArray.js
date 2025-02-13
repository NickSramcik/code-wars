// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// Pass in an array of numbers
// Return an array of numbers

// Let ascending be the input array sorted from min to max
// Let descending be the input array sorted from max to min
// Slice both in half
// Let result be an empty array
// Loop from 0 to input array length / 2
//    Push descending value at current index to result
//    Push ascending value at current index to result
// Return result

function solve(arr){
    const ascending = arr.join('.').split('.').sort((a, b) => a - b).slice(0, Math.floor(arr.length / 2));
    const descending = arr.join('.').split('.').sort((a, b) => b - a).slice(0, Math.ceil(arr.length / 2));
    const result = [];

    for (i = 0; i < Math.ceil(arr.length / 2); i++) {
        result.push(descending[i]);
        if (ascending[i]) result.push(ascending[i]);
    }

    return result.map(Number);
}

// Refactored for readability

function solve(arr){
    const result = [];
    arr.sort((a, b) => a - b);

    while (arr.length) {
        result.push(arr.pop());
        if (arr.length) result.push(arr.shift());
    }

    return result;
}

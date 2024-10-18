// Write reverseList function that simply reverses lists.

// Pass in an array
// Return an array

// Reverse the array and return the result

function reverseList(arr) {
    return arr.reverse();
}

// Refactored without using .reverse()
// Let result be an empty array
// While input has length:
//   Pop the last value of the input and push it to result
// Return result

function reverseList(arr) {
    const result = [];

    while (arr.length) {
        result.push(arr.pop());
    }

    return result;
}

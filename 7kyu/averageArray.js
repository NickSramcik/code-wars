// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Pass in an array of integers
// Return an array of numbers, each value being the average of the current and next value
// ex above

// Store an empty result array
// Loop through the input array
// Push the average of the current and next value to result array
// Return the result array

function averages(numbers) {
    const result = [];

    if (numbers) for (i = 0; i < numbers.length - 1; i++) {
        result.push( (numbers[i] + numbers[i + 1]) / 2);
    }

    return result;
}

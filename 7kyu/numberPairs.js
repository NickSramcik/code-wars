// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.

// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

// Pass in 2 arrays of numbers
// Return an array of numbers

// Let result be an empty array
// Loop through an input array
// Push the largest value of each index b/w both input arrays to result
// Return result

function getLargerNumbers(a, b) {
    const result = [];

    for (i in a) {
        result.push(Math.max(a[i], b[i]));
    }
    
    return result;
}

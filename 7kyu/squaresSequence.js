// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]


// Pass in 2 numbers
// Return an array of numbers

// Store an empty result array
// While length of result < n
//      Push x to the result array, then square it
// Return result

function squares(x, n) {
    const result = [];

    while (result.length < n) {
        result.push(x);
        x = x ** 2;
    }

    return result;
}

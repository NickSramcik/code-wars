// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.


// Pass in an array of integers
// Return an array of sums, with each element being the sum of a smaller section of the array
// [1, 2, 3, 4] -> [1 + 2 + 3 + 4, 2 + 3 + 4, 3 + 4, 4] or [10, 9, 7, 4]

// Get a sum of all elements and store into variable
// Create a new array. Each element, take the previous sum and subtract the earliest element of input array

function partsSums(arr) {
    let sum = arr.reduce((a, c) => a + c, 0),
        result = [];
    while (arr.length > 0) {
        result.push(sum);
        sum -= arr.shift();
    }result.push(0);
    return result;
}
// ^ This works but it's not efficient enough (times out with thousands of elements)

function partsSums(arr) {
    let sum = arr.reduce((a, c) => a + c, 0),
        result = [];
    for (i = 0; i < arr.length; i++) {
        result.push(sum);
        sum -= arr[i];
    }result.push(0);
    return result;
}

// Add element '0' to the array, then map it

function partsSums(arr) {
    arr.unshift(0);
    let sum = arr.reduce((a, c) => a + c, 0);
    return arr.map(e => sum = sum - e);
}
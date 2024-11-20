// Implement a function that returns the minimal and the maximal value of a list (in this order).

// Pass in an array
// Return an array of 2 values

// let min be the smallest value of arr
// let max be the largest value of arr
// Return [min, max]

function getMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}

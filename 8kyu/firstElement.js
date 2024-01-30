// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// Pass in an array and a number, n
// Return an array of the first n elements of the input array

// Store an empty result array
// While n > 0, push first element (shifted) into result, decrease n
// n = 1 if not specified

function first(arr, n = 1) {
    const result = [];

    while (n > 0 && arr.length) {
        result.push(arr.shift());
        n--;
    }

    return result;
}

// Refactored using slice

function first(arr, n = 1) {
    return arr.slice(0, n);
}

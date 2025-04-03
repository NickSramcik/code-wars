// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// Pass in an array of arrays
// Return a string

// Map input array to convert each subarray to string with , separator
// Join parent array with \n separator
// Return result

function toCsvText(array) {
    return array.map(sub => sub.join(',')).join('\n');
}

// Refactored, the map is superfluous 

function toCsvText(array) {
    return array.join('\n');
}

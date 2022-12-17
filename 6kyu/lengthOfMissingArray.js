// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


// Pass in an array of arrays, unsorted with sequential lengths, with one array missing
// Return the length of the missing array
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


// Brute force

// Edge case — Return 0 if input is falsey
// Edge case — Return 0 if any of the inner arrays are null
// Map the input array into an array of array lengths and sort it
// If any array lengths are 0, return 0
// Loop array. If current element != prev element + 1, return prev element + 1. 

function getLengthOfMissingArray(arr) {
    if (!arr) return 0;
    if (arr.filter(e => e === null).length) return 0;

    arr = arr.map(e => e.length).sort((a, b) => a - b);

    if (!arr[0]) return 0;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] + 1) return arr[i - 1] + 1;
    };

    return 0;
}

// Refactored

function getLengthOfMissingArray(arr) {
    const lengths = (arr || [])
                    .map(e => e ? e.length : 0)
                    .sort((a, b) => a - b);
    
    if (lengths.includes(0)) {
        return 0;
    };

    for (i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        };
    };

    return 0;
}
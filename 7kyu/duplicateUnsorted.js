// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.


// Pass in an array
// Return a number

// Declare object map to store numbers
// Loop through array
// If current num not present in map, add it
// If current num present in map, return it

function findDup(arr) {
    const map = {};

    for (num of arr) {
        if (!map[num]) map[num] = true;
        else return num;
    };
}

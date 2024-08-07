// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// Pass in an array
// Return boolean

// Let map be an empty object
// Loop through input array and use map object to store frequency of each value
// Return whether map object has two values of 2 & 3

function checkThreeAndTwo(array) {
    const map = {};

    for (item of array) {
        map[item] = map[item] + 1 || 1;
    }

    return Object.keys(map).some(key => map[key] == 2) && Object.keys(map).some(key => map[key] == 3);
}

// Refactored for readability

function checkThreeAndTwo(array) {
    const map = {};

    for (item of array) {
        map[item] = map[item] + 1 || 1;
    }

    const containsTwo = Object.keys(map).some(key => map[key] == 2);
    const containsThree = Object.keys(map).some(key => map[key] == 3);

    return containsTwo && containsThree;
}

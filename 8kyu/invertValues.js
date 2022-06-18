// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//Pass in an array of whole numbers
//Return the array turning positive to negative and vise-versa
//[1, 2, -3] -> [-1, -2, 3]

//Map the array and multiply each value by -1

function invert(array) {
    return array.map(e => e * -1);
 }

//One liner

const invert = arr => arr.map(e => -e);
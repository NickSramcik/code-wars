// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// Pass in an array of positive integers (ages)
// Return an array of the two oldest ages from the input
// [1, 2, 3, 4, 5] -> [4, 5]

//Sort the input array from oldest to youngest, slice out the first two elements and return
//Just kidding the coding challenge doesn't like getting an output in that order, flip it

function twoOldestAges(ages){
    return ages.sort((a, b) => a - b).slice(-2);
}

//One liner

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2);


// Redux on Apr 12, 2023 for mock interview

// Pass in an array of positive integers 
// Return another array of 2 positive integers: two largest numbers
// [1, 2, 10, 8] --> [8, 10]

// Sort the input array from largest to smallest
// Return an array: [2nd value, 1st value]

function twoOldestAges(ages){
    let result = ages.sort((a, b) => b - a);
    return [result[1], result[0]];
}


// Sort the input array from smallest to largest 
// Slice that array to leave us with the last 2 values, and return it

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(ages.length - 2, ages.length);

console.log('Onions have layers')

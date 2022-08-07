// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


// Pass in an array, and a target integer
// Return an array of indexes of the input array that sum to the target input
// [1, 3, 5, 7], 6 -> [0, 2]

// Run a for loop nested in another for loop. Loop through each possible combination until one is true. 
// Check that the indexes aren't equal, we want separate values

function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        for (j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

// Using map methods
// This solution is more than twice as slow as the former, because it keeps looking for solutions

function twoSum(numbers, target) {
    const arr = [];
    numbers.map((e, i) => {
        numbers.map((k, j) => {
            if (i != j && e + k === target) {
                arr.push(i, j)
            }
        });
    });
    return [arr[0], arr[1]];
}

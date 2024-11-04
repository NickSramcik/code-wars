// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

// Pass in an array of numbers, and another integer representing sum
// Return an array of pairs from input array that add up to the input sum

// [1, 2, 2, 3, 4], 4 -> [[2, 2], [3, 1]]

// Create a hash map for the numbers in the array and an array for the pairs
// Loop through the array. For each number, check if its required pair is in the map 
// If it is, add the pair to the pairs array
// Otherwise, add the first number to the map

function oldpairedSums(arr, sum) {
    const numsMap = {};
    let pairs = [];
  
    for (num1 of arr) {
        const num2 = sum - num1;

        if (numsMap[num2]) {
            pairs.push([num1, num2]);
        }else numsMap[num1] = 1;
    }return pairs;
}

// Test Cases

console.log(pairedSums([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])
console.log(pairedSums([1, 4, 2, 5], 6), [[1, 5], [2, 4]])
console.log(pairedSums([1, 10, 0, 15], 10), [[0, 10]])

// Redux

// Pass in an array of numbers and a number
// Return an array of subarrays (length: 2)

// Let nums be an empty set
// Let pairs be an empty array
// Loop through the input array
//   Let diff be sum - num
//   If diff is in the set, push [num, diff] to pairs
//   Otherwise, add num to set
// Return pairs

function pairedSums(arr, sum) {
    const pairs = [];
    const nums = new Set();

    for (let num of arr) {
        const diff = sum - num;

        if (nums.has(diff)) pairs.push([num, diff])
        else nums.add(num);
    }

    return pairs;
}

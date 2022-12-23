// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// Pass in an array of integers
// Return which integer occurs most frequently (larger number breaks ties)
// [1, 1, 1, 4] -> 1

// Brute force

function highestRank(arr) {
    // Declare max variables
    let maxCount = 0,
        maxNum = null;
    // Loop through array
    for (num of arr) {
        // For each element, count how many apperances it has. Store that count. 
        let count = 0;
        for (i = 0; i < arr.length; i++) { 
            if (arr[i] == num) {
                count++
            };
        };
        // If current count > max count, make it new max count and max num
        if (count > maxCount || count == maxCount && num > maxNum) {
            maxCount = count;
            maxNum = num;
        };
    };
    // Return max num
    return maxNum;
}

// Refactored for effeciency using hash maps

function highestRank(arr){
    // Store an object to map frequency of values in array, and max freq/num for map loop
    const freqMap = {};
    let maxFreq = 0,
        maxNum = null;
    // Loop through array
    for (num of arr) {
        // If num is in map, add 1, otherwise, create it and set it to 1
        freqMap[num] = freqMap[num] + 1 || 1;
    };
    // Loop through properties in map
    for (prop in freqMap) {
        // If current property is > max freq, or is equal and its number is larger, reset max freq
        if (freqMap[prop] > maxFreq || freqMap[prop] == maxFreq && prop > maxNum) {
            maxFreq = freqMap[prop];
            maxNum = Number(prop);
        };
    };
    // Return max freq
    return maxNum;
}

// One line solution by sorting the array by length of arrays filtered to match only that element
const highestRank = a => a.sort((b, c) => a.filter(e => e == c).length - a.filter(e => e == b).length)[0];
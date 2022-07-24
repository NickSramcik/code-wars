// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// Pass in an array of integers
// Return the integer that is an outlier (even in a group of odds or vise-versa)
// [1, 3, 5, 6, 7] -> 7

// Count how many numbers in the array are even. If > 1, find the odd. Otherwise, find the even. 
function findOutlier(arr){
    if (arr.reduce((acc, cur) => cur % 2 == 0 ? ++acc : acc, 0) > 1) {
        return arr.filter(e => e % 2 !== 0)[0];
    }else return arr.filter(e => e % 2 == 0)[0];
}

// Filter both the evens and odds into separate arrays, return first element of the array with 1 element

const findOutlier = arr => {
    const odds = arr.filter(e => e % 2 !== 0);
    const evens = arr.filter(e => e % 2 === 0);
    return odds.length === 1 ? odds[0] : evens[0];
}
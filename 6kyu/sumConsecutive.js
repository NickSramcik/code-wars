// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]


// Pass in an array of integers
// Return an array of integers, the sum of each set of consecutive numbers
// [1, 1, 2, 3, 3, 3, 1] -> [2, 2, 9, 1]

// Loop through the array. 
// Set counter to 1st value
// If current element is same as prev, add to counter. 
// Otherwise, push counter to new array and reset counter
// Return new array

function sumConsecutives(s) {
    let count = s[0],
        result = [];
    for (i = 1; i <= s.length; i++) {
        if (s[i] == s[i - 1]) {
            count += s[i];
        }else {
            result.push(count);
            count = s[i];
        };
    }return result;
}

// Refactored into arrow function

const sumConsecutives = x => x.reduce((a, c, i, r) => (c == r[i - 1] ? a[a.length - 1] += c : a.push(c), a), []);
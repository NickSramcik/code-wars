// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


// Pass in a large number in string form
// Return which 5 digit piece of that number is the largest
// 11111555552222321 -> 55555

// Create an array to store each 5 digit interval
// Loop through the number, store each possible 5 digit interval in forementioned array
// Return the max of that array

// Loop runs once for a 5 digit input, twice for a 6 digit interval, etc  (length - 4) 

function solution(digits) {
    let fives = [];
    for (i = 0; i < digits.length - 3; i++) {
        fives.push(digits.slice(i, i + 5));
    }return Math.max(...fives);
}

// One liner using a reduce
// [...string] is a shorthand way to do string.split('')
// The reduce function loops through each combination, storing the maximum with each iteration
// At the end you're left with the maximum of the whole thing

const solution = s => [...s].reduce((a, _, i) => Math.max(a, s.slice(i, i + 5)), 0);
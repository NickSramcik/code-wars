// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1/1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1/1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"


// Pass in n, positive, nonzero
// Return a sum of increasingly small fractions, where the denominator = (i + 3) + 1
// Round result to 2 decimal places and convert to a string, return
// 2 --> 1 + 1/4 --> "1.25"

function SeriesSum(n) {
    // Create an array of n length
    // Set each element to 1 / (i + 1) * 3, reduce sum
    let arr = Array.from({length : n}, (_, i) => 1 / ((i * 3) + 1)).reduce((a, c) => a + c);
    // Round result to 2 decimal places and convert to a string, return
    return arr.toFixed(2).toString();
}

Math.round((num + Number.EPSILON) * 100) / 100

const SeriesSum = n => Array.from({length : n}, (_, i) => 1 / ((i * 3) + 1)).reduce((a, c) => a + c).toFixed(2)+'';

// Check for empty input

const SeriesSum = n => !n ? '0.00' : Array.from({length : n}, (_, i) => 1 / ((i * 3) + 1)).reduce((a, c) => a + c).toFixed(2)+'';
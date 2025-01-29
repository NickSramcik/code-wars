// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]

// Pass in a number
// Return an array of strings

// Let result be an empty array
// Loop from 1 to num's length
//   Slice num from 0 to i & push to result
// Return result

function createArrayOfTiers(num) {
    const result = [];

    for (i = 1; i <= num.toString().length; i++) {
        result.push(num.toString().slice(0, i));
    }

    return result;
}

// Refactored w/ map

function createArrayOfTiers(num) {
    let prev = '';
    return [...num + ''].map(digit => prev += digit);
}

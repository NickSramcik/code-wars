// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// Pass in a string of numbers in word form
// Return a string, the average in number form
// 'one three' -> 'two'

// Store written numbers in an array and use index to store its value
// Store a total and set it to 0
// Convert input into an array of words
// Loop through that array
// If any word is not valid return 'n/a'
// Add the found index of the current word to the total
// Return the index of total / input array length

function averageString(str) {
    const NUMS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
          arr = str.split(' ');
    let sum = 0;

    for (number of arr) {
        if (NUMS.indexOf(number) == -1) return 'n/a';
        sum += NUMS.indexOf(number);
    }

    const avg = Math.floor(sum / arr.length);
    return NUMS[avg];
}

// Refactored using an array map

function averageString(str) {
    const NUMS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
          arr = str.split(' ').map(num => NUMS.indexOf(num)),
          sum = arr.reduce((a, c) => a + c, 0),
          avg = Math.floor(sum / arr.length);

    if (arr.includes(-1)) return 'n/a';
    return NUMS[avg];
}

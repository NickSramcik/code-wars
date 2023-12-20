// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// Pass in a string
// Return a number

// Split string into an array of characters
// Filter array for elements that are numbers
// Reduce the array and return the sum of each element

// function sumOfIntegersInString(str) {
//     return str.split('').filter((e => typeof +e == 'number')).reduce((acc, cur) => acc + cur);
// }

// ^ Doesn't work, splits numbers > 9 into separate integers


// Store a total count and a current count
// Loop through the string
    // If current char is a number, add it to current count
    // Else, add current count to total count, reset current count to 0
// Return total count 

function sumOfIntegersInString(str) {
    let total = 0,
        current = '';

    for (char of str) {
        if (!isNaN(Number(char))) {
            current += char;
        }
        else {
            total += +current;
            current = '';
        }
    }

    return total + +current;
}

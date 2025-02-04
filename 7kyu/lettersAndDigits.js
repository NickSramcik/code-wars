// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// Pass in a string
// Return a number

// Helper function that returns if input is a letter
// Helper function that returns if input is a number

// Let count be 0
// Loop through input string
//    If current character is a number or leetter, increment count
// Return count

const isLetter = char => char.toUpperCase() !== char.toLowerCase();
const isNumber = char => Number.isInteger(Number(char)) && char !== ' ';

function countLettersAndDigits(input) {
    let count = 0;
    
    for (char of input) {
        if (isLetter(char) || isNumber(char)) count++;
    }

    return count;
}

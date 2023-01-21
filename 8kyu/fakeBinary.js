// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// Pass in a string of numbers
// Return that string with <5 -> 0, >= 5 -> 1
// '45385593107843568' -> '01011110001100111'

// Convert to array and map for the above conditions, stringify and return

function fakeBin(x){
    return x.split('').map(e => e < 5 ? 0 : 1).join('');
}

// Refactored into arrow function

const fakeBin = x => [...x].map(e => e < 5 ? 0 : 1).join('');
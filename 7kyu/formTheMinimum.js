// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


// Pass in an array of positive integers > 0
// Return the smallest number created by combining each number once (no duplicates)
// minValue({5, 7, 5, 9, 7})  ==> return (579)

// Remove duplicate numbers
// Sort the elements from smallest to largest, join together into one number and return

function minValue(values){
    values = [...new Set(values)].sort((a, b) => a - b);
    return Number(values.join(''));
}

// Refactored into arrow function

const minValue = arr => +[...new Set(arr)].sort((a, b) => a - b).join('');

// .sort method sorts smallest to largest by default, or without arguments

const minValue = arr => +[...new Set(arr)].sort().join('');
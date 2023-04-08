// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

// Pass in a string
// Return a string, with anything inside () removed
// 'Ogres are (not) (anything) like onions' -> 'Ogres are like onions'

// Convert input string to array of characters
// While ( is present in the array, loop through it
// Loop from first appearance of ( to first appearance of )
// Set those characters to ''
// At end of while loop, convert to string and return

// function removeParentheses(s){
//     let arr = s.split('');

//     while (arr.includes('(')) {
//         const start = arr.indexOf('('),
//               end = arr.indexOf(')');

//         for (i = start; i <= end; i++) {
//             arr[i] = '';
//         }
//     }

//     return arr.join('');
// }

// Breaks with edge case of nested ()

// Convert input string to array
// Store a count var and map the array
// If a ( is found, increment count
// If a ) is found, decrement count
// If count > 0, remove current character
// Convert result array to string and return

function removeParentheses(str) {
    let count = 0,
        arr = str.split('').map(char => {
            if (char == '(') count++;
            if (char == ')') count--;

            if (count > 0 || char == ')') return '';
            else return char;
        });

    return arr.join('');
}

// Refactored to storing a new string instead of using arrays

function removeParentheses(str) {
    let count = 0,
        result = '';

    for (char of str) {
        if (char == '(') count++;
        if (count == 0) result += char;
        if (char == ')') count--;
    }

    return result;
}

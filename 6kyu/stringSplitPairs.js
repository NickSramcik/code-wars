// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// Pass in a string
// Return an array of strings, each with 2 characters
// 'Shrek' -> ['Sh', 're', 'k_']

// Push an _ if the string length is odd, then add a period every 2 characters and split the period

function solution(str){
    if (!str) return []; 
    if (str.length % 2 === 1) str += '_';
    str = str.split('');
    for (i = 0; i < str.length - 1; i++) {
        if (i % 2 === 1) {
            str[i] += '.';
        }
    }return str.join('').split('.');
 }

// Pushing every 2 elements to an array

function solution(str) {
    let arr = [];
    for (i = 0; i < str.length; i += 2) {
        let secondLetter = str[i + 1] || '_';
        arr.push(str[i] + secondLetter);
    }return arr;
}
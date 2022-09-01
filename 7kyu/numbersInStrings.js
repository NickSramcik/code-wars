// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!


// Pass in a string of numbers and letters
// Return the largest continuous number in the string
// 'Shrek has 48 onions in his 23 cupboards' -> 48

// Replace any non-number character in the string with .
// Split the string with . which will create an array of continuous numbers
// Return the max

function solve(str){
    return Math.max(...[...str].map(e => Number(e) == e ? e : '.').join('').split('.'));
    };

// One line

const solve = s => Math.max(...[...s].map(e => +e == e ? e : '.').join('').split('.'));

// Split the string by any letter (using regex), and return the max

const solve = s => Math.max(...s.split(/[a-z]+/));
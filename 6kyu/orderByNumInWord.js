// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Pass in a string containing words with a number in them
// Return the string reordered by the numbers in each word
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"


// Split the string into an array of words 
// Sort the array by filtering each word for only the number, and sort by that number
// Join back into string & return

function order(words){
    return words.split(' ').sort((a, b) => [...a].filter(e => Number(e) == e) - [...b].filter(e => +e == e)).join(' ');
  }

// Refactored into arrow function

const order = s => s.split(' ').sort((a, b) => [...a].filter(e => +e == e) - [...b].filter(e => +e == e)).join(' ');


// Using Number.isInteger()

// Create arrow function that finds the number in a word for readibility
// Convert the word into an array of letters, find the element that is actually a number when converted to a number 

function order(words) {
    const findNum = x => [...x].find(e => Number.isInteger(+e));
    return words.split(' ').sort((a, b) => findNum(a) - findNum(b)).join(' ');
  }

// .find(Number) also works

const order = s => s.split(' ').sort((a, b) => [...a].find(Number) - [...b].find(Number)).join(' ');



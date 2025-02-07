// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// Pass in a string
// Return a string


// Loop through input string, split into an array of words
//    If current word has exactly 1 !, change it ''
//    Otherwise leave it alone
// Join array back to string, space separator
// Trim result to remove trailing spaces
// Return result

function removeOldOld(string) {
    return string.split(' ').map(word => word.includes('!') && !word.includes('!!') ? '' : word).join(' ').trim();
}

// Refactored for readability

function removeOld(string) {
    return string.split(' ')
                 .map(word => {
                    if (word.includes('!') && !word.includes('!!')) return ''; // Remove word if it has one ! but not more
                    else return word; 
                 })
                 .join(' ')
                 .trim();
}

// Refactored w/ filter

const exclamationCount = word => word.split('').filter(char => char == '!').length;
const remove = string => string.split(' ').filter(word => exclamationCount(word) !== 1).join(' ');

// Refactored using split for fun

function removeNew(string) {
    return string.split(' ')
                 .filter(word => {
                    const bangCount = word => word.split('!').length - 1;
                    return bangCount(word) !== 1;
               }).join(' ');
} 


// Test Cases

console.log(remove("Hi!") == '')
console.log(remove("Hi Hi! Hi!") == 'Hi')
console.log(remove("Hi! Hi!! Hi!") == 'Hi!!')
console.log(remove("Hi! Hi!!! Hi!!!!") == 'Hi!!! Hi!!!!')

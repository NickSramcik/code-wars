// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Pass in as tring of anything
// Parse out just the numbers and return those
// 'Ogr1es are li2ke oni4ons' -> 123

// Convert string to array, filter out numbers, join, convert to number, and return

function getNumberFromString(s) {
    return Number([...s].filter(e => Number(e) == e).join(''));
}

// This works but it also includes spaces which breaks edge cases
// Check for spaces

function getNumberFromString(s) {
    return Number([...s].filter(e => e !== ' ' && Number(e) == e).join(''));
}

// one line

const getNumberFromString = s => +[...s].filter(e => e!== ' ' && +e == e).join('');

// You can compare number strings

const getNumberFromString = s => +[...s].filter(e => e <= '9' && e >= '0').join('');
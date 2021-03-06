// Simple, remove the spaces from the string, then return the resultant string.

//Pass in a string with spaces
//Return that string with the spaces removed
//'Ogres are like onions' -> 'Ogresarelikeonions'

//Replace the spaces with nothing and return

const noSpace = str => str.replaceAll(' ', '')


// .replaceAll doesn't work on code wars so yeee

const noSpace2 = str => str.split('').reduce((a, c) => c === ' ' ? a : a + c, '')


// This is simpler

const noSpace3 = str => str.split(' ').join('');

//Split the string every time a space is found, then convert the spaceless array back to a string
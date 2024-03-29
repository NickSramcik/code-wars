// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// Pass in a string
// Return the string in WeIrD cAsE
// 'Ogres have layers' -> 'OGrEs HaVe LaYeRs'

// Split the string, for each element, upperCase for even index, lower for odd

function toWeirdCase(str){
    str = str.split(' ');
    str = str.map(e => e.split('').map((e, i) => i%2 ? e.toLowerCase() : e.toUpperCase()).join(''));
    return str.join(' ');
  }

// One Line

const toWeirdCase = s => 
    s.split(' ').map(e=>e.split('').map((e,i)=>i%2?e.toLowerCase():e.toUpperCase()).join('')).join(' ');

  
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


//PREP

//Pass in array of strings
//Return string with index of string "needle"
//['shrek', 'loves', 'onions', 'needle'] -> '"found the needle at position 3'

//Use indexOf method to find the needle

function findNeedle(haystack) {
    let index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
  }

//One liner

const findNeedle = arr => `found the needle at position ${arr.indexOf('needle')}`;
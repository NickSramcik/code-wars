// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


//PREP

//Pass in non-empty string, return same string but words with length >= 5 reversed
//Onions have layers -> snoinO have sreyal

//Split string into an array
//For each element, reverse if length >= 5 
//Join array back into string and return

function spinWords(string){
    return string.split(' ').map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
  }

// One Liner

const spinWords = s => s.split(' ').map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ')
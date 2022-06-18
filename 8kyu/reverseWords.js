// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


//Pass in a string of words
//Return a string with the order of words reversed
//'Ogres have layers' => 'layers have Ogres'

//Split string into an array of words, reverse the array, join back into string & return

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

//One liner

const reverseWords = str => str.split(' ').reverse().join(' ');
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


// Pass in a string, and a string of exceptions
// Return the string converted to title case (each word starts capital except for exceptions, first always cap) 
// 'onions have layers', 'onions have' -> 'Onions have Layers'


// Create function that capitalizes a word
const capitalizeWord = word => word = word[0].toUpperCase() + word.slice(1);

function titleCase(title, exceptions) {
  if (!title) return '';
  if (!exceptions) exceptions = 'asdf'
// Convert exceptions to an array of words, normalize words by lowercasing everything
    exceptions = exceptions.toLowerCase().split(' ');
// Split the string into an array of words, normalize words by lowercasing everything
    title = title.toLowerCase().split(' ');
// Capitalize the first word
    title[0] = capitalizeWord(title[0]);
// Loop through the rest of the array, capitalizing it if it is not an exception
    for (i = 1; i < title.length; i++) {
        if (!exceptions.includes(title[i])) {
          title[i] = capitalizeWord(title[i]);
          console.log('capitalizing word')
        };
    }
// Convert back to string and return
    return title.join(' ');
}


// refactored using a map

const capitalizeWord = word => word = word[0].toUpperCase() + word.slice(1);

function titleCase(title, exceptions) {
    if (!title) return '';
    if (!exceptions) exceptions = ' '
    exceptions = exceptions.toLowerCase().split(' ');
    title = title.toLowerCase().split(' ');
    return title.map((e, i) => i == 0 || !exceptions.includes(e) ? capitalizeWord(e) : e).join(' ');
}
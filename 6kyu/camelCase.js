// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// Pass in a string
// Return the string in camelcase, with the first letter also capitalized
// 'Ogres are like onions' -> 'OgresAreLikeOnions

// Split string into array of words. 
// Change each word to capital of first letter plus the rest of the word
// Join together back into string and return


String.prototype.camelCase=function(){
    return this.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('');
}



// Using just slice

String.prototype.camelCase=function(){
    return this.split(' ').map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join('');
}

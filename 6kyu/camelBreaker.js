// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Take in a string
// Break camel cased into spaces
// 'ogresHaveLayers' -> 'ogres Have Layers'

// Split string to array, map it, if a letter is capital, add space before it

function solution(string) {
    return string.split('').map(e => e === e.toUpperCase() ? ' ' + e : e).join('');
}

// One liner 

const solution = str => str.split('').map(e => e === e.toUpperCase() ? ' ' + e : e).join('');
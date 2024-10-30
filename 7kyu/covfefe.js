// Covfefe
// Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

// For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

// Pass in a string
// Return a string

// Let result be input string with every 'coverage' replaced with 'covfefe'
// If result length equals input length, return result + ' coveefe'
//    Otherwise return result as is

function covfefe(str) {
    const result = str.replaceAll('coverage', 'covfefe');
    return result.length == str.length ? result + ' covfefe' : result;
}

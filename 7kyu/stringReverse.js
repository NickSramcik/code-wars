// reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo".
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy".
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.

// Pass in a string
// Return a string

// Split string into an array of characters
// Reverse the array
// Join the array back into a string and return it

function solve(str) {
    return str.split('').reverse().join('');
}

// ^ Doesn't work because original space position isn't preserved

// let noSpace be a reversed input without spaces
// Let result be an empty array
// let i be 0
// loop through the input
//    if current character is a space, add it to result
//    otherwise add the next noSpace character and increment i
// Return result

function solve(str) {
    let noSpace = str.split('').filter(char => char !== ' ').reverse().join('');
    let result = [];
    let i = 0;

    for (let char of str) {
        if (char == ' ') result.push(' ');
        else result.push(noSpace[i]) && i++;
    }

    return result.join('');
}

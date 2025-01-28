// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string", 3, 5)

// Pass in 1 string & 2 numbers
// Return a string

// Let keyword be the input word specified by loc variable
// Let result be an empty array
// While num > 0:
//   push keyword to result
//   decrement num
// Join result with - separator and return it

function modifyMultiply(str, loc, num) {
    const keyword = str.split(' ')[loc];
    const result = [];

    while (num > 0) {
        result.push(keyword);
        num--;
    }

    return result.join('-');
}

// Refactored with Array.fill

function modifyMultiply(str, loc, num) {
    const keyword = str.split(' ')[loc];
    return Array(num).fill(keyword).join('-');
}

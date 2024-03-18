// You are given an input string.

// For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

// Examples:
// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// There might be some non-ascii characters in the string.

// Pass in a string
// Return a string

// Store an object map of the string
// Store empty result array
// Loop through input string
//      If current character is NOT in map, set it to 1 and push value to result
//      If current character is in map, increment it and push value to result
// Join result into a string, return it

function numericals(str) {
    const map = {},
          result = [];

    for (char of str) {
        map[char] = map[char] + 1 || 1;
        result.push(map[char]);
    }

    return result.join('');
}

// Test Cases

console.log(numericals("Hello, World!") == "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!") == "11121111213112111131224132411122");
console.log(numericals("hello hello") == "11121122342");

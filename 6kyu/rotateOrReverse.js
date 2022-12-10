// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> "" 
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// Pass in a string of numbers, and an integer sz
// Split the string into chunks of length n. For each chunk, reverse if sum of digits cubed is even, otherwise rotate once
// revrot("66443875", 4) --> "44668753"

// Loop through the string and insert a period after every sz elements
// Split the string into arrays using . as a separator
// For each element of the array, check if the sum of its digits cubed is even
// If even, reverse the chunk. Otherwise, rotate it by 1 element to the left
// Combine the array back into a string and return

function revrot(str, sz) {
    // Check for chunk length edge cases
    if (sz < 1 || sz > str.length) return '';
    // Insert periods for chunk sizes
    str = [...str].map((e, i) => ++i % sz ? e : e + '.').join('');
    // Convert chunks as needed
    str = str.split('.').map(e => {
        // Discard chunk if it's too small
        if (e.length < sz) return '';
        // If sum of digits cubed is even, reverse it. Otherwise rotate it.
        if ([...e].reduce((a, c) => a + c ** 3, 0) % 2 == 0) {
            return [...e].reverse().join('');
        }else {
            let arr = [...e]
            arr.push(arr.shift());
            return arr.join('');
        } 
    });
    return str.join('');
}

// Refactored

const cubeSum = str => [...str].reduce((a, c) => a + c ** 3, 0);
const reverse = str => [...str].reverse().join('');
const rotate = str => str.slice(1) + str.slice(0, 1);

function revrot(str, n, arr = []) {
    if (n < 1 || n > str.length) return '';
    for (i = 0; i < str.length; i += n) {
        arr.push(str.slice(i, i + n));
    }return arr.filter(e => e.length == n).map(e => cubeSum(e) % 2 ? rotate(e) : reverse(e)).join('');
}
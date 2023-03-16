// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// Pass in a string of letters
// Return an array of numbers
// 'iiisdoso' -> [8, 64]

// Store a count and a result array
// Loop through the string
// if letter is i, increment count
// if letter is d, decrement count
// if letter is s, square count
// if letter is o, add count to result array
// Return result array

function parse(data) {
    let count = 0;
        result = [];

    for (letter of data) {
        switch (letter) {
            case 'i': count++; break;
            case 'd': count --; break;
            case 's': count **= 2; break;
            case 'o': result.push(count); break;
        };
    }return result;
}

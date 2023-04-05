// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

// Good luck and happy coding!

// Pass in multiple strings, and finally an empty input
// Return a string concatenating all the inputs
// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

// Store the input i

function createMessage(string = '') {
    let message = string;

    function extendMessage(nextString = '') {
        if (nextString === '') return message;
        else {
            message += ' ' + nextString;
            return extendMessage;
        }
    }

    return extendMessage;
}

// Refactored using arrow functions

const createMessage = (...arr) => str => str ? createMessage(...arr, str) : arr.join(` `);

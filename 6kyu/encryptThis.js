// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// Pass in a string of words, separated by spaces
// Return a string, with each word encrypted: first letter ascii code, second letter switched with last
// encryptThis("hello world") === "104olle 119drlo"

// Convert string to array of words and map through it
// Convert word to array of letters and map through it
// If index 0, change character to ascii code
// if index 1, store it and switch to last letter
// if index length - 1, switch it to stored second letter
// Join down into string and return

var encryptThis = function (text) {
    var secondLetter = null;
    return text.split(' ')
        .map(word =>
            word.split('')
                .map((letter, i) => {
                    if (i == 0) return letter.charCodeAt(0);
                    else if (i == 1) {
                        secondLetter = letter;
                        return word.slice(-1);
                    }
                    else if (i == word.length - 1) return secondLetter;
                    else return letter;
                })
                .join('')
        )
        .join(' ');
};

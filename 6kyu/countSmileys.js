// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// Pass in an array of strings
// Return how many valid smileys are in the array
// [':)', ';-D', ':]'] -> 2

// Reduce the array. If first character is : or ;, last character is ) or D, and middle character is - or ~, add 1
// Return the final count


function countSmileys(arr) {
    return arr.reduce((a, c) => {
        // Noseless
        if (c.length == 2) {
            if ((c[0] == ':' || c[0] == ';') && 
                (c[1] == ')' || c[1] == 'D')) {
                    return ++a;
                }else return a;
        // Has Nose
        }if (c.length == 3) {
            if ((c[0] == ':' || c[0] == ';') &&
                (c[1] == '-' || c[1] == '~') &&
                (c[2] == ')' || c[2] == 'D')) {
                    return ++a;
                }else return a;
        }else return a;
    }, 0);
}

// Declaring all valid smileys first

function countSmileys(arr) {
    const validSmileys = [':)', ';)', ':D', ';D', ':-)', ';-)', ':~D', ';~D', ':~)', ';~)', ':-D', ';-D'];
    return arr.reduce((a, c) => validSmileys.includes(c) ? ++a : a, 0);
}

// Separating Eyes/Nose/Mouth (so one could add more valid smileys easily)

function countSmileys(arr) {
    const validEyes = [':', ';'],
          validNoses = ['-', '~'],
          validMouths = [')', 'D'];
    return arr.reduce((a, c) => {
        return c.length == 3 ? 
            validEyes.includes(c[0]) && validNoses.includes(c[1]) && validMouths.includes(c[2]) ? ++a : a 
            : validEyes.includes(c[0]) && validMouths.includes(c[1]) ? ++a : a;                               
    }, 0);
}

// Destructuring valid symbol storage

function countSmileys(arr) {
    const [validEyes, validNoses, validMouths]  = [[':', ';'], ['-', '~'], [')', 'D']];      
    return arr.reduce((a, c) => {
        return c.length == 3 ? 
            validEyes.includes(c[0]) && validNoses.includes(c[1]) && validMouths.includes(c[2]) ? ++a : a 
            : validEyes.includes(c[0]) && validMouths.includes(c[1]) ? ++a : a;                               
    }, 0);
}
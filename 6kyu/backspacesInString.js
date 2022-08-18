// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// Pass in a string
// Return the string, with #s representing backspaces — delete them and the character before it
// 'Ogre##s have# l#ayers' -> 'Ogs hav ayers' 

// Split string intro array of characters
// If an element is #, remove it and the valid character before it
// Join and return


function cleanString(s) {
    s = s.split('');
    for (i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            s[i] = '';
            for (k = i - 1; k > 0; k--) {
                if (s[k] !== '' && s[k]!== '#') {
                    s[k] = '';
                    break;
                }
            }
        }
    }return s.join('');
  }

// Create an array and loop through the string. If character valid, add it. If #, remove one. 
// Join that array into a string and return it

function cleanString(s) {
    let result = [];
    for (e of s) e === '#' ? result.pop() : result.push(e);
    return result.join('');
}

// One liner using a reduce
// Check current value, if #, remove the last character of the accumulator, otherwise, add current value 

const cleanString = s => s.split('').reduce((a, c) => c === '#' ? a.slice(0, -1) : a + c, '');

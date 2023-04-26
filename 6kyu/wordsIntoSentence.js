// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

// Pass in an array of strings
// Return a string withc each of those strings like a gramatically correct list
// ['Shrek', 'ogre', '', 'onion'] -> 'shrek, ogre and onion'

// Store an empty result string
// Filter the input array for non-empty values
// Loop through that array
//    If index isn't last or 2nd to last, add substring to result string with a comma
//    If index is 2nd to last, add substring to result string with ' and'
//    If index is last, add substring to result string on its own
// Return result string

function formatWords(words) {
    if (!words) return '';
    let result = '';
    words = words.filter(e => e);

    for (i = 0; i < words.length; i++) {
        if (i == words.length - 1) result += words[i];
        else if (i == words.length - 2) result += words[i] + ' and ';
        else result += words[i] + ', ';
    }

    return result;
}

// Refactored using slice to avoid storing anything in memory

function formatWords(words) {
    if (!words) return '';
    words = words.filter(e => e);

    if (words.length < 2) return words[0] || '';
    if (words.length < 3) return words[0] + ' and ' + words[1];
    return words.slice(0, -1).join(', ') + ' and ' + words.pop();
}

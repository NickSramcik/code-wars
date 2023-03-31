// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

// Pass in a string
// Return an array with two values: the character the repeats the most, and how often it repeats consecutively
// 'aaabbbaabb' -> ['a', 3]

// Store three variables, repeater, max count, and current count
// Loop through the string
// If current character == previous, increment count
// If current character !== previous character, reset current count
// If current count > max count, set repeater to previous character, and set max count to current count
// Return an array of repeater and max count

function longestRepetition(s) {
    let repeater = '',
        maxCount = 0,
        currentCount = 1;

    for (i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) currentCount++;
        else currentCount = 1;

        if (currentCount > maxCount) {
            maxCount = currentCount;
            repeater = s[i - 1];
        }
    }

    return [repeater, maxCount];
}

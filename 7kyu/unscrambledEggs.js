// Unscramble the eggs.

// The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

// Example
// unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
// //             "B---eg---in---n---er---"
// Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

// Pass in a string
// Return a string, with all the "egg"s removed
// 'seggheggreggekegg' -> 'shrek'

// Split the string into an array using 'egg' as separator
// Join the array back into a string with no separator
// Return

function unscrambleEggs(word) {
    return word.split('egg').join('');
}

// Refactored into arrow function

const unscrambleEggs = word => word.split('egg').join('');

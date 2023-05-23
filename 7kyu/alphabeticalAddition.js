// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

// Pass in a variable amount of single character strings
// Return a single character string, the result of the inputs added
// 'a', 'b' -> 'c'

// Reduce the character codes of the inputs and store it
// If sum > 25, subtract 26 from it
// If sum is 0 return 'z'
// Return sum converted back to a character

let test = 'z'
console.log(test.charCodeAt(0) - 96)

function addLetters(...letters) {
    let sum = [...letters].reduce((a, c) => a + c.charCodeAt(0) - 96, 0);
    while (sum > 25) sum -= 26;
    if (sum == 0) return 'z';
    return String.fromCharCode(sum + 96);
}

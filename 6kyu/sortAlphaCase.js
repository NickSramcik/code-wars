// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// Pass in a string of letters
// Return the string sorted by letter and case
// 'Onions' -> 'innOos'

// Convert string to array
// Sort the array but case, then by alphabetical order
// Convert back to string and return

function findChildren(string) {
    return string
        .split('')
        .sort((a, b) => {
            if (a < b && a.toUpperCase == b.toUpperCase) return -1;
            if (a > b && a.toUpperCase == b.toUpperCase) return 1;
        })
        .sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
        })
        .join('');
}

// Refactored using caseFirst locale compare

function findChildren(string) {
    return string.split('').sort((a, b) => a.localeCompare(b, 'kf', { caseFirst: 'upper' })).join('');
}

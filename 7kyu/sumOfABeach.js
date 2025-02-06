// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

// Examples
// "WAtErSlIde"                    ==>  1
// "GolDeNSanDyWateRyBeaChSuNN"    ==>  3
// "gOfIshsunesunFiSh"             ==>  4
// "cItYTowNcARShoW"               ==>  0

// Pass in a string
// Return a number

// Let keywords be an array with above mentioned beach words
// Let count be 0
// Lowercase input string
// Loop through keywords
//   Split input string by keyword. Increment count by length of resulting array - 1
// Return count

function sumOfABeach(beach) {
    const keywords = ['sand', 'water', 'fish', 'sun'];
    let count = 0;
    beach = beach.toLowerCase();

    for (let keyword of keywords) {
        count += beach.split(keyword).length - 1;
    }

    return count;
}

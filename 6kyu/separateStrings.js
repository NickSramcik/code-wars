// Create a function that takes a string and separates it into a sequence of letters.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

// Examples:

// sepStr("Just Live Life Man")
// // => [['J','L','L','M'],
// // => ['u','i','i','a'],
// // => ['s','v','f','n'],
// // => ['t','e','e','']]);


function sepStr(str) {
    // Determine which word is the longest and store how many letters it has
    const maxLength = str.split(' ').reduce((a, c) => a.length > c.length ? a : c).length  
    // Create an array with as many elements as the longest word has letters
    let arr = Array(maxLength, '')
    // Loop through each element, and map each one to include the nth letter of every word
    // If a letter doesn't exist, set element to an empty string
    for (i = 0; i < maxLength; i++) {
      arr[i] = str.split(' ').map(e => e[i] || '')
    }return arr
  }


const sepStr = str => {
    const maxLength = str.split(' ').reduce((a, c) => a.length > c.length ? a : c).length  
    let arr = Array(maxLength, '')
    for (i = 0; i < maxLength; i++) {
        arr[i] = str.split(' ').map(e => e[i] || '')
    }return arr
}
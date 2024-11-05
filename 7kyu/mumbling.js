// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//PREP

//Pass in a string, return another string with capital first letters, separated with -, with each being the length of its index + 1
// "bnm" -> "B-Nn-Mmm"


//Split string into an array
//Map array by repeating each element [index + 1] times
//Capitalize first letter of each element
//Join into string with - separator, return

function accum(s) {
    let arr = s.split('').map((e, i) => e.toLowerCase().repeat(i + 1))
    return arr.map(e => e[0].toUpperCase() + e.slice(1)).join('-')
}

// Combine into one line

// const accum = s => s.split('').map((e, i) => e.toLowerCase().repeat(i + 1)).map(e => e[0].toUpperCase() + e.slice(1)).join('-')

// Replace the slice with the repeat

function accum(s) {
    return s.split('').map((e, i) => e[0].toUpperCase() + e.toLowerCase().repeat(i)).join('-')
}

// One line

const accum = s => s.split('').map((e, i) => e[0].toUpperCase() + e.toLowerCase().repeat(i)).join('-')

// Redux

// Pass in a string
// Return a string

// Convert the input string into an array of letters
// Map the array such that each letter is uppercased and concatenated with the letter lowercased and repeated i times
// Join the array of letters into a string separated with '-'
// Return the result

function accum(str) {
	return str.split('')
              .map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i))
              .join('-');
}

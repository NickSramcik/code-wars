// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


// Pass in a positive integer
// Return an array of strings, starting with *, each element adding two more * w/ spaces around *
// 3 -> ["  *  ", " *** ", "*****"]
// Each floor's string has length of 2 * n - 1 

// Start with array of length equaling input
// Loop through the array, starting with 1
// Each iteration, add double the index amount of * to the string
// While string length is less than input, add inverse index amount of spaces to each side of the string

function towerBuilder(nFloors) {
    let arr = Array(nFloors);
    arr.fill('') 
    arr[0] = '*';
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].padStart(i * 2 + 1, '*');
        console.log(`length is ${arr[i].length}`)
            while(arr[i].length < 2 * nFloors - 1) {
            arr[i] = ' ' + arr[i] + ' ' ;
        }
    }return arr;
  }

// Using Array.from's built in map method

function towerBuilder(n) {
    return Array.from({length: n}, (_, i) => {
        const spaces = ' '.repeat(n - i - 1);
        return spaces + '*'.repeat(i * 2 + 1) + spaces;
    });
}
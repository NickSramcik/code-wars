// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//Pass in an array of strings
//Return the array with each element having its number in front of the string
//['Ogres', 'have', 'layers'] -> ['1: Ogres', '2: have', '3: layers']

//Use an array map to concatenate the number into the string

var number = function(array){
    return array.map((element, index) => element = `${index + 1}: ${element}`);
  }

//One liner

const number = arr => arr.map((e, i) => e = `${++i}: ${e}`);

//Using a for loop

function number(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}: ${arr[i]}`;
    }return arr;
}
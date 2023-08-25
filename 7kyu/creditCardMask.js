// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//PREP
//Pass in a string
//Return a string where all but last 4 characters are #
// 'Ogres are like onions' => "#################ions"

//Cut off the last 4 characters
//Create new string of equal length of remaining string, make all characters #
//Concatenate and return

function maskify(cc) {
const end = cc.slice(-4);
const mask = cc.slice(0, -4).split('').map(e => e = '#').join('');
return mask + end;
}


//Using padStart
//padStart will add a string to the beginning until the string length equals the first argument

const maskify = cc => cc.slice(-4).padStart(cc.length, '#');
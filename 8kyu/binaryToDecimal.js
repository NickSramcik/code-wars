// Complete the function which converts a binary number (given as a string) to a decimal number.


// function binToDec(bin) {
//     return Number(parseInt(bin, 2).toString(10))
// }


const binToDec = bin => +parseInt(bin, 2).toString(10)

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

// Pass in a number
// Return a number

// Store the length of the absolute value of the input
// Return the input multiplied 5 to the power of above value

function multiply(number) {
    const digits = Math.abs(number).toString().length;
    return number * 5 ** digits;
}

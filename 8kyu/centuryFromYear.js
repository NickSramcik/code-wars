// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//Pass in a postiive whole number, a year
//Return what century that year is in (number)
//2004 -> 21

//Divide the input by 100, remove decimals, add 1 & return

function century(year) {
    return Math.trunc(year / 100) + 1;
}

//This coding challenge is dumb and considers 00 years to be part of the last century...
//2000 is not part of the 20th century my friend

//Check for 00 years
function century(year) {
    if (year.toString().slice(-2) == '00') {
        return Math.trunc(year / 100);  
    }else return Math.trunc(year / 100) + 1;
}

//Using Math.ceil

const century = year => Math.ceil(year/100);

//Without Math methods
//Single pipe | is a bitwise OR operator
//Basically it's a shorthand way to remove decimals when you add | 0 
const century = year => (year + 99) / 100 | 0;
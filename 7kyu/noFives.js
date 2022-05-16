// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

//PREP
//Take in two numbers a & b, create range from a to b
//Return how many numbers don't have 5
//1,6 => 5

//Create a loop, start with a and end with b
//Add new number to array if it doesn't include a 5
//Return array length

function dontGiveMeFive(start, end) {
    let arr = []
    for (i = start; i <= end; i++) {
        if (!String(i).includes('5')) {
            arr.push(i)
        }
    }return arr.length;
}

//Refactor

function dontGiveMeFive(start, end) {
    let arr = []
    for (i = start; i <= end; i++) {
        if (!String(i).includes('5')) arr.push(i)
    }return arr.length;
}


// Using a count instead of building an array

function dontGiveMeFive(start, end) {
    let count = 0
    for (i = start; i <= end; i++) {
        if (!String(i).includes('5')) count++
    }return count;
}

// Using reduce instead of a loop

const dontGiveMeFive = (start, end) => 
    [...Array(++end - start)].reduce((acc, _, id) => acc + !String(id + start).includes('5'), 0)



































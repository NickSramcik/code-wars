// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Pass in an array of numbers and string numbers
//Return a sum of each element as if all were numbers
//[1, '2', 3] -> 6

//Use a reduce on the array, but convert the element to a number first

function sumMix(x){
    return x.reduce((acc, cur) => acc + Number(cur), 0);
}

//One liner

const sumMix = x => x.reduce((a, c) => +c + a, 0);

//Converting strings to numbers first

const sumMix = x => x.map(e => +e).reduce((a, c) => a + c);
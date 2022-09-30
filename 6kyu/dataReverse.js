// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

// Pass in a array of 1s and 0s
// Return that array reversed, maintaining groups of 8 elemenets
// [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1] -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0]

// Add a period after every 8th element. Split the array by that period to get an array of bits. Reverse that array. 

function dataReverse(data) {
    for (i = 8; i < data.length; i += 9) {
        data.splice(i, 0, '.');
    }return data.join('').split('.').reverse().join('').split('').map(e => +e);
  }

// Create a new array. Remove 8 elements from end of input, and add them to new array. Do this until input is empty. 

function dataReverse(data) {
    let result = [];
    while (data.length) {
        result.push(...data.splice(-8));
    }return result;
}

// You can declare the new array inside the function declaration

function dataReverse(data, result = []) {
    while (data.length) {
        result.push(...data.splice(-8));
    }return result;
}
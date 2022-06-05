// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//PREP

//Pass in a positive integer
//Return another integer that represents how many digits are in the input's binary representation
//4 -> 2

//Convert number to binary string and return the amount of 1s in it

var countBits = function(n) {
    return n.toString(2).split('').filter(e => e == 1).length;
  };

//Splitting the 0s is another way to filter the string to only 1s

const countBits = n => n.toString(2).split('0').join('').length;
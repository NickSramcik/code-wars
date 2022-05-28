// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

//PREP

//Pass in an array of 10 numbers
//Return a string of those numbers that's formatted like a phone number
//[0, 9, 8, 7, 6, 5, 4, 3, 2, 1] -> '(098) 754-4321'

//Concatenate '(' to index 0, '0 ' to index 2, and '-' to index 5
//Join the array into a string and return

function createPhoneNumber(numbers){
  numbers[0] = '(' + numbers[0];
  numbers[2] += ') ';
  numbers[5] += '-';
  return numbers.join('');
}

//Using replace with a declared format
//Replace will only replace the first instance it finds, so it works well in a loop

function createPhoneNumber(numbers) {
    let phoneNumber = '(xxx) xxx-xxxx';
    for (i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace('x', numbers[i]);
    }return phoneNumber;
}

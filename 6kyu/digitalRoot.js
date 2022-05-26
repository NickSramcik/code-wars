// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//PREP

//Pass in a positive number
//Return a single digit number, which is the recursive sum of each digit until the result is one digit
// 98 -> 17 -> 8

//Split the number into an array and reduce the sum of each digit. 
//If more than one digit, pass the result back into the function and run again
//If it is one digit, end the function and return


//This kinda works but it keeps returning undefined?
// function digital_root(n) {
//     console.log(`n is ${n}`)
//     //Sum the digits of the input
//     let sum = String(n).split('').reduce((a, c) => a + +c, 0)
//     console.log(`sum is ${sum}`)
//     //Check if it has 1 digit
//     if (String(sum).length == 1) {
//       console.log(`Returning ${sum}`)
//       return sum
//     }else {
//       console.log('running again')
//       return digital_root(sum)
//     }
//   }

// Recursive functions have to be returned

function digital_root(n) {
    let sum = String(n).split('').reduce((a, c) => a + +c, 0)
    if (String(sum).length == 1) return sum
    else return digital_root(sum)
}

// Using a while loop

function digital_root(n) {
    let sum = String(n).split('').reduce((a, c) => a + +c, 0)
    while (String(sum).length > 1) {
        sum = String(sum).split('').reduce((a, c) => a + +c, 0)
    }return sum
  }

// Using smart math formula shortcut

const digital_root = n => (n - 1) % 9 + 1;

// n - 1 is the same as --n if you want a crazy short function

const digital_root = n => --n % 9 + 1;
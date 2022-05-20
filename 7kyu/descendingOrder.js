// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//PREP

//Take in integer, return integer with each digit in descending order
//5123 -> 5321
//Split number into array
//Sort array
//Join back into number and return

function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
  }

//One liner

const descendingOrder = n => +String(n).split('').sort((a, b) => b - a).join('')


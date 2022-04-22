// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 1^3 + 5^3 + 3^3 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.


// Long form

// function isNarcissistic(n){
//     const digits = n.toString().length
//     return n === n.toString().split('').reduce((a, c) => a + Math.pow(c, digits), 0)
// }

//Single liner

const isNarcissistic = n => n === n.toString().split('').reduce((a, c) => a + Math.pow(c, n.toString().length), 0)
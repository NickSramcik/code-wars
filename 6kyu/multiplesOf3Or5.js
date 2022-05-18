// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//PREP

//Pass in a number. Return sum of all multiples of 3 or 5
//8 => 3 + 5 = 8

//Create an array from 1 to n, filter multiples of 3 or 5. Reduce, sum, and return. 

function solution(number){
    if (number < 4) return 0
    let arr = Array.from({length: number - 1}, (_, i) => i + 1).filter(e => e % 3 === 0 || e % 5 === 0)
    if (arr.length > 1) return arr.reduce((a, c) => a + c)
    return 3
}

//One liner

const solution = n => n <= 0 ? 0 : Array.from({length: n}, (_, i) => (i % 3 == 0 || i % 5 == 0) ? i : 0).reduce((a, c) => a + c)

//Without creating an array

function solution(number) {
    let sum = 0
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i
    }return sum
}
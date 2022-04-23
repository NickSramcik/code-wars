// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


// This don't work :(

// function solve(s){
//     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//     let arr = s.split('')
//     let upper = arr.reduce((a, c) => c === c.toUpperCase() ? a + c : a, 0)
//     let lower = arr.reduce((a, c) => c === c.toLowerCase() ? a + c : a, 0)
//     let num = arr.reduce((a, c) => c === Number(c) ? a + c : a, 0)
//     let special = arr.reduce((a, c) => specialChars.test(c) ? a + c : a, 0) 
//     return [upper, lower, num, special]
// }

function solve(s) {
    let arr = [0, 0, 0, 0]
    s.split('').forEach(e => {
        if (e !== e.toLowerCase()) {
            arr[0] += 1
        }else if (e !== e.toUpperCase()) {
            arr[1]++
        }else if (e == Number(e)) {
            arr[2]++
        }else {
            arr[3]++
        }
    })
    return arr
}
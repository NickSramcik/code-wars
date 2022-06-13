// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//PREP

//Pass in a string of random casing
//Return the same string with the casing changed to whatever the majority case is
// 'OgRes hAvE lAyeRs' -> 'ogres have layers' 

//Split and loop through the string to check if majority of letters are uppercase
//If they are, return the string in uppercase. Otherwise, return it to lowercase. 

function solve(s){
    let upperCases = s.split('').reduce((a, c) => c == c.toUpperCase() ? a + 1 : a, 0);
    if (upperCases > s.length / 2) return s.toUpperCase();
    else return s.toLowerCase();
}

//Using a ternary when checking upper case majority

function solve(s){
    let upperCases = s.split('').reduce((a, c) => c == c.toUpperCase() ? a + 1 : a, 0);
    return upperCases > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

//Using filter to count uppercase letters

function solve(s){
    let upperCases = s.split('').filter(e => e == e.toUpperCase()).length
    return upperCases > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}


//One line just for fun

const solve = s => s.split('').filter(e => e == e.toUpperCase()).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
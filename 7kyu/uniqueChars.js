// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.

// Pass in 2 strings
// Return a string

// Let result be an empty string
// Loop through 1st input string
//   If a character is not in 2nd input string, add it to result string
// Loop through 2nd input string
//   If a character is not in 1st input string, add it to result string
// Return result

function solve(a, b) {
    let result = '';

    for (char of a) {
        if (!b.includes(char)) result += char;
    }

    for (char of b) {
        if (!a.includes(char)) result += char;
    }

    return result;
}

// ^ Looks like quadratic time complexity -> O(n^2)
// Refactored using sets for better efficiency
// The ^ operator in following solution is the XOR operator, checks whether either includes the char but NOT both

function solve(strA, strB) {
    const setA = new Set(strA);
    const setB = new Set(strB);
    const result = strA + strB;

    return [...result].filter(char => setA.has(char) ^ setB.has(char)).join('');
}

// According to discussion this solution loses effectiveness with giant strings (length > 10,000) 
// because creating sets of huge strings is expensive

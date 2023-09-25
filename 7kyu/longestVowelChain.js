// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Pass in a string
// Return a number
// 'codewarriors' -> 2

// Store vowels in a constant
// Store chain count
// Store max chain count

// Loop through each character in the string
// If current character is a vowel, increment chain count by 1
// If current chain count is larger than max chain count, set the max to current
// If current character is not a vowel, set current chain to 0
// Return max chain

function isVowel(letter) {
    const vowels = 'aeiou';
    return vowels.includes(letter.toLowerCase());
}

function solve(string) {
    let chainCount  = 0,
        maxChain = 0;
    
    for (letter of string) {
        if (isVowel(letter)) {
            chainCount++;
            if (chainCount > maxChain) maxChain = chainCount;
        }
        else chainCount = 0;
    }

    return maxChain;
}

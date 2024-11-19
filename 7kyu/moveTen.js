// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// Pass in a string
// Return a string

// Let alphabet be a string holding the alphabet
// Let letters be input string split into a string of letters
// Map the letters array
//   let charCode be the index of letter in alphabet
//   let newCode be charCode + 10 % 26
//   return alphabet[newCode]
// Join letters array into a string and return it

function moveTen(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letters = str.split('');
    
    letters = letters.map(letter => {
        const charCode = alphabet.indexOf(letter);
        const newCode = (charCode + 10) % 26;
        return alphabet[newCode];
    })

    return letters.join('');
}

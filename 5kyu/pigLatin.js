// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


// Pass in a string
// Return the string in pig latin
// 'Ogres are like onions' -> 'gresOay reay ikelay nionsoay' 

// Split into array of words. For each word, shift the first letter, push that letter, then add 'ay' to end
// If the "word" is a symbol, don't add 'ay' to the end. 
// Join and return

function pigIt(str){
    let arr = str.split(' ');
    for (i = 0; i < arr.length; i++) {
        let word = arr[i].split('')
        word.push(word[0]);
        word.shift();
        if (arr[i].toUpperCase() === arr[i].toLowerCase()) {
            arr[i] = word.join('');
        }else arr[i] = word.join('') + 'ay';
    }return arr.join(' ');
  }

// Using map method
// This works but test cases are breaking it by putting spaces before punctuation

function pigIt(str) {
    let arr = str.split(' ');
    return arr.map(e => {
        const firstLetter = e[0];
        return e.slice(1) + firstLetter + 'ay';
    }).join(' ')
}

// Solving broken test/edge cases

function pigIt(str) {
    let arr = str.split(' ');
    return arr.map(e => {
        const firstLetter = e[0];
        return '!?.'.includes(firstLetter)  ? firstLetter : e.slice(1) + firstLetter + 'ay';
    }).join(' ')
}

// One liner

const pigIt = s => s.split(' ').map(e => e.slice(1) + e[0] + 'ay').join(' ');

// Again with the spaced punctuation edge cases

const pigIt = s => s.split(' ').map(e => '!?.'.includes(e[0]) ? e[0] : e.slice(1) + e[0] + 'ay').join(' ');
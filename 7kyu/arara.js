// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// 1 = anane
// 2 = adak
// 3 = adak anane
// 4 = adak adak
// 5 = adak adak anane
// 6 = adak adak adak
// 7 = adak adak adak anane
// 8 = adak adak adak adak

// Take a given number and return the Arara's equivalent.

// e.g.

// countArara(3) 'adak anane'

// countArara(8) 'adak adak adak adak'
// countArara 3 // -> "adak anane"

// countArara 8 // -> "adak adak adak adak"
// https://en.wikipedia.org/wiki/Arara_people

// Pass in a number
// Return a string

// Return 'adak' repeated n / 2 times (floored) + 'anane' if n % 2

function countArara(n) {
    let arara = 'adak '.repeat(Math.floor(n / 2)) + 'anane'.repeat(n % 2);
    return arara.trim();
}

// Refactored using arrays

function countArara(n) {
    const arara = Array(Math.floor(n / 2)).fill('adak');
    if (n % 2) arara.push('anane');
    return arara.join(' ');
}

// Refactored recurstion
// 3 terminal cases end the string correctly without trailing spaces
// Any number > 2 adds a space

function countArara(n) {
    switch (n) {
        case 0: return '';
        case 1: return 'anane';
        case 2: return 'adak';
        default: return 'adak ' + countArara(n - 2);
    }
}

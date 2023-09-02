// Hash Map

// Pass in a string
// Return a hashmap that counts the occurence of every character
// 'shrek' -> {s: 1, h: 1, r: 1, e: 1, k: 1}

function countLetters(string) {
    const hashMap = {};

    for (letter of string) {
        console.log(hashMap);
        if (hashMap[letter]) {
            hashMap[letter] += 1;
        }else {
            hashMap[letter] = 1;
        }
    }

    return hashMap;
}

console.log(countLetters('i love bacon'))

// Pass in two strings, count second string in first string
// 'i love bacon', 'o' -> 2

function countString(string, check) {
    let count = 0;

    for (letter of string) {
        if (letter == check) count++;
    }

    return count;
}


const phoneNumberMap = {
    bob: '555-2412',
    dan: '555-5808',
    shrek: '404-1234',
    george: '404-8978'
}

function high(str) {
    const abc = ' abcdefghijklmnopqrstuvwxyz';
    const Score = word => word.split('').reduce((a, c) => a + abc.indexOf(c), 0);
    return str.split(' ')
                .map((e, i) => ({ word: e, pos: i, score: Score(e) }))
                .sort((a, b) => a.score - b.score || b.pos - a.pos)
                .pop()
                .word;
}
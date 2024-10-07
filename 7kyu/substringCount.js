// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

// Pass in a string
// Return a number

// Let count be 0
// While fullText includes searchTexT:
//   slice search text out of fullText
//   increment count
// Return count

function solution(fullText, searchText){
    let count = 0;

    while(fullText.includes(searchText)) {
        const start = fullText.indexOf(searchText);
        const end = start + searchText.length;

        fullText = fullText.slice(0, start) + fullText.slice(end);
        count++;
    }

    return count;
}

// Refactored using split
// 'abcdeb'.split('b') -> ['a', 'cde', '']

function solution(fullText, searchText){
    return fullText.split(searchText).length - 1;
}

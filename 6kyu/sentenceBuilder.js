// Implement a function, so it will produce a sentence out of the given parts.

// Array of parts could contain:

// words;
// commas in the middle;
// multiple periods at the end.
// Sentence making rules:

// there must always be a space between words;
// there must not be a space between a comma and word on the left;
// there must always be one and only one period at the end of a sentence.
// Example:

// makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'

// Pass in an array of strings
// Return a string, build a gramatically correct sentence
// makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'

// Store an empty result string
// Loop the array
//   Check for edge cases
//   If current element is a ',' add it to the result string
//   If current element is a period, add it ONLY if last letter is not a period
//   Otherwise, add a space and the current word
// Add a period if sentence doesn't have one
// Return the result string

function makeSentence(parts) {
    let sentence = ''

    for (element of parts) {
        if (element == ',') sentence += element;
        else if (element == '.' && sentence.slice(-1) != '.') sentence += element;
        else if (element != '.') sentence += ' ' + element;
    }

    if (sentence.slice(-1) != '.') sentence += '.'

    return sentence.trim();
}

// console.log(makeSentence(['hello', ',', 'my', 'dear']), '= hello, my dear.')

// Refactored using arrow function and a reduce with ternary expressions

const makeSentence = parts => parts.reduce((acc, cur) => cur == ',' ? acc + cur : cur == '.' ? acc : acc + ' ' + cur) + '.';

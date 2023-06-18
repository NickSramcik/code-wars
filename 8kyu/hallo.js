// You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

// Write a simple function to check if the string contains the word hallo in different languages.

// These are the languages of the possible people you met the night before:

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes

// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

// Pass in a string
// Return boolean, whether input is 'hello' in one of the given languages
// 'ciao' -> true

// Store the hello strings inside a constant array
// Loop through the hellos array, if the input includes any of its values return true
// Return false if the entire loop fails

function validateHello(greetings) {
    const hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];

    for (hello of hellos) {
        if (greetings.toLowerCase().includes(hello)) return true;
    }

    return false;
}

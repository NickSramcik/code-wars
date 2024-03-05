// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// Pass in unknown variable
// Return float number

function parseF(s) {
    const result = parseFloat(s);
    return Number.isNaN(result) ? null : result;
}

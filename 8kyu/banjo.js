// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//Pass in a string, someone's name
//Return a string about playing the banjo, if input starts with r, they play the banjo
//'Remus' -> 'Remus plays banjo'

//Return a string with a ternary, checking if the input starts with r

function areYouPlayingBanjo(name) {
    const letter = name[0].toLowerCase() == 'r';
    return `${name} ${letter ? 'plays' : 'does not play'} banjo`;
}

//One liner using an .includes() method

const areYouPlayingBanjo = n => `${n} ${'rR'.includes(n[0]) ? 'plays' : 'does not play'} banjo`;
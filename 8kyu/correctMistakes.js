// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Pass in a string
// Return the same string but replace 5 with S, 0 with O, and 1 with I
// '$hrek 1s an 0gre' -> 'Shrek Is an Ogre'

// Convert string to array, and map. Check for each replacement. Join and return

function correct(string) {
	return string.split('').map(e => 
        e == '5' ? 'S' :
        e == '0' ? 'O' :
        e == '1' ? 'I' : 
        e).join('');
}

// Refactored into one line

const correct = s => [...s].map(e => e == '5' ? 'S' : e == '0' ? 'O' : e == '1' ? 'I' : e).join('');

// Using hash map

function correct(str, map = {'5':'S', '0':'O', '1':'I'}) {
    return [...str].map(e => map[e] || e).join('');
}
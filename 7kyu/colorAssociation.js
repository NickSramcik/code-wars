// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// Pass in an array of arrays
// Return an array of objects

// Map the array, with each element array turning into an object
// Set the key to first index, value to second index
// Return the new array

function colourAssociation(array) {
    return array.map(pair => {
        const obj = { [pair[0]]: pair[1] };
        return obj;
    });
}

// Refactored

const colourAssociation = array => array.map(([color, association]) => ({[color] : association}) );

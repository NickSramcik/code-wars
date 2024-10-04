// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// Pass in 2 strings
// Return a string

// Convert lamps into an array
// Loop through lamps array from 0 to drone.length - 1 (also ensure we don't loop past end of lamps array)
//   change current lamp from 'x' to 'o'
// Join lamps back into a string and return it

function flyBy(lamps, drone){
    lamps = [...lamps];

    for (i = 0; i < drone.length && i < lamps.length; i++) {
        lamps[i] = 'o';
    }

    return lamps.join('');
}

// Refactored with map

const flyByMap = (lamps, drone) => [...lamps].map((lamp, i) => i < drone.length ? 'o' : lamp).join('');

// Refactored with fill

const flyBy = (lamps, drone) => [...lamps].fill('o', 0, drone.length).join('');

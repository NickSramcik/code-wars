// It's your best friend's birthday! You already bought a box for the present. Now you want to pack the present in the box. You want to decorate the box with a ribbon and a bow.

// But how much cm of ribbon do you need?

// Write the method wrap that calculates that!

// A box has a height, a width and a length (in cm). The ribbon is crossed on the side with the largest area. Opposite this side (also the side with the largest area) the loop is bound, calculate with 20 cm more tape.

//   wrap(17,32,11) => 162
//   wrap(13,13,13) => 124
//   wrap(1,3,1) => 32
// Notes:
// height, width and length will always be >0

// Pass in 3 numbers
// Return a number

// Let perimeters be an array of each perimeter -> 2 * (x + y)
// Sort the perimeters, sum the 2 smallest, add 20, and return

function wrap(height, width, length) {
    const perimeters = [
        2 * (height + width),
        2 * (height + length),
        2 * (width + length)
    ]

    perimeters.sort((a, b) => a - b);
    return perimeters[0] + perimeters[1] + 20;
}

// Refactored

function wrap(height, width, length) {
    return 2 * (height + width + length + Math.min(height, width, length) + 10);
}

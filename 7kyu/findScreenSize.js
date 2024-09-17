// Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?

// The Challenge
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

// Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.

// Pass in a number and a string
// Return as string

// width / ratio = height

// set ratio to fraction by splitting it into an array with : separator, and dividing 1st term by 2nd term
// let height be width / ratio
// return width + 'x' + height

function findScreenHeight(width, ratio) {
    ratio = ratio.split(':')[0] / ratio.split(':')[1];
    const height = width / ratio;
    return width + 'x' + height;
}

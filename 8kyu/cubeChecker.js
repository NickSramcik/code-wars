// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

// pass in 2 numbers
// return boolean, whether input is a cube
// 8, 2 => true

// Return false if either input < 0
// Return whether cube root of volume == length

var cubeChecker = function (volume, side) {
    if (volume <= 0 || side <= 0) return false;
    return Math.cbrt(volume) == side;
};

// Refactored into arrow function using powers

const cubeChecker = (volume, side) => side ** 3 == volume && side > 0;

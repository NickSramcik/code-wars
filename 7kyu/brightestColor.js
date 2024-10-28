// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// For example,

// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:

// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
// Note that both input and output should use upper case for characters A, B, C, D, E, F.

// Pass in an array of strings
// Return a string

// Let unHex be a helper function that takes in a hex code and converts it to an integer
// Let colorCodes be a map of colors array, where each color becomes a subarray of RGB integers
// Let maxValue be the highest value of all the color codes
// Let maxIdx be the first index of that max value
// Return the maxIdx of the colors array

function unHex(hexCode) {
    return parseInt(hexCode, 16);
}

function brightest(colors) {
    const colorCodes = colors.map(color => {
        const red = unHex(color.slice(1, 3));
        const green = unHex(color.slice(3, 5));
        const blue = unHex(color.slice(5));
        return [red, green, blue];
    });

    const maxValues = colorCodes.map(rgb => Math.max(...rgb));
    const maxBrightness = Math.max(...maxValues);
    const maxIdx = maxValues.indexOf(maxBrightness);
    return colors[maxIdx];
}

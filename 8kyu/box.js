// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Pass in 3 numbers, dimensions of a box
// Return an array of 2 numbers, volume and surface area
// 4, 2, 6 -> [88, 48]

// Store volume as height * width * depth
// Store surface area as 2(height * width) + 2(width * depth) + 2(depth * height)
// Return an array of these stored values

function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height) + 2 * (height * depth) + 2 * (depth * width);
    const volume = width * height * depth;
    return [surfaceArea, volume];
}

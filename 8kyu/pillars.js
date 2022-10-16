// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


// Pass in number of pillars, distance between them (m), and pillard width (cm) (whole positive numbers)
// Return the distance cm between first and last pillar (not w/ width of outside pillars)
// (2, 20, 25) -> 2000

// multiply distance between 

function pillars(n, dist, width) {
    return n > 1 ? (n - 2) * width + (n - 1) * dist * 100 : 0;
  }

// Refactored arrow function

const pillars = (n, d, w) => n > 1 ? (n - 2) * w + (n - 1) * d * 100 : 0;

  
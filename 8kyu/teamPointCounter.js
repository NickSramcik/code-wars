// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    return games.reduce((acc, c) => {
      if (Number(c.charAt(0)) > Number(c.charAt(2))) {
        return acc + 3
      }else if (c.charAt(0) === c.charAt(2)) {
        return acc + 1
      }else {
        return acc
      }
    }, 0)
  }
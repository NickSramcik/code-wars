// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// Pass in a string
// Return the character in the string that appears most often
// 'ogres are like onionsss' -> 's'

// Create a hash map (create object with properties that count each character's occurences) 
// Loop through the map object and return the property with the highest value

function maxChar(string) {
    const map = {};
    let maxCount = 0,
        maxCharacter = null;
    
    for (character of string) {
      map[character] = map[character] + 1 || 1;
    };
    
    for (letter in map) {
      if (map[letter] > maxCount) {
        maxCount = map[letter];
        maxCharacter = letter;
      };
    };
    
    return maxCharacter;
  }
  
  
  // Test cases
  console.log(maxChar('aaaaaabcd'), 'a');
  console.log(maxChar('shrek savors slimy snakes'), 's');
  console.log(maxChar('abcdefghijklmnopb'), 'b');
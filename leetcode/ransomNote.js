// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// Pass in two strings, a magazine and a ransom note
// Return boolean, whether the note can be constructed with words from the magazine (each word used only once)
// "sit ad est sint", lorem magazine -> true

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// Create a hash map of the ransom note words
// Loop through the ransom note and lower the count on the hashmap for each word used
// If a word's value in the hash map ever hits 0, return false
// If the end of the loop is reached, the entire note was successfully constructed, so return true

function ransomNote(note, magazine) {
  const magMap = {};
  let magWords = magazine.split(' '),
      noteWords = note.split(' ');
  
  // Hashmap constructor loop
  for (word of magWords) {
    magMap[word] = magMap[word] + 1 || 1;
  };
  
  // Ransom Note evaluator loop
  for (word of noteWords) {
    if (!magMap[word]) return false;
    magMap[word] -= 1;
  };

  // If loop finishes, the note was fully constructed
  return true;
}

// TODO: Alter so that the hashmap ignores punctuation

// Test Cases

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);


// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });
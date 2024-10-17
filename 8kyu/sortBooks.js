// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

// Pass in an array of strings
// Return an array of strings

// Sort the array and return it

function sorter(textbooks) {
    return textbooks.sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
  
      // If both strings are equal when case is ignored, sort by ASCII value
      if (aLower === bLower) {
        return a < b ? -1 : 1;
      }
  
      // Otherwise, sort by case-insensitive comparison
      return aLower < bLower ? -1 : 1;
    });
  }

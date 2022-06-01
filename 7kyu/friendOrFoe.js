// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

//PREP

//Pass in an array of strings
//Return an array of strings that contain 4 letters
//['Bob', 'Mike', 'Shrek', 'Donkey'] -> ['Mike']
//Filter the array for elements of length 4

function friend(friends){
    return friends.filter(e => e.length == 4);
  }

//One liner

const friend = arr => arr.filter(e => e.length == 4); 


function abbrevName(name){
  //add first initial
  let initial = name[0].toUpperCase() + '.'
  //loop through string, find space
  let foundSpace = false
  for (i=1; i < name.length; i++) {
    if (foundSpace) {
      initial += name[i].toUpperCase()
      foundSpace = false
    }
    if (name[i] === ' ') {
      foundSpace = true
    }
  }
  return initial
}
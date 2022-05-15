// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


//PREP

// Take in a string
// Return string with aeiou removed
// 'jolly rancher' >> 'jlly rnchr'


// Split string into array
// Loop through array and filter out vowels
// Join back into a string and return

function disemvowel(str) {
    return str.split('').filter(e => !('aeiouAEIOU'.includes(e))).join('')
  }

// One Liner

const disemvowel = str => str.split('').filter(e => !('aeiou'.includes(e.toLowerCase()))).join('')
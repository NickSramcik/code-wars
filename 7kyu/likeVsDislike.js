// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

// Pass in a series of string inpits
// Return a string according to final input
// 'like, like, dislike, like, like' -> nothing
// Turn inputs into an array. Loop through each and check for each string 

function likeOrDislike(buttons) {
  let arr = [...buttons];
  var result = 'Nothing';
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === 'Like') {
      if (result === 'Like') result = 'Nothing';
      else result = 'Like';
    }
    if (arr[i] === 'Dislike') {
      if (result === 'Dislike') result = 'Nothing';
      else result = 'Dislike';
    }
  }return result;
}

// You don't need to turn the inputs into an array

function likeOrDislike(arr) {
  var result = 'Nothing';
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === 'Like') {
      if (result === 'Like') result = 'Nothing';
      else result = 'Like';
    }
    if (arr[i] === 'Dislike') {
      if (result === 'Dislike') result = 'Nothing';
      else result = 'Dislike';
    }
  }return result;
}

// Using a reduce

const likeOrDislike = arr => arr.reduce((state, cur) => state === cur ? 'Nothing' : cur, 'Nothing');
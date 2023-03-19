// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// function correctTail(bod, tail ;
  
//     sub = body.substr(bodylength-(tail.length)
    
//     if sub = tail) ;
//       return true
//     }
//     else 
//       return false
    
// Pass in 2 strings
// Return boolean, whether last character of first string equals second string
// 'shrek', 'k' => true

function correctTail(body, tail) {
    const sub = body.substr(body.length-(tail.length));
    
    if (sub == tail) {
      return true
    }else {
      return false;
    };
};

// Refactored into arrow function

const correctTail = (body, tail) => body.slice(-1) == tail;
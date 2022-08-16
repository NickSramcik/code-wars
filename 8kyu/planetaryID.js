// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }
    
//     return name;
//   }



// It's missing the breaks in the syntax

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
    }return name;
}

// More efficient

function getPlanetName(id){
    const planets = ['Sol', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']
    return planets[id];
}

// One line

const getPlanetName = id => ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id]

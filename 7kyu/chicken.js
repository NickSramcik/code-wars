// Oliver likes to roast a chicken on a Sunday Afternoon. He knows that in order to get it just how he wants it, he should roast it for 20 minutes for every 450g of uncooked weight plus an additional 20 minutes

// You are given a weight of a uncooked chicken in kg, return for how long it needs to be roasted - in hours and minutes, rounding up to the nearest five minutes.

// If the chicken is to be roasted for more than 2 hours then write hrs, otherwise write hr.

// If the chicken is to be roasted for less than an hour, only give the number of minutes.

// If the uncooked weight is 0, return "There is no chicken!"

// An example time is 2 hrs 45 mins

// Pass in a number, representing kg of chicken
// Return a string, the hours and minutes needed to roast it
// 1 -> '1 hr 5 mins'

// Store variable "minutes" and set it to input * 20/.45 (or * 44.4444) + 20
// Store variable "hours" and set it to minutes / 60 (rounded down)
// Subtract hours*60 from minutes
// Use conditionals to add the correct word after the number
// Concat hours & minutes and return

function cookingTime(weight) {
    if (!weight) return 'There is no chicken!'
    
    let minutes = Math.ceil((weight * 20 / 0.45 + 20) / 5) * 5,
        hours = Math.floor(minutes / 60);
    minutes -= hours * 60;

    if (hours > 1) hours = hours + ' hrs';
    else if (hours > 0) hours = hours + ' hr';
    else hours = '';

    if (minutes > 1) minutes = minutes + ' mins';
    else if (minutes > 0) minutes = minutes + ' min';
    else minutes = '';

    return hours + (hours && minutes ? ' ' : '') + minutes;
}

// Refactored using a stored array

function cookingTime(weight) {
    if (!weight) return 'There is no chicken!';

    const cookTime = Math.ceil( (weight * 44.44 + 20) / 5) * 5,
          hours = Math.floor(cookTime / 60),
          minutes = cookTime % 60,
          result = [];
    
    if (hours) result.push(hours + (hours > 1 ? ' hrs' : ' hr'));
    if (minutes) result.push(minutes + ' mins');

    return result.join(' ');
}

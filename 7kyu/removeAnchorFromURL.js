// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//Pass in a string, a URL
//Return the string with everything after a # removed
// 'www.shrek.com#onions' -> 'www.shrek.com'

//Find the index of #, store that index, and slice to it. 
//Account for strings without a #

function removeUrlAnchor(url){
    const anchor = url.indexOf('#');
    if (anchor < 0) return url;
    return url.slice(0, anchor);
  }

//One liner

const removeUrlAnchor = url => url.indexOf('#') < 0 ? url : url.slice(0, url.indexOf('#'));

//Using a split to put the string before and after the # into an array, return first element

const removeUrlAnchor = url => url.split('#')[0];
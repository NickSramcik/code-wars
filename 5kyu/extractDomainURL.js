// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// Pass in a URL - could start with http://, www. and etc.
// Return just the domain name
// 'https://www.ogres-have-layers.com/shrek' -> 'ogres-have-layers'


// Remove anything before a //
// Remove anything before and after a .


function domainName(url){
    url = url.split('//').pop();
    url = url.split('www').pop();
    return url.split('.').filter(e => e)[0];
  }

// Refactored into arrow function
// If you split with 'www.' instead of 'www' you won't need to filter out blank elements

const domainName = url => url.split('//').pop().split('www.').pop().split('.')[0];

// Using replace methods

const domainName = url => url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
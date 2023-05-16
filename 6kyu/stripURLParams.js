// Complete the method so that it does the following:
// Removes any duplicate query string parameters from the url (the first occurence should be kept)
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:
// stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'

// Pass in a string, a url with parameters
// Return a string, the URL without duplicates or specified parameters
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'

// Store the base url
// Create a set of parameters in the input
// Remove specified parameters from that set
// Add remaining parameters back into base URL string and return it


function stripUrlParams(url, paramsToStrip=[]){
    let result = url,
        params = [];
    if (url.includes('?')) {
        result = url.split('?')[0];
        params = url.split('?')[1].split('&');
    }

    const urlMap = {};

    for (param of params) {
        if (!urlMap[param[0]] && !paramsToStrip.includes(param[0])) {
            urlMap[param[0]] = param[2]};
    }

    if (Object.keys(urlMap).length) {
        result += '?';
        for (param in urlMap) {
            result += param + '=' + urlMap[param] + '&';
        }
    }

    if (result.slice(-1) == '&') return result.slice(0, -1)
    return result;
}

// let input = 'www.codewars.com?a=1&b=2&a=2';
// console.log(input.split('?')[1].split('&'));

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']), '==  www.codewars.com?a=1') 

// Karan's company makes software that provides different features based on the version of operating system of the user.

// To compare versions, Karan currently parses both version numbers as floats.

// While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

// Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

// Specification notes:

// Versions are provided as strings of one or more integers separated by ..
// The version strings will never be empty.
// The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
// Two versions which differ only by trailing zero sub-versions will never be given.

// Pass in 2 strings
// Return boolean

// Split the strings to arrays with . separator to store versions and sub-versions
// If sub-version is empty, set it to 0


function compareVersions (version1, version2) {
    const main1 = Number(version1.split('.')[0]),
          main2 = Number(version2.split('.')[0]),
          sub1 = Number(version1.split('.')[1] || 0),
          sub2 = Number(version2.split('.')[1] || 0);

    return main1 > main2 || main1 == main2 && sub1 >= sub2;
}

// ^Works but this challenge keeps adding extra sub versions which breaks it >:[

// Split each version into arrays with . separator
// Map each array to convert value to number, if NaN it should be 0
// Loop through arr1
    // If arr1 > arr2 return false
    // If arr1 > arr2 return true
    // ~~Loop will continue to next subversion if current steps are equal~~
// Loop has ended, v1 is larger or equal in this case, so return true

function compareVersions (version1, version2) {
    const arr1 = version1.split('.').map(e => Number(e)),
          arr2 = version2.split('.').map(e => Number(e)),
          maxLength = Math.max(arr1.length, arr2.length);
    
    for (i = 0; i < maxLength; i++) {
        const sub1 = arr1[i] || 0,
              sub2 = arr2[i] || 0;

        if (sub1 < sub2) return false;
        if (sub1 > sub2) return true;
    }

    return true;
}

// Refactored using locale compare

function compareVersions (version1, version2) {
    return version1.localeCompare(version2, undefined, {numeric: true}) >= 0;
}

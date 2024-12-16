// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

// Pass in 2 arrays of strings
// Return 1 sorted array of strings

// Set santasList to a new set
// Remove duplicates from children
// Filter children for strings that are in santasList
// Sort children and return it

function findChildren(santasList, children) {
    santasList = new Set(santasList);
    children = Array.from(new Set(children));
    return children.filter(child => santasList.has(child)).sort();
}

// With a for loop

function findChildren(santasList, children) {
    let gifted = new Set(); 
    santasList = new Set(santasList);
    
    for (child of children) {
        if (santasList.has(child)) gifted.add(child);
    }

    return Array.from(gifted).sort();
}

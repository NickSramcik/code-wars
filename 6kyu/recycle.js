// You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order of their respective objects was in the input list
// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

// Pass in an array of objects
// Return an array with 4 sub-arrays (one array for each recycle bin)

// Bin order: Paper -> Glass -> Organic -> Plastic

// Let paperBin, glassBin, organicBin, and plasicBin be empty arrays
// Loop through trash
//    Check trash material, and push trash type to correct bin array
// Return an array containing each bin

function recycle(trash) {
    const paperBin = [];
    const glassBin = [];
    const organicBin = [];
    const plasticBin = [];

    for (let item of trash) {
        if (item.material == 'paper' || item.secondMaterial == 'paper')
            paperBin.push(item.type);
        if (item.material == 'glass' || item.secondMaterial == 'glass')
            glassBin.push(item.type);
        if (item.material == 'organic' || item.secondMaterial == 'organic')
            organicBin.push(item.type);
        if (item.material == 'plastic' || item.secondMaterial == 'plastic')
            plasticBin.push(item.type);
    }

    return [paperBin, glassBin, organicBin, plasticBin];
}

// Refactor this with switch case

function recycle(trash) {
    const paperBin = [];
    const glassBin = [];
    const organicBin = [];
    const plasticBin = [];

    for (let item of trash) {
        switch (item.material) {
            case 'paper':
                paperBin.push(item.type);
                break;
            case 'glass':
                glassBin.push(item.type);
                break;
            case 'organic':
                organicBin.push(item.type);
                break;
            case 'plastic':
                plasticBin.push(item.type);
                break;
        }

        switch (item.secondMaterial) {
            case 'paper':
                paperBin.push(item.type);
                break;
            case 'glass':
                glassBin.push(item.type);
                break;
            case 'organic':
                organicBin.push(item.type);
                break;
            case 'plastic':
                plasticBin.push(item.type);
                break;
        }
    }

    return [paperBin, glassBin, organicBin, plasticBin];
}

// Refactored with array maps

const recycleBins = ['paper', 'glass', 'organic', 'plastic'];

function recycle(trash) {
    return recycleBins
            .map(category => trash.filter(object => category == object.material || category == object.secondMaterial)
            .map(object => object.type));
}

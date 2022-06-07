// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//PREP

//Pass in a string of letters (DNA sequence)
//Return a string of letters that complements the sequence
// 'CCGGTT' => 'GGCCAA'

// Replace each letter with its complementary in lowercase, (to prevent double replacements)
// Return the string converted back to uppercase


//This function works but codewars doesn't support replaceAll  >:(
function DNAStrand(dna){
    dna = dna.replaceAll('G', 'c');
    dna = dna.replaceAll('C', 'g');
    dna = dna.replaceAll('T', 'a');
    dna = dna.replaceAll('A', 't');
    return dna.toUpperCase();
  }

//Reworked so codewards accepts it

function DNAStrand(dna){
    for (let i = 0; i < dna.length; i++) {
        dna = dna.replace('G', 'c');
        dna = dna.replace('C', 'g');
        dna = dna.replace('T', 'a');
        dna = dna.replace('A', 't');    
    }return dna.toUpperCase();
  }

//Using map and an object

function DNAStrand(dna){
    const pairs = {'A': 'T', 
                   'T': 'A', 
                   'C': 'G', 
                   'G': 'C'};
    return dna.split('').map(letter => pairs[letter]).join('');
  }
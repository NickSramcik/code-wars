// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//Pass in a string, consisting of DNA base letters (GCAT)
//Return a string consisting of the matching RNA base letters (GCAU)
//GGCTTA -> GGCUUA

//Split the string into an array and map it so that Ts are changed to U
//Join back into a string and return

function DNAtoRNA(dna) {
    return dna.split('').map(e => e == 'T' ? 'U' : e).join('');
  }

//One liner 

const DNAtoRNA = dna => dna.split('').map(e => e == 'T' ? 'U' : e).join('');

//Splitting around Ts and joining with Us

const DNAtoRNA = dna => dna.split('T').join('U');
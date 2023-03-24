// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

// Pass in as string with numbers, letters, underscores, periods
// Return just the file name after the numbers and the file extension '.'
// '1231231223123131_myFile.tar.gz2' -> 'myFile.tar'

// Find the index of the first underscore
// Store a result string
// Loop through input, starting from index of first underscore
// Add each character to the result string until the second period is reached

class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        const start = dirtyFileName.indexOf('_');
        let periodCount = 0,
            fileName = '';

        for (let i = start + 1; i < dirtyFileName.length; i++) {
            if (dirtyFileName[i] == '.') periodCount++;
            if (periodCount < 2) fileName += dirtyFileName[i];
        }

        return fileName;
    }
}

// Refactored using last index and slice

class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        const numSlice = dirtyFileName.indexOf('_'),
            extSlice = dirtyFileName.lastIndexOf('.');
        return dirtyFileName.slice(numSlice + 1, extSlice);
    }
}

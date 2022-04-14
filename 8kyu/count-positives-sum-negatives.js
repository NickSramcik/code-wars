//Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    //loop through array
    let posNegNums = [0,0]
    //check empty or null
    if ( input === null || input.length === 0) {
        return []
    }
    else {
        input.forEach((num, i) => {
            if (num > 0) {
                //count positives
                posNegNums[0]++
            }
             //sum negatives
            else if (num < 0) {
                posNegNums[1] += num
            }
        })
        //return array
        return posNegNums
    }
  }
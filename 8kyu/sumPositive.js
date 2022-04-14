function positiveSum(arr) {
    return arr.length > 0 ? arr.reduce((acc, cur) => {(cur > 0) ? acc + cur : acc}, 0) : 0
  }





function positiveSum(arr) {
  if (arr.length > 0) {
    return arr.reduce((acc, cur) => {
      if (cur > 0) {
        return acc + cur
      }else {
        return acc
      }
    }, 0)
  }
  else return 0
}
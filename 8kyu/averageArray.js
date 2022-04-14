function find_average(array) {
    let total = 0 
    if (array === []) return 0
    else {
        total = array.forEach(num => total += num)
        return total / array.length;
    }
  }
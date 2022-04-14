// Sum Numbers
function sum (numbers) {
    let sum = 0
    if (numbers == []) {
        return 0
    }
    else {
        numbers.forEach(num => {
            sum += num
        })
        return sum
    }
};
// direct recursion
const rCalculateFactorial = (n) => {
    if (n <= 1) return 1
    return n * rCalculateFactorial(n - 1)
}

const calculateFactorialLoop = (n) => {
    let result = 1
    while (n > 1) {
        result *= n
        n--
    }
    return result
}


// Tail Recursion ** Node doesn't optimize for this so linear space complexity (O(n))
const calculateFactorial = (n, acc = 1) => {
    if (n <= 1) return acc
    return calculateFactorial(n - 1, acc * n)
}

module.exports = calculateFactorial
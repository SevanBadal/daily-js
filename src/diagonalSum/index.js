function diagonalSum(matrix) {
    const columnBounds = matrix[0]?.length ? matrix[0].length - 1 : 0
    const rowBounds = matrix.length - 1// assuming square or rectangular matrix
    let i = 0, j = 0, sum = 0
    while (i <= rowBounds && j <= columnBounds) {
        sum += matrix[i][j]
        i++
        j++
    }
    return sum
}

module.exports = diagonalSum

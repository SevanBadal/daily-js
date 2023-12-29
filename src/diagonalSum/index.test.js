const diagonalSum = require('./index')

describe('diagonalSum', () => {
    test('should return correct sum along the main diagonal in a 3x3 matrix', () => {
        expect(diagonalSum([[1, 2, 3],[4, 5, 6],[7, 8, 9]])).toEqual(15)
    })
    test('should return correct sum along the main diagonal in a 2x2 matrix', () => {
        expect(diagonalSum([[1, 2], [3, 4]])).toEqual(5)
    })
    test('should return 0 when matrix is empty', () => {
        expect(diagonalSum([])).toEqual(0)
    })
    test('should return correct sum along the main diagonal in a 3x2 matrix', () => {
        expect(diagonalSum([[1, 2], [3, 4], [5, 6]])).toEqual(5)
    })
    test('should return correct sum along the main diagonal in a 1x3 matrix', () => {
        expect(diagonalSum([[1, 2, 3]])).toEqual(1)
    })
    test('should return correct sum along the main diagonal in a 3x1 matrix', () => {
        expect(diagonalSum([[1], [2], [3]])).toEqual(1)
    }) 
})
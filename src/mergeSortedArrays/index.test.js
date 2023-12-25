const mergeSortedArrays = require('./index');

describe('mergeSortedArrays', () => {
    it('should return sorted array given to arrays of different lengths', () => {
        expect( mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toEqual([0, 3, 4, 4, 6, 30, 31])
    })
    it('should return sorted array given one empty array (first param)', () => {
        expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1,2,3])
    })
    it('should return sorted array given one empty array (second param)', () => {
        expect(mergeSortedArrays([5], [])).toEqual([5])
    })
    it('should return empty array given empty arrays', () => {
        expect(mergeSortedArrays([], [])).toEqual([])
    })
})
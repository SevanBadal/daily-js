const calculateStockSpans = require('./index');

describe('calculateStockSpans', () => {
    it('should return correct spans for none empty list', () => {
        expect(calculateStockSpans([100, 80, 60, 70, 60, 75, 85])).toEqual([1, 1, 1, 2, 1, 4, 6])
    })
    it('should return correct spans for none empty list', () => {
        expect(calculateStockSpans([90, 40, 20, 30, 80, 60, 100])).toEqual([1, 1, 1, 2, 4, 1, 7])
    })
})
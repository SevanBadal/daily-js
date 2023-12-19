const calculateFactorial = require('./index');

describe('calculateFactorial', () => {
    it('should return 1 when n is 0', () => {
        expect(calculateFactorial(0)).toBe(1)
    })

    it('should return 1 when n is 1', () => {
        expect(calculateFactorial(1)).toBe(1)
    })

    it('should return 2 when n is 2', () => {
        expect(calculateFactorial(2)).toBe(2)
    })

    it('should return 6 when n is 3', () => {
        expect(calculateFactorial(3)).toBe(6)
    })

    it('should return 24 when n is 4', () => {
        expect(calculateFactorial(4)).toBe(24)
    })

    it('should return 120 when n is 5', () => {
        expect(calculateFactorial(5)).toBe(120)
    })

    it('should return 720 when n is 6', () => {
        expect(calculateFactorial(6)).toBe(720)
    })

    it('should return 5040 when n is 7', () => {
        expect(calculateFactorial(7)).toBe(5040)
    })

    it('should return 40320 when n is 8', () => {
        expect(calculateFactorial(8)).toBe(40320)
    })

    it('should return 362880 when n is 9', () => {
        expect(calculateFactorial(9)).toBe(362880)
    })

    it('should return 3628800 when n is 10', () => {
        expect(calculateFactorial(10)).toBe(3628800)
    })

    it('should return 39916800 when n is 11', () => {
        expect(calculateFactorial(11)).toBe(39916800)
    })

    it('should return 479001600 when n is 12', () => {
        expect(calculateFactorial(12)).toBe(479001600)
    })

    it('should return 6227020800 when n is 13', () => {
        expect(calculateFactorial(13)).toBe(6227020800)
    })

    it('should return 87178291200 when n is 14', () => {
        expect(calculateFactorial(14)).toBe(87178291200)
    })
})
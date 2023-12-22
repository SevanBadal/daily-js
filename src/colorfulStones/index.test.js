const colorfulStones = require('./index');

describe('colorfulStones', () => {
    it('should return singleton letter when no tie', () => {
        expect(colorfulStones(['A', 'B', 'A', 'B', 'C', 'A'])).toEqual(['A']);
    })
    it('should return empty array given an empty array', () => {
        expect(colorfulStones([])).toEqual([]);
    })
    it('should return sorted keys when given a tie', () => {
        expect(colorfulStones(['A', 'C', 'B', 'Z', 'A', 'Z'])).toEqual(['A', 'Z']);
    })
})
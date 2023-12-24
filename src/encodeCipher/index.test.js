const encodeCipher = require('./index');

describe('encodeCipher', () => {
    it('should return proper shift with non letters in place', () => {
        expect(encodeCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
    it('should return proper shift when shift value is negative', () => {
        expect(encodeCipher('Zebra', -1)).toBe('Ydaqz')
    })
    it('should return same value when shifted 26 positions', () => {
        expect(encodeCipher('Coding Challenges', 26)).toBe('Coding Challenges')
    })
    it('should return same value when shifted 52 positions', () => {
        expect(encodeCipher('Coding Challenges', 52)).toBe('Coding Challenges')
    })
    it('should wrap around the alphabet when shift value is 27', () => {
        expect(encodeCipher('XYZ', 27)).toBe('YZA')
    })
})
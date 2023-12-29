const encodeDuplicates = require('./index');

describe('encodeDuplicates', () => {
    it('is case insensitive', () => {
        expect(encodeDuplicates('Success')).toEqual(")())())")
    })
    it('works on string of all unique characters', () => {
        expect(encodeDuplicates('din')).toEqual("(((")
    })
    it('works on special characters', () => {
        expect(encodeDuplicates('(( @')).toEqual("))((")
    })
})
const isDelimiterBalanced = require('./index');

describe('isDelimiterBalanced', () => {
    it('should return true when given valid delimiters', () => {
        expect(isDelimiterBalanced('(()){}')).toBe(true)
    })
    it('should return true when given valid delimiters', () => {
        expect(isDelimiterBalanced('[{()}]')).toBe(true)
    })
    it('should return false when given mismatched delimiters', () => {
        expect(isDelimiterBalanced('({[}])')).toBe(false)
    })
    it('should return false when missing a closing delimiter', () => {
        expect(isDelimiterBalanced('((){}[')).toBe(false)
    })
    it('should return true when given an empty string', () => {
        expect(isDelimiterBalanced('')).toBe(true)
    })
})
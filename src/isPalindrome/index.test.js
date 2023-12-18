const isPalindrome = require('./index');

describe('isPalindrome', () => {
    it('should return true when ignoring non alpha numeric values', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toEqual(true)
    })
    it('should return true ignoring case', () => {
        expect(isPalindrome('Racecar')).toEqual(true)
    })
    it('should return false when not a palindrome', () => {
        expect(isPalindrome('hello')).toEqual(false)
    })
    it('should return true when not a palindrome', () => {
        expect(isPalindrome('hello')).toEqual(false)
    })
    it('should return true when given an empty string', () => {
        expect(isPalindrome('')).toEqual(true)
    })
})
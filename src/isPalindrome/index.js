const isPalindrome = (string) => {
    const alphaNumericString = string.replace(/\W/g,'').toLowerCase()
    const reversedAlphaNumericString = alphaNumericString.split('').reverse().join('')
    return alphaNumericString === reversedAlphaNumericString
}

module.exports = isPalindrome
// lowercase range: 97 - 122
// uppercase range: 65 -> 90
// mod 26
const charCodeInfo = (charCode) => {
    const isLower = charCode >= 97 && charCode <= 122
    const isUpper = charCode >= 65 && charCode <= 90
    return {isLower, isUpper}
}
const encodeCipher = (stringValue, shiftValue) => {
    // split string to make a list
    const letterList = stringValue.split('')
    // iterate over strings to return new list of either unmodified non letter characters or shifted letter values
    const lettersShifted = letterList.map(letter =>{
        // utilize character codes to find isolated ranges of lower and uppercase letters
        const charCode = letter.charCodeAt(0)
        const {isLower, isUpper} = charCodeInfo(charCode)
        if (isLower || isUpper) {
            // calculate the base code for normalization
            const baseCode = isLower ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            // calculate the normalized shift value, ensuring it's within the range [0, 25]
            const normalizedShift = ((charCode - baseCode + shiftValue) % 26 + 26) % 26;
            // calculate the wrapped shift value by adding the normalized shift to the base code
            const wrappedShiftValue = baseCode + normalizedShift;
            // convert the wrapped shift value back to a character and return it
            return String.fromCharCode(wrappedShiftValue);
        }
        return letter
    })
    return lettersShifted.join('')
 
}

module.exports = encodeCipher
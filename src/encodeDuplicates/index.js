const encodeDuplicates = (sentence) => {
    const counts = sentence.split("").reduce((acc, letter) => {
        const lowercase = letter.toLowerCase()
        acc[lowercase] = acc[lowercase] ? acc[lowercase] + 1 : 1
        return acc
    }, {})
    return sentence.split("").map(letter => {
        const lowercase = letter.toLowerCase()
        return counts[lowercase] > 1 ? ")" : "("
    }).join("")
}

module.exports = encodeDuplicates
const calculateStockSpans = (listOfDailyStockPrices) => {
    const spanStack = []
    return listOfDailyStockPrices.map((currentPrice, i) => {
        let currentSpan
        while(spanStack.length > 0 && spanStack[spanStack.length - 1].price <= currentPrice) {
            spanStack.pop()
        }
        if (spanStack.length === 0) {
            currentSpan = i + 1
        } else {
            currentSpan = i - spanStack[spanStack.length - 1].i
        }
        spanStack.push({i, price: currentPrice})
        return currentSpan
    })
}

module.exports = calculateStockSpans
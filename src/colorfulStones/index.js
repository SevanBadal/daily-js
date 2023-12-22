const colorfulStones = (stoneList) => {
    const counterObject = {};

    // Lowercase and count
    stoneList.forEach(stone => {
        const lowerStone = stone.toLowerCase();
        // initialize count or increment
        counterObject[lowerStone] = (counterObject[lowerStone] || 0) + 1;
    });

    // Get array of values
    let lowestValue = Infinity;
    for (const count of Object.values(counterObject)) {
        if (count < lowestValue) {
            lowestValue = count;
        }
    }

    // Find keys with the lowest count and sort them
    return Object.entries(counterObject)
                 .filter(([key, value]) => value === lowestValue)
                 .map(([key]) => key.toUpperCase())
                 .sort();
};

module.exports = colorfulStones
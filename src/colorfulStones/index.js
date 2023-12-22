const colorfulStones = (stoneList) => {
    const counterObject = {};

    // Lowercase and count
    stoneList.forEach(stone => {
        const lowerStone = stone.toLowerCase();
        // initialize count or increment
        counterObject[lowerStone] = (counterObject[lowerStone] || 0) + 1;
    });

    // Get array of values
    let highestValue = 0;
    for (const count of Object.values(counterObject)) {
        if (count > highestValue) {
            highestValue = count;
        }
    }

    // Find keys with the highest count and sort them
    return Object.entries(counterObject)
                 .filter(([key, value]) => value === highestValue)
                 .map(([key]) => key.toUpperCase())
                 .sort();
};

module.exports = colorfulStones
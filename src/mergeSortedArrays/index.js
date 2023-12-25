const mergeSortedArrays = (listA, listB) => {
    // short circuit if one list is empty (assuming both arrays are sorted)
    if (listA.length === 0) return listB
    if (listB.length === 0) return listA
    // initialize array for quicksort
    const mergedList =  [...listA, ...listB]

    return mergedList.reduce((sortedArray, current) => {
        // no elements in our sortedArray (accumulator), so push current in
        if (sortedArray.length === 0) {
            sortedArray.push(current)
        } else {
            // mocking insertion sort alg here
            let inserted = false
            // iterate over our sorted list (accumulator)
            for (let i = 0; i < sortedArray.length; i++) {
                if (current < sortedArray[i]) {
                    // insert our current at index i without deletion (0)
                    sortedArray.splice(i, 0, current)
                    inserted = true
                    break
                }
            }
            // if the current wasn't inserted then it must be the highest value so push it
            if (!inserted) {
                sortedArray.push(current)
            }
        }
        return sortedArray
    }, [])
}

module.exports = mergeSortedArrays
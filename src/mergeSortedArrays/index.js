const mergeSortedArrays = (listA, listB) => {
    // short circuit if one list is empty (assuming both arrays are sorted)
    if (listA.length === 0) return listB
    if (listB.length === 0) return listA
    const mergedList =  [...listA, ...listB]
    return selectionSort(mergedList)
}

const insertionSort = (mergedList) => {
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

const selectionSort = (unsorted) => {
    const tempArray = [...unsorted]
    let sortedArray = []
    // loop over incoming list, removing smallest element one iteration at a time
    while (tempArray.length > 0) {
        // find smallest element and index in current iteration
        const smallest = tempArray.reduce((acc, value, index) => {
            if (value < acc.value) {
                return {
                    value,
                    index
                }
            }
            return acc
        }, {value: Infinity, index: -1})
        // add smallest element to sorted array
        sortedArray.push(smallest.value)
        // remove smallest element from incoming list
        tempArray.splice(smallest.index, 1)
    }
    return sortedArray
}

module.exports = mergeSortedArrays
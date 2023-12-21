const board = [
	['O', 'O', 'X'],
	['O', 'X', 'X'], 
	['X', 'X', 'O']
]
const columnSecondWinner = [
	['X', 'O', 'X'],
	['', 'O', ''], 
	['X', 'O', 'X']
]

// _determineWinner is my second pass
// Best case runtime is the same, worst case is a little worse than determineWinner but equivalent in terms of amortized time complexity
// Basically, they are not very efficient but _determineWinner is a bit easier to read!
const _determineWinner = (board) => {
	const size = board.length

	// Check if all elements in a single line are the same and non-empty
	// Double check for empty '' cells because three '' isn't a win!! 
	const isWinningLine = (line) => {
		return line.every(cell => cell === line[0] && cell !== '')
	}

	// Check rows and columns
	for (let i = 0; i < size; i++) {
		const row = board[i]
		const column = board.map(row => row[i])

		if (isWinningLine(row)) return row[0]
		if (isWinningLine(column)) return column[0]
	}

	// Check diagonals
	const topLeftToBottomRightline = board.map((row, i) => row[i])
	const topRightToBottomLeftLine = board.map((row, i) => row[size - 1 - i])

	if (isWinningLine(topLeftToBottomRightline)) return topLeftToBottomRightline[0]
	if (isWinningLine(topRightToBottomLeftLine)) return topRightToBottomLeftLine[0]

	// Check for tie
	const isBoardFull = board.every(row => row.every(cell => cell !== ''))
	if (isBoardFull) return 'Tie'

	// No winner or tie
	return 'incomplete'
}

const determineWinner = (board) => {
	const size = board.length
	let winList = []
	let isTie = true
	
	// Build row winning lines and track tie possibility
	board.every(row => {
		row.every(currentMove => {
			if (currentMove === '') isTie = false
			if (winList.length === 0){
				return winList.push(currentMove)
			} 
			const [lastMove] = winList.slice(-1)
			if (lastMove === currentMove) {
				return winList.push(currentMove)
			} else {
				winList = []
				return false
			}
		})
		if (winList.length === 3) return false
		return true
	})
	
	// Check row winner
	if (winList.length === 3) {
		const [winner] = winList
		return winner
	}
	
	// Check for tie if no row winner
	if (isTie) {
		return 'Tie'
	}
	
	// Build column winning line
	for (let x = 0; x < size; x++) {
		winList = []
		for (let y = 0; y < size; y++) {
			let currentMove = board[y][x]
			const [lastMove] = winList.slice(-1)
			if (winList.length === 0 || lastMove === currentMove) {
				winList.push(currentMove)
			} 
		}
		if (winList.length === 3) break
	}
	
	// Check for column winner
	if (winList.length === 3) {
		const [winner] = winList
		return winner
	} else {
		winList = []
	}
	
	// Build diagonal line from top left to bottom right
	for (let x = 0; x < size; x++) {
		const currentMove = board[x][x]
		const [lastMove] = winList.slice(-1)
		if (winList.length === 0 || currentMove === lastMove) {
			winList.push(currentMove )
		} else {
			winList = []
		}
	}
	
	// Check for diagonal winner
	if (winList.length === 3) {
		const [winner] = winList
		return winner
	} else {
		winList = []
	}
	
	// Build winning diagonal from top right to bottom left
	for (let x = 0; x < size; x++) {
		const currentMove = board[x][size - 1 - x]
		const [lastMove] = winList.slice(-1)
		if (winList.length === 0 || currentMove === lastMove) {
			winList.push(currentMove )
		} else {
			winList = []
		}
	}
	
	// Check for diagonal winner
	if (winList.length === 3) {
		const [winner] = winList
		return winner
	}
	
	// If we made it this far, the game wasn't completed!
	return 'incomplete'
}



module.exports = determineWinner

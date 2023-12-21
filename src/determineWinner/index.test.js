const determineWinner = require('./index')

const rowTopWinner = [
	['X', 'X', 'X'],
	['O', '', 'O'], 
	['X', '', 'O']
]
const rowMiddleWinner = [
	['X', '', 'X'],
	['O', 'O', 'O'], 
	['X', '', 'O']
]
const rowBottomWinner = [
	['X', '', 'X'],
	['', 'O', 'O'], 
	['X', 'X', 'X']
]
const columnFirstWinner = [
	['X', '', 'X'],
	['X', 'O', 'O'], 
	['X', '', 'X']
]
const columnSecondWinner = [
	['X', 'O', ''],
	['', 'O', 'O'], 
	['X', 'O', 'X']
]
const columnThirdWinner = [
	['X', 'O', 'X'],
	['', '', 'X'], 
	['X', 'O', 'X']
]
const rightDiagonalWinner = [
	['O', '', 'X'],
	['', 'O', 'X'], 
	['X', 'O', 'O']
]
const leftDiagonalWinner = [
	['O', '', 'X'],
	['', 'X', 'X'], 
	['X', 'O', 'O']
]
const tieGame = [
	['O', 'X', 'X'],
	['X', 'O', 'O'], 
	['O', 'O', 'X']
]
const incompleteGame = [
	['O', '', 'X'],
	['X', 'O', 'O'], 
	['O', 'O', 'X']
]
describe('determineWinner', () => {
	test('should return winner in top row ', () => {
		expect(determineWinner(rowTopWinner)).toBe('X')
	})
	test('should return winner in middle row ', () => {
		expect(determineWinner(rowMiddleWinner)).toBe('O')
	})
	test('should return winner in bottom row ', () => {
		expect(determineWinner(rowBottomWinner)).toBe('X')
	})
	test('should return winner in first column', () => {
  		expect(determineWinner(columnFirstWinner)).toBe('X')
	})
	test('should return winner in second column', () => {
		expect(determineWinner(columnSecondWinner)).toBe('O')
	})
	test('should return winner in third column', () => {
		expect(determineWinner(columnThirdWinner)).toBe('X')
	})
	test('should return winner in top left to bottom right diagonal', () => {
		expect(determineWinner(rightDiagonalWinner)).toBe('O')
	})
	test('should return winner in top right to bottom left diagonal', () => {
		expect(determineWinner(leftDiagonalWinner)).toBe('X')
	})
	test('test for tie game', () => {
		expect(determineWinner(tieGame)).toBe('Tie')
	})
	test('test for incomplete game', () => {
		expect(determineWinner(incompleteGame)).toBe('incomplete')
	})
});
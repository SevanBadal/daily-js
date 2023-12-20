const solveMaze = require('./index');

const maze = [
    [1, 0, 0, 1], 
    [1, 1, 0, 1], 
    [0, 1, 1, 0], 
    [1, 0, 1, 1]
]

describe('solveMaze', () => {
    it('should return empty array (null) if no path is found but both start and end are valid', () => {
        expect(solveMaze(maze, [0,0], [3,0])).toEqual([])
    })
    it('should return empty array (null) if start path is on wall', () => {
        expect(solveMaze(maze, [0,1], [3,2])).toEqual([])
    })
    it('should return empty array (null) if no end path is on wall', () => {
        expect(solveMaze(maze, [0,0], [3,1])).toEqual([])
    })
    it('should return empty array (null) if start is out of bounds', () => {
        expect(solveMaze(maze, [10,10], [3,1])).toEqual([])
    })
    it('should return path if valid start and end points for given maze', () => {
        expect(solveMaze(maze, [0,0], [3,2])).toEqual([[ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ], [ 3, 2 ]])
    })
    it('should return path if valid start and end points for given maze', () => {
        expect(solveMaze(maze, [0,0], [3,3])).toEqual([[ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ], [ 3, 2 ], [3, 3]])
    })
})
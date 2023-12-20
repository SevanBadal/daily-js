const solveMaze = require('./index');
const maze = [
    [1, 0, 0, 1], 
    [1, 1, 0, 1], 
    [0, 1, 1, 0], 
    [0, 0, 1, 1]
]

describe('solveMaze', () => {
    it('should return empty array (null) if no path is found', () => {
        expect(solveMaze(maze, [0,0], [3,1])).toEqual([])
    })
    it('should return path if valid start and end points for given maze', () => {
        expect(solveMaze(maze, [0,0], [3,2])).toEqual([[ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ], [ 3, 2 ]])
    })
    it('should return path if valid start and end points for given maze', () => {
        expect(solveMaze(maze, [0,0], [3,3])).toEqual([[ 0, 0 ], [ 1, 0 ], [ 1, 1 ], [ 2, 1 ], [ 2, 2 ], [ 3, 2 ], [3, 3]])
    })
})
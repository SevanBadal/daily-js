const solveMaze = require('./index');
const maze = [
    [1, 0, 0, 1], 
    [1, 1, 1, 1], 
    [0, 1, 0, 1], 
    [1, 1, 1, 1]
]

describe('solveMaze', () => {
    it('should return one of the predefined valid paths for a given start and end point', () => {
        const validPaths = [
            // Add your array of valid paths here
            [[0, 0], [1, 0], [1, 1], [2,1], [3,1], [3,2], [3,3]],
            [[0, 0], [1, 0], [1, 1], [1,2], [1,3], [2,3], [3,3]]
        ];

        const resultPath = solveMaze(maze, [0, 0], [3, 3]);

        const isOneOfValidPaths = validPaths.some(validPath => 
            JSON.stringify(validPath) === JSON.stringify(resultPath)
        );

        expect(isOneOfValidPaths).toBe(true);
    });
    it('should return [] if start is out of bounds', () => {
        expect(solveMaze(maze, [10, 10], [3, 3])).toEqual([]);
    });
    it('should return [] if end is out of bounds', () => {
        expect(solveMaze(maze, [0, 0], [10, 10])).toEqual([]);
    });
    it('should return [] if end is a wall', () => {
        expect(solveMaze(maze, [0, 0], [2, 2])).toEqual([]);
    });
})
const solveMaze = (maze, start, end) => {
    const rows = maze.length;
    const columns = maze[0].length;
    const visited = new Array(rows).fill(false).map(() => new Array(columns).fill(false));
    const trail = new Array(rows).fill(null).map(() => new Array(columns).fill(null));
    const queue = [start];
    visited[start[0]][start[1]] = true;
    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (x === end[0] && y === end[1]) {
            // current coordinate is the end coordinate!
            // filter out the null values in the trail array
            const path = trail.reduce((acc, curr) => {
                const visitedCoordinates = curr.filter(x => !!x)
                return [...acc, ...visitedCoordinates]
            },[])
            return [...path, [x, y]]
        }
        // attempt to traverse the maze in each direction
        directions.forEach(([dx, dy]) => {
            const newX = x + dx;
            const newY = y + dy;
            const notOutOfLowerBounds = newX >= 0 && newY >= 0 
            const notOutOfUpperBounds = newX < rows && newY < columns
            // need to check visited last to ensure we aren't out of bounds!
            if (notOutOfLowerBounds && notOutOfUpperBounds && maze[newX][newY] === 1 && !visited[newX][newY]) {
                queue.push([newX, newY]);
                visited[newX][newY] = true;
                trail[newX][newY] = [x, y];
            }
        })
    }

    return [];
}

module.exports = solveMaze
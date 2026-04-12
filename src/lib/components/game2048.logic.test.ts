import { describe, expect, test } from 'bun:test';
import {
	GRID_SIZE,
	type Grid,
	type Tile,
	applyMove,
	canMove,
	getEmptyCells,
	makeGrid,
	spawnTile,
	swipeDirection,
	tileStyle,
} from './game2048.logic';

let idCounter = 0;
const nextId = () => idCounter++;

function tile(id: number, value: number, row: number, col: number): Tile {
	return { id, value, row, col, isNew: false, isMerged: false };
}

function emptyGrid(): Grid {
	return Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
}

describe('makeGrid', () => {
	test('places tiles at correct positions', () => {
		const tiles = [tile(0, 2, 0, 0), tile(1, 4, 3, 3)];
		const grid = makeGrid(tiles);
		expect(grid[0][0]?.value).toBe(2);
		expect(grid[3][3]?.value).toBe(4);
		expect(grid[0][1]).toBeNull();
	});

	test('returns a 4x4 grid', () => {
		const grid = makeGrid([]);
		expect(grid.length).toBe(GRID_SIZE);
		expect(grid[0].length).toBe(GRID_SIZE);
	});
});

describe('getEmptyCells', () => {
	test('returns all cells for empty grid', () => {
		const cells = getEmptyCells(emptyGrid());
		expect(cells.length).toBe(GRID_SIZE * GRID_SIZE);
	});

	test('excludes occupied cells', () => {
		const grid = emptyGrid();
		grid[0][0] = tile(0, 2, 0, 0);
		grid[1][1] = tile(1, 4, 1, 1);
		expect(getEmptyCells(grid).length).toBe(GRID_SIZE * GRID_SIZE - 2);
	});

	test('returns empty array when grid is full', () => {
		const tiles: Tile[] = [];
		for (let r = 0; r < GRID_SIZE; r++)
			for (let c = 0; c < GRID_SIZE; c++)
				tiles.push(tile(r * GRID_SIZE + c, 2, r, c));
		expect(getEmptyCells(makeGrid(tiles)).length).toBe(0);
	});
});

describe('canMove', () => {
	test('returns true when there are empty cells', () => {
		expect(canMove(emptyGrid())).toBe(true);
	});

	test('returns true when adjacent tiles can merge horizontally', () => {
		const grid = emptyGrid();
		for (let r = 0; r < GRID_SIZE; r++)
			for (let c = 0; c < GRID_SIZE; c++)
				grid[r][c] = tile(r * GRID_SIZE + c, r * GRID_SIZE + c + 1, r, c);
		grid[0][0] = tile(100, 2, 0, 0);
		grid[0][1] = tile(101, 2, 0, 1);
		expect(canMove(grid)).toBe(true);
	});

	test('returns false when grid is full with no merges possible', () => {
		const values = [2, 4, 2, 4, 4, 2, 4, 2, 2, 4, 2, 4, 4, 2, 4, 2];
		const tiles = values.map((v, i) => tile(i, v, Math.floor(i / GRID_SIZE), i % GRID_SIZE));
		expect(canMove(makeGrid(tiles))).toBe(false);
	});
});

describe('applyMove – left', () => {
	test('slides tiles to the left', () => {
		const tiles = [tile(0, 2, 0, 3)];
		const { tiles: result, moved } = applyMove(tiles, 'left');
		expect(moved).toBe(true);
		expect(result[0].col).toBe(0);
	});

	test('merges two equal adjacent tiles', () => {
		const tiles = [tile(0, 2, 0, 0), tile(1, 2, 0, 1)];
		const { tiles: result, scoreDelta, moved } = applyMove(tiles, 'left');
		expect(moved).toBe(true);
		expect(scoreDelta).toBe(4);
		expect(result.length).toBe(1);
		expect(result[0].value).toBe(4);
		expect(result[0].isMerged).toBe(true);
	});

	test('does not merge the same tile twice in one move', () => {
		const tiles = [tile(0, 2, 0, 0), tile(1, 2, 0, 1), tile(2, 2, 0, 2), tile(3, 2, 0, 3)];
		const { tiles: result } = applyMove(tiles, 'left');
		expect(result.length).toBe(2);
		expect(result[0].value).toBe(4);
		expect(result[1].value).toBe(4);
	});

	test('returns moved=false when nothing moves', () => {
		const tiles = [tile(0, 2, 0, 0), tile(1, 4, 0, 1)];
		const { moved } = applyMove(tiles, 'left');
		expect(moved).toBe(false);
	});
});

describe('applyMove – right', () => {
	test('slides tiles to the right', () => {
		const tiles = [tile(0, 2, 0, 0)];
		const { tiles: result, moved } = applyMove(tiles, 'right');
		expect(moved).toBe(true);
		expect(result[0].col).toBe(GRID_SIZE - 1);
	});

	test('merges two equal tiles to the right', () => {
		const tiles = [tile(0, 2, 0, 2), tile(1, 2, 0, 3)];
		const { tiles: result, scoreDelta } = applyMove(tiles, 'right');
		expect(scoreDelta).toBe(4);
		expect(result.length).toBe(1);
		expect(result[0].col).toBe(GRID_SIZE - 1);
	});
});

describe('applyMove – up', () => {
	test('slides tiles upward', () => {
		const tiles = [tile(0, 2, 3, 0)];
		const { tiles: result, moved } = applyMove(tiles, 'up');
		expect(moved).toBe(true);
		expect(result[0].row).toBe(0);
	});

	test('merges two equal tiles upward', () => {
		const tiles = [tile(0, 2, 0, 0), tile(1, 2, 1, 0)];
		const { tiles: result, scoreDelta } = applyMove(tiles, 'up');
		expect(scoreDelta).toBe(4);
		expect(result.length).toBe(1);
		expect(result[0].row).toBe(0);
	});
});

describe('applyMove – down', () => {
	test('slides tiles downward', () => {
		const tiles = [tile(0, 2, 0, 0)];
		const { tiles: result, moved } = applyMove(tiles, 'down');
		expect(moved).toBe(true);
		expect(result[0].row).toBe(GRID_SIZE - 1);
	});

	test('merges two equal tiles downward', () => {
		const tiles = [tile(0, 2, 2, 0), tile(1, 2, 3, 0)];
		const { tiles: result, scoreDelta } = applyMove(tiles, 'down');
		expect(scoreDelta).toBe(4);
		expect(result.length).toBe(1);
		expect(result[0].row).toBe(GRID_SIZE - 1);
	});
});

describe('spawnTile', () => {
	test('returns null when grid is full', () => {
		const tiles: Tile[] = [];
		for (let r = 0; r < GRID_SIZE; r++)
			for (let c = 0; c < GRID_SIZE; c++)
				tiles.push(tile(r * GRID_SIZE + c, 2, r, c));
		expect(spawnTile(makeGrid(tiles), nextId)).toBeNull();
	});

	test('spawns in an empty cell', () => {
		const grid = emptyGrid();
		grid[0][0] = tile(0, 2, 0, 0);
		const spawned = spawnTile(grid, nextId);
		expect(spawned).not.toBeNull();
		expect(spawned?.isNew).toBe(true);
		expect(spawned?.value === 2 || spawned?.value === 4).toBe(true);
	});

	test('uses the provided id function', () => {
		idCounter = 42;
		const spawned = spawnTile(emptyGrid(), nextId);
		expect(spawned?.id).toBe(42);
	});
});

describe('swipeDirection', () => {
	test('returns null for small movements', () => {
		expect(swipeDirection(10, 5)).toBeNull();
	});

	test('detects right swipe', () => {
		expect(swipeDirection(80, 10)).toBe('right');
	});

	test('detects left swipe', () => {
		expect(swipeDirection(-80, 10)).toBe('left');
	});

	test('detects down swipe', () => {
		expect(swipeDirection(10, 80)).toBe('down');
	});

	test('detects up swipe', () => {
		expect(swipeDirection(10, -80)).toBe('up');
	});
});

describe('tileStyle', () => {
	test('returns known color for value 2', () => {
		const style = tileStyle(tile(0, 2, 0, 0));
		expect(style).toContain('background:#4a3d6e');
	});

	test('returns white fallback for unknown value', () => {
		const style = tileStyle(tile(0, 9999, 0, 0));
		expect(style).toContain('background:#ffffff');
	});
});

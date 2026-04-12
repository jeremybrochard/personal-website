export const GRID_SIZE = 4;
export const WIN_VALUE = 2048;
export const MIN_SWIPE = 30;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Tile = {
	id: number;
	value: number;
	row: number;
	col: number;
	isNew: boolean;
	isMerged: boolean;
};

export type Grid = (Tile | null)[][];

export type MoveResult = {
	tiles: Tile[];
	scoreDelta: number;
	moved: boolean;
};

export function makeGrid(tiles: Tile[]): Grid {
	const grid: Grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
	for (const tile of tiles) {
		grid[tile.row][tile.col] = tile;
	}
	return grid;
}


export function getEmptyCells(grid: Grid): [number, number][] {
	const emptyCells: [number, number][] = [];
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (!grid[row][col]) emptyCells.push([row, col]);
		}
	}
	return emptyCells;
}

export function canMove(grid: Grid): boolean {
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let col = 0; col < GRID_SIZE; col++) {
			if (!grid[row][col]) return true;
			const cell = grid[row][col];
			if (!cell) continue;
			const cellValue = cell.value;
			const canMergeRight = col < GRID_SIZE - 1 && grid[row][col + 1]?.value === cellValue;
			const canMergeDown = row < GRID_SIZE - 1 && grid[row + 1][col]?.value === cellValue;
			if (canMergeRight || canMergeDown) return true;
		}
	}
	return false;
}

export function applyMove(tiles: Tile[], direction: Direction): MoveResult {
	const grid = makeGrid(tiles);
	const resultTiles: Tile[] = [];
	let scoreDelta = 0;
	let hasMoved = false;

	const isHorizontal = direction === 'left' || direction === 'right';
	const isTowardOrigin = direction === 'left' || direction === 'up';
	const lineIndices = [0, 1, 2, 3];
	const traversalOrder = isTowardOrigin ? lineIndices : [...lineIndices].reverse();

	for (const fixedAxis of lineIndices) {
		let nextSlot = isTowardOrigin ? 0 : GRID_SIZE - 1;
		const slotStep = isTowardOrigin ? 1 : -1;
		let pendingMergeTarget: Tile | null = null;

		for (const movingAxis of traversalOrder) {
			const [row, col] = isHorizontal ? [fixedAxis, movingAxis] : [movingAxis, fixedAxis];
			const tile = grid[row][col];
			if (!tile) continue;

			if (pendingMergeTarget && pendingMergeTarget.value === tile.value) {
				const mergedValue = tile.value * 2;
				scoreDelta += mergedValue;
				resultTiles[resultTiles.indexOf(pendingMergeTarget)] = { ...pendingMergeTarget, value: mergedValue, isMerged: true, isNew: false };
				hasMoved = true;
				pendingMergeTarget = null;
			} else {
				const [targetRow, targetCol] = isHorizontal ? [fixedAxis, nextSlot] : [nextSlot, fixedAxis];
				const repositionedTile: Tile = { ...tile, row: targetRow, col: targetCol, isNew: false, isMerged: false };
				if (tile.row !== targetRow || tile.col !== targetCol) hasMoved = true;
				resultTiles.push(repositionedTile);
				pendingMergeTarget = repositionedTile;
				nextSlot += slotStep;
			}
		}
	}

	return { tiles: resultTiles, scoreDelta, moved: hasMoved };
}

export function spawnTile(grid: Grid, nextId: () => number): Tile | null { // nextId injected for testability
	const emptyCells = getEmptyCells(grid);
	if (emptyCells.length === 0) return null;
	const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	const spawnValue = Math.random() < 0.9 ? 2 : 4;
	return { id: nextId(), value: spawnValue, row, col, isNew: true, isMerged: false };
}

export function swipeDirection(deltaX: number, deltaY: number): Direction | null {
	const isTooShort = Math.abs(deltaX) < MIN_SWIPE && Math.abs(deltaY) < MIN_SWIPE;
	if (isTooShort) return null;
	const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
	if (isHorizontalSwipe) return deltaX > 0 ? 'right' : 'left';
	return deltaY > 0 ? 'down' : 'up';
}

export const KEY_MAP: Record<string, Direction> = {
	ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
	w: 'up', s: 'down', a: 'left', d: 'right',
};

export const TILE_COLORS: Record<number, { bg: string; text: string }> = {
	2:    { bg: '#e8e0f8', text: '#2d1f5e' },
	4:    { bg: '#c4b0f0', text: '#2d1f5e' },
	8:    { bg: '#5c44e4', text: '#ffffff' },
	16:   { bg: '#3d1fbf', text: '#ffffff' },
	32:   { bg: '#e90464', text: '#ffffff' },
	64:   { bg: '#b5003e', text: '#ffffff' },
	128:  { bg: '#ff6d00', text: '#ffffff' },
	256:  { bg: '#c44e00', text: '#ffffff' },
	512:  { bg: '#ffd600', text: '#1a1a1a' },
	1024: { bg: '#f0a800', text: '#1a1a1a' },
	2048: { bg: '#1a1a1a', text: '#ffffff' },
};

export function tileStyle(tile: Tile): string {
	const { bg, text } = TILE_COLORS[tile.value] ?? { bg: '#ffffff', text: '#1a1a1a' };
	return `background:${bg};color:${text}`;
}

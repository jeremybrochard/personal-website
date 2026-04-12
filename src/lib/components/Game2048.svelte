<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import { browser } from '$app/environment';

type Tile = {
	id: number;
	value: number;
	row: number;
	col: number;
	isNew: boolean;
	isMerged: boolean;
};

const GRID_SIZE = 4;
let tiles = $state<Tile[]>([]);
let score = $state(0);
let bestScore = $state(0);
let gameOver = $state(false);
let won = $state(false);
let keepPlaying = $state(false);
let tileIdCounter = 0;

let touchStartX = 0;
let touchStartY = 0;

function createTile(row: number, col: number, value: number): Tile {
	return { id: tileIdCounter++, value, row, col, isNew: true, isMerged: false };
}

function getGrid(): (Tile | null)[][] {
	const grid: (Tile | null)[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
	for (const tile of tiles) {
		grid[tile.row][tile.col] = tile;
	}
	return grid;
}

function getEmptyCells(grid: (Tile | null)[][]): [number, number][] {
	const empty: [number, number][] = [];
	for (let r = 0; r < GRID_SIZE; r++) {
		for (let c = 0; c < GRID_SIZE; c++) {
			if (!grid[r][c]) empty.push([r, c]);
		}
	}
	return empty;
}

function addRandomTile(grid: (Tile | null)[][]): Tile | null {
	const empty = getEmptyCells(grid);
	if (empty.length === 0) return null;
	const [r, c] = empty[Math.floor(Math.random() * empty.length)];
	return createTile(r, c, Math.random() < 0.9 ? 2 : 4);
}

function initGame() {
	tileIdCounter = 0;
	score = 0;
	gameOver = false;
	won = false;
	keepPlaying = false;
	const grid: (Tile | null)[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
	const t1 = addRandomTile(grid);
	if (t1) grid[t1.row][t1.col] = t1;
	const t2 = addRandomTile(grid);
	if (t2) grid[t2.row][t2.col] = t2;
	tiles = [t1, t2].filter(Boolean) as Tile[];
	bestScore = browser ? (parseInt(localStorage.getItem('2048-best') ?? '0') || 0) : 0;
}

function move(direction: 'up' | 'down' | 'left' | 'right') {
	if (gameOver || (won && !keepPlaying)) return;

	const grid = getGrid();
	const newTiles: Tile[] = [];
	let moved = false;
	let addedScore = 0;

	const traverse = direction === 'left' || direction === 'right'
		? { outerRange: [0, 1, 2, 3], innerRange: direction === 'left' ? [0, 1, 2, 3] : [3, 2, 1, 0], isRow: true }
		: { outerRange: [0, 1, 2, 3], innerRange: direction === 'up' ? [0, 1, 2, 3] : [3, 2, 1, 0], isRow: false };

	for (const outer of traverse.outerRange) {
		let insertPos = direction === 'left' || direction === 'up' ? 0 : GRID_SIZE - 1;
		const step = direction === 'left' || direction === 'up' ? 1 : -1;
		let lastMerged: Tile | null = null;

		for (const inner of traverse.innerRange) {
			const [r, c] = traverse.isRow ? [outer, inner] : [inner, outer];
			const tile = grid[r][c];
			if (!tile) continue;

			if (lastMerged && lastMerged.value === tile.value) {
				const newValue = tile.value * 2;
				addedScore += newValue;
					const mergedTile: Tile = { ...lastMerged, value: newValue, isMerged: true, isNew: false };
				newTiles[newTiles.indexOf(lastMerged)] = mergedTile;
				moved = true;
				lastMerged = null;
			} else {
					const [nr, nc] = traverse.isRow ? [outer, insertPos] : [insertPos, outer];
				const movedTile: Tile = { ...tile, row: nr, col: nc, isNew: false, isMerged: false };
				if (tile.row !== nr || tile.col !== nc) moved = true;
				newTiles.push(movedTile);
				lastMerged = movedTile;
				insertPos += step;
			}
		}
	}

	if (!moved) return;

	score += addedScore;
	if (score > bestScore) {
		bestScore = score;
		localStorage.setItem('2048-best', String(bestScore));
	}

	const tempGrid: (Tile | null)[][] = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
	for (const t of newTiles) tempGrid[t.row][t.col] = t;

	const newTile = addRandomTile(tempGrid);
	if (newTile) newTiles.push(newTile);

	tiles = newTiles;

	if (!won && newTiles.some(t => t.value === 2048)) {
		won = true;
	}

	if (!canMove()) {
		gameOver = true;
	}
}

function canMove(): boolean {
	const grid = getGrid();
	for (let r = 0; r < GRID_SIZE; r++) {
		for (let c = 0; c < GRID_SIZE; c++) {
			if (!grid[r][c]) return true;
			const val = grid[r][c]!.value;
				if (c < GRID_SIZE - 1 && grid[r][c + 1]?.value === val) return true;
			if (r < GRID_SIZE - 1 && grid[r + 1][c]?.value === val) return true;
		}
	}
	return false;
}

function handleKey(e: KeyboardEvent) {
	const map: Record<string, 'up' | 'down' | 'left' | 'right'> = {
		ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
		w: 'up', s: 'down', a: 'left', d: 'right'
	};
	if (map[e.key]) {
		e.preventDefault();
		move(map[e.key]);
	}
}

function handleTouchStart(e: TouchEvent) {
	touchStartX = e.touches[0].clientX;
	touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e: TouchEvent) {
	const dx = e.changedTouches[0].clientX - touchStartX;
	const dy = e.changedTouches[0].clientY - touchStartY;
	const minSwipe = 30;
	if (Math.abs(dx) < minSwipe && Math.abs(dy) < minSwipe) return;
	if (Math.abs(dx) > Math.abs(dy)) {
		move(dx > 0 ? 'right' : 'left');
	} else {
		move(dy > 0 ? 'down' : 'up');
	}
}

const TILE_COLORS: Record<number, { bg: string; text: string }> = {
	2:    { bg: '#4a3d6e', text: '#f0e6ff' },
	4:    { bg: '#5c44e4', text: '#ffffff' },
	8:    { bg: '#7a2ff0', text: '#ffffff' },
	16:   { bg: '#8514f5', text: '#ffffff' },
	32:   { bg: '#a020f0', text: '#ffffff' },
	64:   { bg: '#c030f8', text: '#ffffff' },
	128:  { bg: '#e90464', text: '#ffffff' },
	256:  { bg: '#ff1744', text: '#ffffff' },
	512:  { bg: '#ff6d00', text: '#ffffff' },
	1024: { bg: '#ffd600', text: '#1a1a1a' },
	2048: { bg: '#ffffff', text: '#1a1a1a' },
};

function tileStyle(tile: Tile): string {
	const colors = TILE_COLORS[tile.value] ?? { bg: '#ffffff', text: '#1a1a1a' };
	return [
		`background: ${colors.bg}`,
		`color: ${colors.text}`,
	].join(';');
}

onMount(() => {
	initGame();
	window.addEventListener('keydown', handleKey);
});

onDestroy(() => {
	if (browser) window.removeEventListener('keydown', handleKey);
});
</script>

<section class="flex flex-col items-center py-20 px-6 bg-gradient-to-b from-primary_darker to-primary">
	<h2 class="text-2xl font-semibold text-white mb-2">Mini 2048</h2>
	<p class="text-white/60 text-sm mb-6 text-center">Flèches / WASD · Swipe sur mobile</p>

	<dl class="flex gap-4 mb-6">
		<div class="flex flex-col items-center bg-white/10 rounded-lg px-4 py-2 min-w-[72px]">
			<dt class="text-white/60 text-xs font-semibold uppercase tracking-wider">Score</dt>
			<dd class="text-white font-bold text-xl" aria-live="polite" aria-atomic="true">{score}</dd>
		</div>
		<div class="flex flex-col items-center bg-white/10 rounded-lg px-4 py-2 min-w-[72px]">
			<dt class="text-white/60 text-xs font-semibold uppercase tracking-wider">Meilleur</dt>
			<dd class="text-white font-bold text-xl">{bestScore}</dd>
		</div>
		<button
			onclick={initGame}
			class="flex items-center gap-1 bg-secondary hover:bg-secondary/80 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4" aria-hidden="true" focusable="false">
				<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
			</svg>
			Rejouer
		</button>
	</dl>

	<div
		role="application"
		aria-label="Grille de jeu 2048"
		class="relative select-none touch-none w-[min(340px,90vw)] h-[min(340px,90vw)] bg-white/[0.07] rounded-xl p-2 grid grid-cols-4 grid-rows-4 gap-2"
		ontouchstart={handleTouchStart}
		ontouchend={handleTouchEnd}
	>
		{#each Array(GRID_SIZE * GRID_SIZE) as _, i}
			<div class="bg-white/[0.06] rounded-md" aria-hidden="true"></div>
		{/each}

		{#each tiles as tile (tile.id)}
			<div
				role="img"
				aria-label="{tile.value} en ligne {tile.row + 1}, colonne {tile.col + 1}"
				class="tile absolute rounded-md flex items-center justify-center font-bold z-10"
				class:tile-new={tile.isNew}
				class:tile-merged={tile.isMerged}
				style="
					{tileStyle(tile)};
					--row: {tile.row};
					--col: {tile.col};
					font-size: {tile.value >= 1024 ? '1rem' : tile.value >= 128 ? '1.25rem' : '1.5rem'};
				"
			>
				<span aria-hidden="true">{tile.value}</span>
			</div>
		{/each}

		{#if gameOver || (won && !keepPlaying)}
			<div
				role="dialog"
				aria-modal="true"
				aria-label={won ? 'Victoire' : 'Partie terminée'}
				class="absolute inset-0 rounded-xl bg-primary_darker/85 backdrop-blur flex flex-col items-center justify-center z-20"
			>
				{#if won}
					<p class="text-2xl font-bold text-white mb-1"><span aria-hidden="true">🎉</span> 2048 !</p>
					<p class="text-white/80 text-sm mb-4">Bien joué !</p>
					<button
						onclick={() => { keepPlaying = true; }}
						class="bg-secondary hover:bg-secondary/80 text-white rounded-lg px-5 py-2 text-sm font-semibold mr-2 transition-colors cursor-pointer"
					>
						Continuer
					</button>
					<button
						onclick={initGame}
						class="bg-white/20 hover:bg-white/30 text-white rounded-lg px-5 py-2 text-sm font-semibold transition-colors cursor-pointer"
					>
						Rejouer
					</button>
				{:else}
					<p class="text-2xl font-bold text-white mb-1">Game Over</p>
					<p class="text-white/80 text-sm mb-4">Score : {score}</p>
					<button
						onclick={initGame}
						class="bg-secondary hover:bg-secondary/80 text-white rounded-lg px-5 py-2 text-sm font-semibold transition-colors cursor-pointer"
					>
						Rejouer
					</button>
				{/if}
			</div>
		{/if}
	</div>
</section>

<style>
	.tile {
		transition: top 0.1s ease, left 0.1s ease;
		will-change: top, left;

		--gap: 8px;
		--padding: 8px;
		--cell-size: calc((min(340px, 90vw) - 2 * var(--padding) - 3 * var(--gap)) / 4);

		width: var(--cell-size);
		height: var(--cell-size);
		top: calc(var(--padding) + var(--row) * (var(--cell-size) + var(--gap)));
		left: calc(var(--padding) + var(--col) * (var(--cell-size) + var(--gap)));
	}

	@keyframes tileAppear {
		0%   { transform: scale(0.4); opacity: 0; }
		60%  { transform: scale(1.1); }
		100% { transform: scale(1);   opacity: 1; }
	}

	@keyframes tileMerge {
		0%   { transform: scale(1); }
		40%  { transform: scale(1.2); }
		100% { transform: scale(1); }
	}

	.tile-new {
		animation: tileAppear 0.2s ease forwards;
	}

	.tile-merged {
		animation: tileMerge 0.15s ease forwards;
	}
</style>

<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import { browser } from '$app/environment';
import {
	GRID_SIZE,
	WIN_VALUE,
	applyMove,
	canMove,
	makeGrid,
	spawnTile,
	swipeDirection,
	tileStyle,
	KEY_MAP,
	type Tile,
} from './game2048.logic';

let tiles = $state<Tile[]>([]);
let score = $state(0);
let bestScore = $state(0);
let gameOver = $state(false);
let won = $state(false);
let keepPlaying = $state(false);
let tileIdCounter = 0;
let touchStartX = 0;
let touchStartY = 0;

const nextId = () => tileIdCounter++;

function initGame() {
	tileIdCounter = 0;
	score = 0;
	gameOver = false;
	won = false;
	keepPlaying = false;
	bestScore = browser ? (parseInt(localStorage.getItem('2048-best') ?? '0') || 0) : 0;

	const grid = makeGrid([]);
	const t1 = spawnTile(grid, nextId);
	if (t1) grid[t1.row][t1.col] = t1;
	const t2 = spawnTile(grid, nextId);
	tiles = [t1, t2].filter(Boolean) as Tile[];
}

function move(direction: Parameters<typeof applyMove>[1]) {
	if (gameOver || (won && !keepPlaying)) return;

	const { tiles: moved, scoreDelta, moved: hasMoved } = applyMove(tiles, direction);
	if (!hasMoved) return;

	score += scoreDelta;
	if (score > bestScore) {
		bestScore = score;
		if (browser) localStorage.setItem('2048-best', String(bestScore));
	}

	const newGrid = makeGrid(moved);
	const spawned = spawnTile(newGrid, nextId);
	tiles = spawned ? [...moved, spawned] : moved;

	if (!won && tiles.some(t => t.value === WIN_VALUE)) won = true;
	if (!canMove(makeGrid(tiles))) gameOver = true;
}

function handleKey(e: KeyboardEvent) {
	const direction = KEY_MAP[e.key];
	if (direction) {
		e.preventDefault();
		move(direction);
	}
}

function handleTouchStart(e: TouchEvent) {
	touchStartX = e.touches[0].clientX;
	touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e: TouchEvent) {
	const direction = swipeDirection(
		e.changedTouches[0].clientX - touchStartX,
		e.changedTouches[0].clientY - touchStartY,
	);
	if (direction) move(direction);
}

onMount(() => {
	initGame();
	window.addEventListener('keydown', handleKey);
});

onDestroy(() => {
	if (browser) window.removeEventListener('keydown', handleKey);
});
</script>

<section class="flex flex-col items-center py-20 px-6">
	<h2 class="text-2xl font-semibold mb-2">Mini 2048</h2>
	<p class="text-primary/60 text-sm mb-6 text-center">Flèches / WASD · Swipe sur mobile</p>

	<dl class="flex gap-4 mb-6">
		<div class="flex flex-col items-center bg-primary/10 rounded-lg px-4 py-2 min-w-[72px]">
			<dt class="text-primary/60 text-xs font-semibold uppercase tracking-wider">Score</dt>
			<dd class="font-bold text-xl" aria-live="polite" aria-atomic="true">{score}</dd>
		</div>
		<div class="flex flex-col items-center bg-primary/10 rounded-lg px-4 py-2 min-w-[72px]">
			<dt class="text-primary/60 text-xs font-semibold uppercase tracking-wider">Meilleur</dt>
			<dd class="font-bold text-xl">{bestScore}</dd>
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
		class="relative select-none touch-none w-[min(340px,90vw)] h-[min(340px,90vw)] bg-primary/[0.07] rounded-xl p-2 grid grid-cols-4 grid-rows-4 gap-2"
		ontouchstart={handleTouchStart}
		ontouchend={handleTouchEnd}
	>
		{#each Array(GRID_SIZE * GRID_SIZE) as _, i}
			<div class="bg-primary/[0.08] rounded-md" aria-hidden="true"></div>
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
				class="absolute inset-0 rounded-xl bg-white/90 backdrop-blur flex flex-col items-center justify-center z-20"
			>
				{#if won}
					<p class="text-2xl font-bold mb-1"><span aria-hidden="true">🎉</span> 2048 !</p>
					<p class="text-primary/70 text-sm mb-4">Bien joué !</p>
					<button
						onclick={() => { keepPlaying = true; }}
						class="bg-secondary hover:bg-secondary/80 text-white rounded-lg px-5 py-2 text-sm font-semibold mr-2 transition-colors cursor-pointer"
					>
						Continuer
					</button>
					<button
						onclick={initGame}
						class="bg-primary/10 hover:bg-primary/20 rounded-lg px-5 py-2 text-sm font-semibold transition-colors cursor-pointer"
					>
						Rejouer
					</button>
				{:else}
					<p class="text-2xl font-bold mb-1">Game Over</p>
					<p class="text-primary/70 text-sm mb-4">Score : {score}</p>
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

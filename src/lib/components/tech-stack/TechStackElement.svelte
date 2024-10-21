<script lang="ts">
	import type { TechStackItem } from '$lib/models/tech-stack-item';
	import { twMerge } from 'tailwind-merge';

	export let techStackItem: TechStackItem;
	export let iconStyles = '';
	export let tooltipStyles = '';

	let clazz: string = '';
	export { clazz as class };
</script>

{#if techStackItem}
	<div
		class={twMerge(
			'has-tooltip flex justify-center relative my-7 px-2 transform duration-300 hover:scale-110',
			clazz
		)}
	>
		<span
			class={twMerge('tooltip rounded shadow-lg p-1 bg-primary text-white text-center -bottom-10', tooltipStyles)}
			>{techStackItem.name}</span
		>
		<img class={twMerge('h-12', iconStyles)} src={techStackItem.image} alt={techStackItem.name} />
	</div>
{/if}

<style lang="scss">
	.tooltip {
		@apply invisible absolute;
	}

	.has-tooltip:hover .tooltip {
		@apply visible z-50;
	}
</style>

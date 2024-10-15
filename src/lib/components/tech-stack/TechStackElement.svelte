<script lang="ts">
	import type { TechStackItem } from '$lib/models/tech-stack-item';
	import { twMerge } from 'tailwind-merge';

	export let techStackItem: TechStackItem;
	export let iconStyles = '';
	export let hasTooltip = true;

	let clazz: string = '';
	export { clazz as class };
</script>

{#if techStackItem}
	<div
		class={twMerge(
			(hasTooltip ? 'has-tooltip' : '') +
				' flex justify-center relative my-7 px-2 transform duration-300 hover:scale-110',
			clazz
		)}
	>
		<span class="tooltip rounded shadow-lg p-1 bg-primary text-white">{techStackItem.name}</span>
		<img class={twMerge('h-12', iconStyles)} src={techStackItem.image} alt={techStackItem.name} />
	</div>
{/if}

<style lang="scss">
	.tooltip {
		@apply invisible absolute -bottom-10;
	}

	.has-tooltip:hover .tooltip {
		@apply visible z-50;

		&:before {
			content: '';
			@apply absolute w-0 h-0 -top-2 left-1/2 -ml-2 border-solid border-b-primary border-x-transparent border-8 border-t-0;
		}
	}
</style>

<script lang="ts">
	import type { TechStackItem } from '$lib/models/tech-stack-item';

	export let techStackItem: TechStackItem;
</script>

{#if techStackItem}
	<div
		class="has-tooltip flex justify-center relative my-7 px-2 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 transform duration-300 hover:scale-110"
	>
		<span class="tooltip rounded shadow-lg p-1 bg-primary text-white">{techStackItem.name}</span>
		<img class="h-12" src={techStackItem.image} alt={techStackItem.name} />
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

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { techStackList } from './tech-stack-list';
</script>

<section id="tech-stack" class="flex flex-col items-center m-auto pb-24 px-6 max-w-6xl">
	<h2 class="my-1 mx-0 text-2xl font-semibold">{$_('techStack.title')}</h2>
	<div class="flex flex-row flex-wrap mx-12 md:mx-24 lg:mx-48">
		{#each techStackList as techStack}
			<div
				class="has-tooltip flex justify-center relative my-8 px-4 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 transform duration-300 hover:scale-110"
			>
				<span class="tooltip rounded shadow-lg p-1 bg-primary text-white">{techStack.name}</span>
				<img class="h-16" src={techStack.image} alt={techStack.name} />
			</div>
		{/each}
	</div>
</section>

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

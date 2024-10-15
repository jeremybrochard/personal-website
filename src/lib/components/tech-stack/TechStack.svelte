<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { techStackList } from './tech-stack-list';
	import TechStackElement from './TechStackElement.svelte';
</script>

<section id="tech-stack" class="flex flex-col items-center m-auto pb-32 px-6 max-w-6xl">
	<h2 class="mt-1 mb-6 mx-0 text-2xl font-semibold">{$_('techStack.title')}</h2>
	<div class="flex flex-row flex-wrap mx-12 md:mx-24 lg:mx-48">
		{#each techStackList as techStack}
			<TechStackElement techStackItem={techStack} class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6"/>
		{/each}
	</div>
</section>

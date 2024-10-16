<script lang="ts">
	import type { TechStackItem } from '$lib/models/tech-stack-item';
	import OutboundLink from '../OutboundLink.svelte';
	import TechStackElement from '../tech-stack/TechStackElement.svelte';

	export let title: string;
	export let url: string;
	export let image: string;
	export let techStackList: TechStackItem[] = [];
</script>

<div class="flex flex-col gap-6 my-6">
	<div class="flex flex-col gap-2">
		<h3 class="text-xl font-medium">{title}</h3>
		<OutboundLink href={url} class="text-sm">
			<div class="flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="#5C44E4"
					class="w-4 h-4"
					role="img"
				>
					<path
						d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"
					/>
					<path
						d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"
					/>
				</svg>
				{url}
			</div>
		</OutboundLink>
	</div>
	<p class="lg:min-h-[144px]">
		<slot />
	</p>
	<div class="flex flex-wrap">
		{#each techStackList as techStack}
			<TechStackElement
				techStackItem={techStack}
				iconStyles="h-6"
				class="justify-start my-4"
				hasTooltip={false}
			/>
		{/each}
	</div>
	<img src={image} alt="" class="drop-shadow-lg" />
</div>

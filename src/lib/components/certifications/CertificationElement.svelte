<script lang="ts">
	import OutboundLink from '../OutboundLink.svelte';

	export let title: string;
	export let subtitle: string;
	export let score = '';
	export let logo = '';
	export let badge = '';
	export let description: string;
	export let actionUrl = '';
	export let actionLabel = '';
</script>

<div class="max-w-sm px-12 py-6 ring-1 ring-white shadow-lg flex flex-col items-center gap-6">
	{#if logo}
		<img class="h-11 mb-2" src={logo} alt={title} />
	{/if}
	<div class="text-center">
		<p class="font-bold mb-2">{subtitle}</p>
		<p class="font-medium">{score}</p>
	</div>
	{#if badge}
		<img class="h-24 mb-2" src={badge} alt="" />
	{/if}
	<p class="text-justify">{description}</p>
	{#if actionUrl && actionLabel}
		<OutboundLink href={actionUrl} class="button-link no-underline">
			{actionLabel}
		</OutboundLink>
	{/if}
</div>

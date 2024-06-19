<script>
	import OutboundLink from './OutboundLink.svelte';
	import HeartIcon from '$lib/assets/heart-3-fill.svg';
</script>

<section class="flex flex-col w-full items-center gap-4 py-6">
	<p class="text-sm">
		Made with <img class="h-4 inline" src={HeartIcon} alt="love" /> using <OutboundLink
			href="https://svelte.dev/"
			class="font-bold">Svelte</OutboundLink
		>
	</p>
	<OutboundLink
		class="text-primary text-xs"
		href="https://www.flaticon.com/packs/rectangular-country-simple-flags"
		title="country flag icons"
		>Country flag icons by Freepik - Flaticon
	</OutboundLink>
</section>

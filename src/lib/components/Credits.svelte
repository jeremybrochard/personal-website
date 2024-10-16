<script>
	import OutboundLink from './OutboundLink.svelte';
	import HeartIcon from '$lib/assets/heart-3-fill.svg';
	import { _ } from 'svelte-i18n';
</script>

<section class="flex flex-col w-full items-center gap-4 py-6">
	<p class="text-sm">
		Made with <img class="h-4 inline" src={HeartIcon} alt="love" /> using <OutboundLink
			href="https://svelte.dev/"
			class="text-gradient hover:text-primary">Svelte</OutboundLink
		>
	</p>
	<p class="text-sm mb-4">&copy; {$_('credits.copyright')}</p>
	<OutboundLink
		class="text-primary text-xs font-normal"
		href="https://www.flaticon.com/packs/rectangular-country-simple-flags"
		title={$_('credits.flagIcons.linkTitle')}
		>{$_('credits.flagIcons.linkLabel')}
	</OutboundLink>
</section>

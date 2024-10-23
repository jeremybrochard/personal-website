<script lang="ts">
	import { _ } from 'svelte-i18n';
	import OutboundLink from '../OutboundLink.svelte';
	import ReferenceElement from './ReferenceElement.svelte';
</script>

<section id="work-references" class="flex flex-col items-center m-auto pt-24 pb-12 px-12 max-w-6xl">
	<h2 class="mt-1 mb-6 mx-0 text-2xl font-semibold">{$_('references.title')}</h2>
	<p class="text-center leading-6 mx-0 mt-4 mb-12">
		{$_('references.description')}
		{$_('references.linkedIn')}
		<OutboundLink href="https://www.linkedin.com/in/jeremy-brochard" class="my-0 w-6"
			>LinkedIn</OutboundLink
		>
		{$_('references.malt')}
		<OutboundLink href="https://www.malt.fr/profile/jeremy-brochard" class="my-0 w-6"
			>Malt</OutboundLink
		>
		.
	</p>
	<div class="flex flex-row flex-wrap">
		<ReferenceElement name="lexisnexis" />
		<ReferenceElement name="sg" />
		<ReferenceElement name="sede-veolia" />
		<ReferenceElement name="colonna-facility" />
		<ReferenceElement name="proximy" />
		<ReferenceElement name="ministere-education-nationale-jeunesse" />
		<ReferenceElement name="voluntis" />
	</div>
</section>

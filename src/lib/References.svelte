<script lang="ts">
  import ReferenceElement from '$lib/ReferenceElement.svelte';
  import { _ } from 'svelte-i18n';
</script>

<section id="work-references" class="flex flex-col items-center m-auto py-24 px-6 max-w-6xl">
	<h2 class="my-1 mx-0 text-2xl font-semibold">{$_('references.title')}</h2>
	<p class="text-center leading-6 mx-0 mt-4 mb-12">
		{$_('references.description')}
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

<script lang="ts">
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
</script>

<section class="flex flex-col items-center gap-4 py-24">
	{#if $page.status === 404}
		<h1 class="my-1 mx-0 text-2xl font-semibold">{$_('errors.404.title')}</h1>
		<p>{$_('errors.404.description')}</p>
	{:else if $page.error}
		<h1 class="my-1 mx-0 text-2xl font-semibold">{$page.status}</h1>
		<p>{$page.error.message}</p>
	{:else}
		<h1 class="my-1 mx-0 text-2xl font-semibold">{$page.status}</h1>
		<p>{$_('errors.unknown.description')}</p>
	{/if}
	<a href="/" class="no-underline text-secondary hover:underline hover:grayscale-70"
		>{$_('errors.goBack')}</a
	>
</section>

<style lang="scss">
	section {
		min-height: calc(100vh - 6rem);
	}
</style>

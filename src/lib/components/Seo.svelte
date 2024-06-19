<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('pageTitle')}</title>
	<meta name="description" content={$_('seo.description')} />
	<meta property="og:description" content={$_('seo.ogDescription')} />
	<meta property="og:title" content={$_('pageTitle')} />
</svelte:head>

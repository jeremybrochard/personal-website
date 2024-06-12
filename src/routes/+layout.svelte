<script>
	import Navigation from '$lib/Navigation.svelte';
	import Seo from '$lib/Seo.svelte';
	import '../lib/i18n';
	import './styles.css';
</script>

<Seo />
<Navigation />

<main>
	<slot />
</main>

<script lang="ts">
	import Credits from '$lib/Credits.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import Seo from '$lib/Seo.svelte';
	import '../lib/i18n';
	import './styles.css';
</script>

<header class="h-12">
	<Seo />
	<Navigation />
</header>

<main>
	<slot />
</main>

<footer class="flex items-center h-12">
	<Credits />
</footer>

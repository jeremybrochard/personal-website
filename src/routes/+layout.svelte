<script lang="ts">
	import Credits from '$lib/components/Credits.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import '$lib/i18n';
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

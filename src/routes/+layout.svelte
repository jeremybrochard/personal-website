<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
	import Seo from '$lib/Seo.svelte';
	import { isLoading } from 'svelte-i18n';
	import '../lib/i18n';
	import './styles.css';
</script>

{#if $isLoading}
  Please wait...
{:else}
  <Seo />
  <Navigation />
  
  <main>
    <slot />
  </main>
{/if}


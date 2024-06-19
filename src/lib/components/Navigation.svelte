<script lang="ts">
	import LocaleSelector from './LocaleSelector.svelte';
</script>

<nav class="flex bg-primary_darker h-12 w-full justify-between items-center">
	<div class="px-6 max-w-6xl content-center font-semibold">
		<a href="/" class="uppercase text-secondary text-xl tracking-widest no-underline"
			><span><string class="text-white">jeremy</string>.brochard</span></a
		>
	</div>
	<div>
		<LocaleSelector />
	</div>
</nav>

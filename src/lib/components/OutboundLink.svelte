<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id: string | undefined = undefined;
	export let href: string = '';
	export let title: string | undefined = undefined;

	let clazz: string = '';
	export { clazz as class };
</script>

<a
	class={twMerge('no-underline text-secondary hover:underline hover:grayscale-70', clazz)}
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{id}
	{title}
>
	<slot />
</a>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id: string | undefined = undefined;
	export let href: string = '';
	export let title: string | undefined = undefined;

	let clazz: string = '';
	export { clazz as class };
</script>

<a
	class={twMerge('text-secondary font-bold underline underline-offset-4 hover:grayscale-70', clazz)}
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{id}
	{title}
  aria-label={title}
>
	<slot />
</a>

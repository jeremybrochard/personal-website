<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		id?: string;
		href: string;
		title?: string;
		label?: string;
		class: string;
		children?: Snippet;
	}

	let { id, href, title, label, class: clazz = '', children }: Props = $props();
</script>

<a
	class={twMerge('text-secondary font-bold underline underline-offset-4 hover:grayscale-70', clazz)}
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{id}
	{title}
	aria-label={label || title}
>
	{@render children?.()}
</a>

<script lang="ts">
	import GithubIcon from '$lib/assets/social-media-icons/github.svg';
	import LinkedInIcon from '$lib/assets/social-media-icons/linkedin.svg';
	import { _ } from 'svelte-i18n';
	import OutboundLink from './OutboundLink.svelte';

	function smoothAnchorClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
	) {
		event.preventDefault();
		const anchor = document.getElementById('work-references');
		if (!anchor) return;
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<section class="bg-primary m-auto text-white">
	<div class="flex flex-col items-center m-auto pt-8 pb-0 px-6 max-w-6xl md:pt-28">
		<div>{$_('pageTitlePrefix')}</div>
		<h1 class="my-1 mx-0 text-secondary text-2xl font-semibold">{$_('pageTitle')}</h1>
		<h2 class="my-8 mx-0 text-center text-4xl font-semibold">
			{$_('banner.title')}
		</h2>
		<p class="leading-6 text-center my-4">
			{$_('banner.mainBloc.descriptionBegin')}
			<OutboundLink href="https://aycandoo.fr/" id="aycandoo"
				>{$_('banner.mainBloc.aycandooLink')}</OutboundLink
			>{$_('banner.mainBloc.descriptionEnd')}
		</p>
		<p class="leading-6 text-center my-4">
			{$_('banner.contactBloc.description')}<br />
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 mx-1">
				{$_('banner.contactBloc.contactLink')}
			</OutboundLink>.
		</p>
		<p class="flex pt-4 my-4">
			<OutboundLink
				href="https://www.linkedin.com/in/jeremy-brochard"
				id="cu-linkedin"
				class="my-0 mx-1 w-5"
			>
				<img src={LinkedInIcon} alt={$_('banner.actionsBloc.linkedIn')} />
			</OutboundLink>
			<OutboundLink href="https://github.com/jeremybrochard/personal-website" class="my-0 mx-1 w-5">
				<img src={GithubIcon} alt={$_('banner.actionsBloc.github')} />
			</OutboundLink>
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 mx-1 w-5">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="2 2 21 20"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					role="img"
					aria-label={$_('banner.actionsBloc.contact')}
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
					/>
				</svg>
			</OutboundLink>
		</p>
		<a
			class="no-underline text-secondary hover:underline hover:grayscale-70 mx-1 mt-8 mb-12 md:mt-24 w-5"
			href="#work-references"
			on:click={smoothAnchorClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
				role="img"
				aria-label={$_('banner.actionsBloc.references')}
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</a>
	</div>
</section>

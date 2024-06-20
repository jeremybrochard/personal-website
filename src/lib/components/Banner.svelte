<script lang="ts">
	import GithubIcon from '$lib/assets/social-media-icons/github.svg';
	import LinkedInIcon from '$lib/assets/social-media-icons/linkedin.svg';
	import AycandooIcon from '$lib/assets/aycandoo-color.svg';
	import { _ } from 'svelte-i18n';
	import OutboundLink from './OutboundLink.svelte';

	function smoothAnchorClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }
	) {
		event.preventDefault();
		const anchor = document.getElementById('work-references');
		if (!anchor) return;
		window.scrollTo({
			top: anchor.offsetTop + 60,
			behavior: 'smooth'
		});
	}
</script>

<section
	class="bg-gradient-to-b flex from-primary_darker to-primary to-60% text-white min-h-lvh md:min-h-0"
>
	<div class="stars"></div>
	<div class="stars2"></div>
	<div class="stars3"></div>
	<div class="max-w-6xl mx-auto flex self-center flex-col items-center pt-8 pb-0 px-6 md:pt-28">
		<div>{$_('pageTitlePrefix')}</div>
		<h1 class="my-1 mx-0 text-gradient text-2xl">{$_('pageTitle')}</h1>
		<h2 class="my-8 mx-0 text-center text-4xl font-semibold">
			{$_('banner.title')}
		</h2>
		<p class="leading-6 text-center my-4">
			{$_('banner.mainBloc.descriptionBegin')}
			<OutboundLink href="https://aycandoo.fr/" id="aycandoo" class="font-bold"
				>{$_('banner.mainBloc.aycandooLink')}</OutboundLink
			>{$_('banner.mainBloc.descriptionEnd')}
		</p>
		<p class="leading-6 text-center my-4">
			{$_('banner.contactBloc.description')}<br />
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 mx-1 font-bold">
				{$_('banner.contactBloc.contactLink')}
			</OutboundLink>.
		</p>
		<p class="flex items-center pt-4 my-4 gap-3">
			<OutboundLink href="https://www.linkedin.com/in/jeremy-brochard" class="my-0 w-6">
				<img src={LinkedInIcon} alt={$_('banner.actionsBloc.linkedIn')} />
			</OutboundLink>
			<OutboundLink href="https://github.com/jeremybrochard" class="my-0 w-6">
				<img src={GithubIcon} alt={$_('banner.actionsBloc.github')} />
			</OutboundLink>
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 w-7">
				<img src={AycandooIcon} alt={$_('banner.actionsBloc.contact')} />
			</OutboundLink>
			<OutboundLink href="mailto:contact@jeremybrochard.dev" class="my-0 w-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="2 2 21 20"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					role="img"
					aria-label={$_('banner.actionsBloc.mailto')}
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
			class="no-underline text-secondary font-bold hover:underline hover:scale-110 mx-1 mt-8 mb-12 md:mt-24"
			href="#work-references"
			on:click={smoothAnchorClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
				role="img"
				aria-label={$_('banner.actionsBloc.references')}
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</a>
	</div>
</section>

<style lang="scss">
	@function multiple-box-shadow($n) {
		$value: '#{random(2000)}px #{random(2000)}px #FFF';
		@for $i from 2 through $n {
			$value: '#{$value} , #{random(3000)}px #{random(1500)}px #FFF';
		}

		@return unquote($value);
	}

	$shadows-small: multiple-box-shadow(700);
	$shadows-medium: multiple-box-shadow(200);
	$shadows-big: multiple-box-shadow(100);

	.stars {
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: $shadows-small;
		animation: animStar 50s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 2000px;
			width: 1px;
			height: 1px;
			background: transparent;
			box-shadow: $shadows-small;
		}
	}

	.stars2 {
		width: 2px;
		height: 2px;
		background: transparent;
		box-shadow: $shadows-medium;
		animation: animStar 100s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 2000px;
			width: 2px;
			height: 2px;
			background: transparent;
			box-shadow: $shadows-medium;
		}
	}

	.stars3 {
		width: 3px;
		height: 3px;
		background: transparent;
		box-shadow: $shadows-big;
		animation: animStar 150s linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: 2000px;
			width: 3px;
			height: 3px;
			background: transparent;
			box-shadow: $shadows-big;
		}
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-2000px);
		}
	}
</style>

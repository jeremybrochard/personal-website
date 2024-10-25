<script lang="ts">
	import AycandooIcon from '$lib/assets/aycandoo-color.svg';
	import GithubIcon from '$lib/assets/social-media-icons/github.svg';
	import LinkedInIcon from '$lib/assets/social-media-icons/linkedin.svg';
	import { _ } from 'svelte-i18n';
	import OutboundLink from './OutboundLink.svelte';

	let pauseClass = $state('');
	let starsClass = $derived(pauseClass + 'stars');
	let stars2Class = $derived(pauseClass + 'stars2');
	let stars3Class = $derived(pauseClass + 'stars3');

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

	function pauseAnimation() {
		pauseClass = 'pause ';
	}

	function resumeAnimation() {
		pauseClass = '';
	}
</script>

<section
	class="bg-gradient-to-b flex flex-col justify-between from-primary_darker to-primary to-60% text-white min-h-lvh md:min-h-0"
>
	<div class={starsClass}></div>
	<div class={stars2Class}></div>
	<div class={stars3Class}></div>
	<div class="max-w-6xl mx-auto flex self-center flex-col items-center pt-8 pb-0 px-6 md:pt-28">
		<div>{$_('pageTitlePrefix')}</div>
		<h1 class="my-1 mx-0 text-gradient text-2xl">{$_('pageTitle')}</h1>
		<h2 class="my-8 mx-0 text-center text-4xl font-semibold">
			{$_('banner.title')}
		</h2>
		<p class="leading-6 text-center my-4">
			{$_('banner.mainBloc.descriptionBegin')}
			<OutboundLink
				href="https://aycandoo.fr/"
				id="aycandoo"
				class="text-white font-normal hover:text-secondary"
				>{$_('banner.mainBloc.aycandooLink')}</OutboundLink
			>{$_('banner.mainBloc.descriptionEnd')}
		</p>
		<p class="leading-6 text-center my-4">
			{$_('banner.contactBloc.description')}<br />
			<OutboundLink
				href="mailto:contact@jeremybrochard.dev"
				class="my-0 mx-1 text-white font-normal hover:text-secondary"
			>
				{$_('banner.contactBloc.contactLink')}
			</OutboundLink>.
		</p>
		<p class="flex items-center pt-4 my-4 gap-3">
			<OutboundLink
				href="https://www.linkedin.com/in/jeremy-brochard"
				class="my-0 w-7 hover:scale-110"
			>
				<img src={LinkedInIcon} alt={$_('banner.actionsBloc.linkedIn')} />
			</OutboundLink>
			<OutboundLink href="https://github.com/jeremybrochard" class="my-0 w-7 hover:scale-110">
				<img src={GithubIcon} alt={$_('banner.actionsBloc.github')} />
			</OutboundLink>
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 w-8 hover:scale-110">
				<img src={AycandooIcon} alt={$_('banner.actionsBloc.contact')} />
			</OutboundLink>
			<OutboundLink href="mailto:contact@jeremybrochard.dev" class="my-0 w-7 hover:scale-110">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="2 2 21 20"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-7 h-7"
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
			class="no-underline text-accentuated font-bold hover:underline hover:scale-110 mx-1 mt-8 mb-12 md:mt-24"
			href="#work-references"
			aria-label={$_('banner.actionsBloc.references')}
			onclick={smoothAnchorClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-9 h-"
				role="img"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</a>
	</div>
	<div class="text-right p-2">
		{#if pauseClass}
			<button
				onclick={resumeAnimation}
				aria-label={$_('banner.actionsBloc.resumeAnimation')}
				class="hover:ring-1 hover:ring-secondary"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="my-0 mx-1 h-6 w-6"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"
					/>
				</svg>
			</button>
		{:else}
			<button
				onclick={pauseAnimation}
				aria-label={$_('banner.actionsBloc.pauseAnimation')}
				class="hover:ring-1 hover:ring-secondary"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="my-0 mx-1 h-6 w-6"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.25-7C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"
					/>
				</svg>
			</button>
		{/if}
	</div>
</section>

<style lang="scss">
	@use 'sass:math';
	@use 'sass:string';

	.pause {
		animation-play-state: paused !important;
	}

	@mixin stars-generator($size, $shadows, $speed, $top) {
		width: $size;
		height: $size;
		background: transparent;
		box-shadow: $shadows;
		animation: animStar $speed linear infinite;

		&:after {
			content: ' ';
			position: absolute;
			top: $top;
			width: $size;
			height: $size;
			background: transparent;
			box-shadow: $shadows;
		}
	}

	@function multiple-box-shadow($n, $x, $y) {
		$value: '#{math.random($x)}px #{math.random($y)}px #FFF';
		@for $i from 2 through $n {
			$value: '#{$value} , #{math.random($x)}px #{math.random($y)}px #FFF';
		}

		@return string.unquote($value);
	}

	$shadows-small: multiple-box-shadow(300, 780, 1000);
	$shadows-medium: multiple-box-shadow(80, 780, 1000);
	$shadows-big: multiple-box-shadow(40, 780, 1000);

	.stars {
		@include stars-generator(1px, $shadows-small, 50s, 1000px);
	}

	.stars2 {
		@include stars-generator(2px, $shadows-medium, 100s, 1000px);
	}

	.stars3 {
		@include stars-generator(3px, $shadows-big, 150s, 1000px);
	}

	@media (min-width: 768px) {
		$shadows-small: multiple-box-shadow(500, 1100, 1000);
		$shadows-medium: multiple-box-shadow(100, 1100, 1000);
		$shadows-big: multiple-box-shadow(80, 1100, 1000);

		.stars {
			@include stars-generator(1px, $shadows-small, 50s, 1000px);
		}

		.stars2 {
			@include stars-generator(2px, $shadows-medium, 100s, 1000px);
		}

		.stars3 {
			@include stars-generator(3px, $shadows-big, 150s, 1000px);
		}
	}

	@media (min-width: 1024px) {
		$shadows-small: multiple-box-shadow(700, 1600, 1000);
		$shadows-medium: multiple-box-shadow(180, 1600, 1000);
		$shadows-big: multiple-box-shadow(100, 1600, 1000);

		.stars {
			@include stars-generator(1px, $shadows-small, 50s, 1000px);
		}

		.stars2 {
			@include stars-generator(2px, $shadows-medium, 100s, 1000px);
		}

		.stars3 {
			@include stars-generator(3px, $shadows-big, 150s, 1000px);
		}
	}

	@media (min-width: 1536px) {
		$shadows-small: multiple-box-shadow(800, 3000, 1000);
		$shadows-medium: multiple-box-shadow(250, 3000, 1000);
		$shadows-big: multiple-box-shadow(150, 3000, 1000);

		.stars {
			@include stars-generator(1px, $shadows-small, 50s, 1000px);
		}

		.stars2 {
			@include stars-generator(2px, $shadows-medium, 100s, 1000px);
		}

		.stars3 {
			@include stars-generator(3px, $shadows-big, 150s, 1000px);
		}
	}

	@keyframes animStar {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-1000px);
		}
	}
</style>

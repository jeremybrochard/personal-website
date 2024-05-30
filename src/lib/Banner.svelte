<script lang="ts">
	import LinkedInIcon from '$lib/assets/social-media-icons/linkedin.svg';
	import GithubIcon from '$lib/assets/social-media-icons/github.svg';
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
		<div>Hello, je suis</div>
		<h1 class="my-1 mx-0 text-secondary text-2xl font-semibold">Jérémy Brochard</h1>
		<h2 class="my-8 mx-0 text-center text-4xl font-semibold">Développeur Angular / JS / Full stack</h2>
		<p class="leading-6 text-center my-4">
			Après plus de 8 ans passés en SSII et plusieurs missions chez des clients comme la Société
			Générale ou LexisNexis, j'ai décidé de me lancer en tant qu'indépendant en créant <OutboundLink
				href="https://aycandoo.fr/"
				id="aycandoo">AYCANDO</OutboundLink
			>, ma propre société.
		</p>
		<p class="leading-6 text-center my-4">
			Vous avez une idée ou un projet de site ou d'application web ? Je peux vous accompagner aussi
			bien dans sa réalisation que sa maintenance.<br />
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 mx-1 cu-contact">
				Prenez contact avec notre équipe AYCANDOO
			</OutboundLink>.
		</p>
		<p class="flex pt-4 my-4">
			<OutboundLink
				href="https://www.linkedin.com/in/celine-ung"
				id="cu-linkedin"
				class="my-0 mx-1 w-5"
			>
				<img src={LinkedInIcon} alt="Profile LinkedIn de Céline" />
			</OutboundLink>
			<OutboundLink href="https://github.com/celineung" id="cu-github" class="my-0 mx-1 w-5">
				<img src={GithubIcon} alt="Profile Github de Céline" />
			</OutboundLink>
			<OutboundLink href="https://aycandoo.fr/contact/" class="my-0 mx-1 w-5 cu-contact">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="2 2 21 20"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
					role="img"
					aria-label="Prise de contact par mail"
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
				aria-label="Aller à la section suivante"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</a>
	</div>
</section>

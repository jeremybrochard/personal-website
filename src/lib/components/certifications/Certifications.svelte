<script lang="ts">
	import OpquastBadgeImg from '$lib/assets/certifications/opquast-badge.png';
	import OpquastLogoImg from '$lib/assets/certifications/opquast-logo.svg';
	import { _ } from 'svelte-i18n';
	import CertificationElement from './CertificationElement.svelte';
</script>

<section id="certifications" class="flex flex-col items-center m-auto pb-32 px-6 max-w-6xl">
	<h2 class="mt-1 mb-6 mx-0 text-2xl font-semibold">{$_('certifications.title')}</h2>
	<div class="flex justify-center">
		<CertificationElement
			logo={OpquastLogoImg}
			title={$_('certifications.opquast.title')}
			subtitle={$_('certifications.opquast.subtitle')}
			score={$_('certifications.opquast.score')}
			badge={OpquastBadgeImg}
			description={$_('certifications.opquast.description')}
			actionUrl={$_('certifications.opquast.url')}
			actionLabel={$_('certifications.opquast.urlLabel')}
		/>
	</div>
</section>

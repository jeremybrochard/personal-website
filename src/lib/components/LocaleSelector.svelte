<script lang="ts">
	import FranceFlagIcon from '$lib/assets/country-flags/france.png';
	import UKFlagIcon from '$lib/assets/country-flags/united-kingdom.png';
	import { _, locale } from 'svelte-i18n';

	const countryFlags = [
		{ image: UKFlagIcon, locale: `en`, label: 'actions.translateEn' },
		{ image: FranceFlagIcon, locale: `fr`, label: 'actions.translateFr' }
	];

	const updateLocale = (newLang: string): void => {
		locale.set(newLang);
	};
</script>

<div class="flex my-0 mx-4">
	{#each countryFlags as country}
		<button
			class="hover:ring-1 hover:ring-secondary"
			onclick={() => updateLocale(country.locale)}
			aria-label={$_(country.label)}
		>
			<img class="my-0 mx-1 w-6 h-6 block" src={country.image} alt={$_(country.label)} />
		</button>
	{/each}
</div>

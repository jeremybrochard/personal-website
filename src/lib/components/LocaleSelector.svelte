<script lang="ts">
	import FranceFlagIcon from '$lib/assets/country-flags/france.png';
	import UKFlagIcon from '$lib/assets/country-flags/united-kingdom.png';
	import { locale } from 'svelte-i18n';

	const countryFlags = [
		{ image: UKFlagIcon, locale: `en` },
		{ image: FranceFlagIcon, locale: `fr` }
	];

	const updateLocale = (newLang: string): void => {
		locale.set(newLang);
	};
</script>

<div class="flex my-0 mx-4">
	{#each countryFlags as country}
		<button class="hover:ring-1 hover:ring-secondary" on:click={() => updateLocale(country.locale)}>
			<img class="my-0 mx-1 w-6 h-6 block" src={country.image} alt={country.locale} />
		</button>
	{/each}
</div>

import { browser } from '$app/environment';
import { addMessages, init } from 'svelte-i18n';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const defaultLocale = 'fr';

addMessages('en', en);
addMessages('fr', fr);

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language.slice(0, 2) : defaultLocale
});

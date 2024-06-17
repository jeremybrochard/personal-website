import { browser } from '$app/environment';
import { register, init } from 'svelte-i18n';

const defaultLocale = 'fr';

register('en', () => import('../locales/en.json'));
register('fr', () => import('../locales/fr.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language.slice(0, 2) : defaultLocale
});

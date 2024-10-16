/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#383838',
        primary_darker: '#121212',
				secondary: '#5C44E4',
        tertiary: '#8514F5',
        accentuated: '#E90464'
			},
			grayscale: {
				70: '70%'
			}
		}
	},
	plugins: []
};

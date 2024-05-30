/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#383838',
				secondary: '#8c77ee'
			},
			grayscale: {
				70: '70%'
			}
		}
	},
	plugins: []
};

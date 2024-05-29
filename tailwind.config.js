/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#383838',
				secondary: '#ee7796'
			},
      grayscale: {
        70: '70%',
      }
		}
	},
	plugins: []
};
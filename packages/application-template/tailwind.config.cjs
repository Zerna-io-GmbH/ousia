module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@ousia/application-ui/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};

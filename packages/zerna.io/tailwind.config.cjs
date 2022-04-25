module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@ousia/application-ui/components/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography')
	]
};

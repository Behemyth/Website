// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/devtools',
		'nuxt-icon',
		'@nuxtjs/tailwindcss'
	],
	// https://color-mode.nuxtjs.org
	colorMode: {
		classSuffix: ''
	},
	// https://content.nuxtjs.org
	content: {
		documentDriven: true,
		navigation: {
			fields: ['navTitle']
		},
		highlight: {
			// See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
			theme: {
				dark: 'github-dark',
				default: 'github-light'
			}
		}
	}
})

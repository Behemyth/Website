
// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
	elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
	typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography'
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	extends: [envModules.typography, envModules.elements],
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'nuxt-icon'
	],
	// https://color-mode.nuxtjs.org
	colorMode: {
		classSuffix: ''
	},
	// https://content.nuxtjs.org
	content: {
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

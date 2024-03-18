// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	ssr: true,
	modules: [
		'@nuxt/content',
		'@nuxt/devtools',
		'@nuxt/image',
		'@nuxtjs/i18n',
		'@nuxt/ui'
	],
	// https://color-mode.nuxtjs.org
	colorMode: {
	},
	ui: {
		icons: ['mdi']
	},
	// https://content.nuxtjs.org
	content: {
		markdown: {
			toc: {
				depth: 3,
				searchDepth: 3
			}
		},
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
		},
		experimental: {
			search: {
				indexed: true
			}
		}
	},
	// https://image.nuxt.com/
	image: {
		format: ['webp'],
		domains: ['www.gravatar.com', 'image.tmdb.org'],
		alias: {
			tmdb: 'https://image.tmdb.org/t/p/original',
			gravatar: 'https://www.gravatar.com'
		},
		dir: 'public'
	},
	devtools: {
		enabled: true
	},
	typescript: {
		strict: true
	},
	nitro: {
		// static: true, // Not set, to support 'dev' server. Default is `static: true` for 'start' and 'generate' commands
		prerender: {
			crawlLinks: true,
			interval: 50 // 50ms to avoid rate limiting of the TMDB API
		}
	},
	i18n: {
		detectBrowserLanguage: {
			useCookie: true,
			fallbackLocale: 'en'
		},
		strategy: 'no_prefix',
		locales: [
			{
				code: 'en',
				name: 'English',
				file: 'en.json'
			},
			{
				code: 'pl',
				name: 'Polski',
				file: 'pl.json'
			}
		],
		lazy: true,
		langDir: 'locales',
		defaultLocale: 'en'
	},
	runtimeConfig: {
		apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
		public: {
			apiBase: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
		}
	}
})

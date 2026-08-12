// @ts-check

import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.andriistavskyi.me/',
	integrations: [sitemap()],
	vite: {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
})

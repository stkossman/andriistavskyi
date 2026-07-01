export const LICENSES_TEXT = {
	fonts: {
		title: 'Fonts Licenses',
		description:
			'License information is taken from installed Fontsource package metadata.',
		backLabel: 'Back',
		eyebrow: 'Licenses',
	},
	packages: {
		title: 'Package Licenses',
		description:
			'Package license references are taken from installed package metadata.',
		backLabel: 'Back',
		eyebrow: 'Licenses',
	},
	labels: {
		package: 'Package',
		license: 'License',
		source: 'Source',
	},
} as const

export const FONT_LICENSES = [
	{
		name: 'Arimo',
		packageName: '@fontsource/arimo',
		license: 'Apache-2.0',
		source: 'package metadata',
		href: 'https://fontsource.org/fonts/arimo',
	},
	{
		name: 'Space Mono',
		packageName: '@fontsource/space-mono',
		license: 'OFL-1.1',
		source: 'package metadata',
		href: 'https://fontsource.org/fonts/space-mono',
	},
] as const

export const PACKAGE_LICENSES = [
	{
		name: 'Astro',
		packageName: 'astro',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://astro.build',
	},
	{
		name: 'Astro Sitemap',
		packageName: '@astrojs/sitemap',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://docs.astro.build/en/guides/integrations-guide/sitemap/',
	},
	{
		name: 'Tailwind CSS',
		packageName: 'tailwindcss',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://tailwindcss.com',
	},
	{
		name: 'Tailwind CSS Vite Plugin',
		packageName: '@tailwindcss/vite',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://tailwindcss.com',
	},
	{
		name: 'Vercel Analytics',
		packageName: '@vercel/analytics',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://vercel.com/analytics',
	},
	{
		name: 'Vercel Speed Insights',
		packageName: '@vercel/speed-insights',
		license: 'Apache-2.0',
		source: 'package metadata',
		href: 'https://vercel.com/speed-insights',
	},
	{
		name: 'Astro Check',
		packageName: '@astrojs/check',
		license: 'MIT',
		source: 'package metadata',
		href: 'https://github.com/withastro/astro/tree/main/packages/language-tools/astro-check',
	},
	{
		name: 'Biome',
		packageName: '@biomejs/biome',
		license: 'MIT OR Apache-2.0',
		source: 'package metadata',
		href: 'https://biomejs.dev',
	},
	{
		name: 'TypeScript',
		packageName: 'typescript',
		license: 'Apache-2.0',
		source: 'package metadata',
		href: 'https://www.typescriptlang.org/',
	},
] as const

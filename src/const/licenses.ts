export const LICENSES_TEXT = {
	fonts: {
		title: 'Fonts Licenses',
		description:
			'License information is taken from installed Fontsource package metadata.',
		backLabel: 'Back',
		eyebrow: 'Licenses',
	},
	stack: {
		title: 'Stack',
		description:
			'The small set of tools and packages used to build and ship this site.',
		backLabel: 'Back',
		eyebrow: 'Stack',
	},
	labels: {
		package: 'Package',
		license: 'License',
		source: 'Source',
		role: 'Role',
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

export const STACK_ITEMS = [
	{
		name: 'Astro',
		packageName: 'astro',
		license: 'MIT',
		role: 'Static site framework',
		href: 'https://astro.build',
	},
	{
		name: 'TypeScript',
		packageName: 'typescript',
		license: 'Apache-2.0',
		role: 'Typed JavaScript tooling',
		href: 'https://www.typescriptlang.org/',
	},
	{
		name: 'Tailwind CSS',
		packageName: 'tailwindcss',
		license: 'MIT',
		role: 'Utility-first styling',
		href: 'https://tailwindcss.com',
	},
	{
		name: 'Bun',
		packageName: 'bun',
		license: 'MIT',
		role: 'Package manager and local scripts',
		href: 'https://bun.sh',
	},
	{
		name: 'Vercel',
		packageName: '@vercel/analytics, @vercel/speed-insights',
		license: 'MIT, Apache-2.0',
		role: 'Analytics and performance instrumentation',
		href: 'https://vercel.com',
	},
	{
		name: 'Arimo',
		packageName: '@fontsource/arimo',
		license: 'Apache-2.0',
		role: 'Primary typeface',
		href: 'https://fontsource.org/fonts/arimo',
	},
	{
		name: 'Space Mono',
		packageName: '@fontsource/space-mono',
		license: 'OFL-1.1',
		role: 'Index labels and metadata',
		href: 'https://fontsource.org/fonts/space-mono',
	},
] as const

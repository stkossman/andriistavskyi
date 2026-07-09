export const LICENSES_TEXT = {
	fonts: {
		title: 'Fonts Licenses',
		description:
			'License information is taken from installed Fontsource package metadata.',
		backLabel: 'Back',
	},
	stack: {
		title: 'Stack',
		description:
			'The small set of tools and packages used to build and ship this site.',
		backLabel: 'Back',
	},
	labels: {
		font: 'Font',
		package: 'Package',
		license: 'License',
		source: 'Source',
	},
} as const

export const FONT_LICENSES = [
	{
		name: 'IBM Plex Sans',
		packageName: '@fontsource/ibm-plex-sans',
		license: 'OFL-1.1',
		source: 'package metadata',
		href: 'https://fontsource.org/fonts/ibm-plex-sans',
	},
	{
		name: 'Geist Mono',
		packageName: '@fontsource-variable/geist-mono',
		license: 'OFL-1.1',
		source: 'package metadata',
		href: 'https://fontsource.org/fonts/geist-mono',
	},
] as const

export const STACK_ITEMS = [
	{
		name: 'Astro',
		role: 'Static site framework',
	},
	{
		name: 'TypeScript',
		role: 'Language and tooling',
	},
	{
		name: 'Tailwind CSS',
		role: 'Styling',
	},
	{
		name: 'Bun',
		role: 'Package and runtime tooling',
	},
	{
		name: 'Vercel',
		role: 'Deployment',
	},
	{
		name: 'Fontsource',
		role: 'Local font packages',
	},
] as const

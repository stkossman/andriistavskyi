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

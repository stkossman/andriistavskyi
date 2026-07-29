export const LICENSES_TEXT = {
	stack: {
		title: 'Stack',
		description:
			'The small set of tools and packages used to build and ship this site.',
		backLabel: 'Back',
	},
} as const

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
] as const

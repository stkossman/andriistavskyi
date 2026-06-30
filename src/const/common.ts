export const COMMON_TEXT = {
	FOOTER: {
		TYPEFACE: 'Typeface:',
		TYPEFACE_CREDIT: 'Typefaces: Unbounded, Arimo, Shippori Mincho, Space Mono',
		TYPEFACES: [
			{
				label: 'Unbounded',
				href: 'https://fontsource.org/fonts/unbounded',
			},
			{
				label: 'Arimo',
				href: 'https://fontsource.org/fonts/arimo',
			},
			{
				label: 'Shippori Mincho',
				href: 'https://fontsource.org/fonts/shippori-mincho',
			},
			{
				label: 'Space Mono',
				href: 'https://fontsource.org/fonts/space-mono',
			},
		],
		BUILT_WITH: `© ${new Date().getFullYear()} Andrii Stavskyi`,
	},
	COMPONENTS: {
		CLOCK_COUNTRY: 'Ukraine',
		VIEW_REPO: 'View Repository',
		CURSOR_REPO: 'Repo',
	},
} as const

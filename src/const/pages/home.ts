export const HOME_PAGE = {
	title: 'andrii stavskyi',
	identityLabel: 'Identity details',
	identity: [
		{ label: 'Role', value: 'Full-Stack Software Engineer' },
		{ label: 'Currently', value: 'SoftServe', href: 'softServeHref' },
		{ label: 'Location', value: 'Ukraine' },
	],
	intro:
		'I build web applications and software systems with an emphasis on clear behavior, maintainable code, and practical interfaces.',
	selectedWorkTitle: 'Selected Work',
	aboutPreview: {
		title: 'About',
		paragraphs: [
			"I'm a Full-Stack Software Engineer working primarily with .NET and modern web technologies. I care about maintainable systems, clear boundaries, and interfaces that stay predictable as products grow.",
			'Outside software, I spend time reading, writing, playing guitar, and training calisthenics.',
		],
		link: { label: 'About', href: '/about/' },
	},
} as const

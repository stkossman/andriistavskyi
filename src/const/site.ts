export const SITE = {
	name: 'andrii stavskyi',
	lowercaseName: 'andrii stavskyi',
	title: 'andrii stavskyi',
	description:
		'andrii stavskyi is a Full-Stack Software Engineer from Ukraine building maintainable web applications and practical interfaces.',
	url: 'https://www.andriistavskyi.me/',
	ogImage: '/og-image.jpg',
	softServeHref: 'https://www.softserveinc.com/',
	lastUpdated: 'August 2026',
	copyrightYear: '2026',
} as const

export const PRIMARY_NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Work', href: '/work/' },
	{ label: 'About', href: '/about/' },
] as const

export const FOOTER_NAV_LINKS = [
	...PRIMARY_NAV_LINKS,
	{ label: 'People', href: '/people/' },
	{ label: 'Site Map', href: '/sitemap/' },
	{ label: 'About This Site', href: '/about/site/' },
] as const

export const FOOTER_BADGES = ['MADE WITH ASTRO', 'BUILT IN UKRAINE'] as const

export const SITE_UI = {
	skipLink: 'Skip to content',
	primaryNavLabel: 'Primary',
	externalNavLabel: 'External',
	footerInternalNavLabel: 'Footer internal',
	footerExternalNavLabel: 'Footer external',
	siteBadgesLabel: 'Site badges',
	lastUpdatedLabel: 'Last updated:',
} as const

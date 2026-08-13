export const SITEMAP_PAGE = {
	title: 'Site map',
	description: 'Human-facing site map for andrii stavskyi.',
	breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Site map' }],
	sections: {
		main: {
			title: 'Main',
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'Work', href: '/work/' },
				{ label: 'About', href: '/about/' },
			],
		},
		work: { title: 'Work' },
		site: {
			title: 'Site',
			links: [
				{ label: 'About This Site', href: '/about/site/' },
				{ label: 'Site Map', href: '/sitemap/' },
			],
		},
		external: { title: 'External' },
	},
} as const

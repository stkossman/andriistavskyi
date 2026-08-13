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
				{ label: 'People', href: '/people/' },
			],
		},
		about: {
			title: 'About',
			links: [
				{ label: 'Overview', href: '/about/' },
				{ label: 'Career', href: '/about/career/' },
				{ label: 'Recent Updates', href: '/about/updates/' },
				{ label: 'About This Site', href: '/about/site/' },
			],
		},
		work: { title: 'Work' },
		external: { title: 'External' },
	},
} as const

const ABOUT_OVERVIEW_ROUTE = '/about/' as const
const ABOUT_CAREER_ROUTE = '/about/career/' as const
const ABOUT_UPDATES_ROUTE = '/about/updates/' as const
const ABOUT_SITE_ROUTE = '/about/site/' as const

export const ABOUT_ROUTES = {
	overview: ABOUT_OVERVIEW_ROUTE,
	career: ABOUT_CAREER_ROUTE,
	updates: ABOUT_UPDATES_ROUTE,
	site: ABOUT_SITE_ROUTE,
} as const

export const ABOUT_NAV_LINKS = [
	{ label: 'Overview', href: ABOUT_OVERVIEW_ROUTE },
	{ label: 'Career', href: ABOUT_CAREER_ROUTE },
	{ label: 'Recent Updates', href: ABOUT_UPDATES_ROUTE },
	{ label: 'About This Site', href: ABOUT_SITE_ROUTE },
] as const

export const ABOUT_PAGE = {
	title: 'About',
	description:
		'About andrii stavskyi, a Full-Stack Software Engineer from Ukraine.',
	breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'About' }],
	navLabel: 'About sections',
	sections: {
		intro: {
			title: 'Intro',
			paragraphs: [
				"I'm a Full-Stack Software Engineer from Ukraine working primarily with .NET and modern web technologies.",
				'I prefer software that is predictable, maintainable, and easy to reason about. Most of my attention goes to clear boundaries, practical interfaces, and code that can be changed without first being decoded.',
				'I work across backend and frontend development and tend to treat them as parts of the same system rather than separate disciplines.',
			],
		},
		moreAboutMe: {
			title: 'More About Me',
		},
		outsideSoftware: {
			title: 'Outside software',
			paragraphs: [
				'Outside software, I spend time reading and writing, playing guitar, and training calisthenics.',
			],
		},
		people: {
			title: 'People',
			paragraphs: [
				'Some of the most useful things I have learned came from people I worked with, studied with, or met along the way.',
				'I keep a small list of people whose work and professional judgment I trust.',
			],
			link: { label: 'People I recommend', href: '/people' },
		},
		details: {
			title: 'Details',
			rows: [
				['Location', 'Ukraine'],
				['Work', 'Software engineering'],
				['Focus', '.NET / web systems'],
				['Interests', 'Reading, writing, guitar, calisthenics'],
				['Languages', 'Ukrainian, English'],
			],
		},
	},
} as const

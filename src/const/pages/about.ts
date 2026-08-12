export const ABOUT_PAGE = {
	title: 'About',
	description:
		'About andrii stavskyi, a Full-Stack Software Engineer from Ukraine.',
	breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'About' }],
	sections: {
		intro: {
			title: 'Intro',
			paragraphs: [
				"I'm a Full-Stack Software Engineer from Ukraine working primarily with .NET and modern web technologies.",
				'I prefer software that is predictable, maintainable, and easy to reason about. Most of my attention goes to clear boundaries, practical interfaces, and code that can be changed without first being decoded.',
				'I work across backend and frontend development and tend to treat them as parts of the same system rather than separate disciplines.',
			],
		},
		experience: { title: 'Experience' },
		education: { title: 'Education' },
		sideProjects: {
			title: 'Side projects',
			paragraphs: [
				'I usually start personal projects because there is either a small problem I want solved properly or an idea I want to understand by building it.',
				'I prefer focused applications with a clear purpose over projects created only to demonstrate a technology stack. Soliloquy is the clearest example of that approach.',
			],
			link: { label: 'View selected work', href: '/work/' },
		},
		outsideSoftware: {
			title: 'Outside software',
			paragraphs: [
				'Outside software, I spend time reading and writing, playing guitar, and training calisthenics.',
				'Most of these are deliberately offline activities - a useful counterweight to work that is otherwise spent almost entirely in front of a screen.',
			],
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

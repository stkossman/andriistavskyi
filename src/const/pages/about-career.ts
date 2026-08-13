import { ABOUT_ROUTES } from '@/const/pages/about'

export const ABOUT_CAREER_PAGE = {
	title: 'Career',
	description:
		'Career timeline and professional background for andrii stavskyi.',
	breadcrumbs: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: ABOUT_ROUTES.overview },
		{ label: 'Career' },
	],
	intro: 'A chronological record of my professional work and education.',
	sections: {
		experience: { title: 'Experience' },
		education: { title: 'Education' },
	},
} as const

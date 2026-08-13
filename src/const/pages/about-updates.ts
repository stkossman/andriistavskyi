import { ABOUT_ROUTES } from '@/const/pages/about'

export const ABOUT_UPDATES_PAGE = {
	title: 'Recent Updates',
	description: 'Recent portfolio and site updates for andrii stavskyi.',
	breadcrumbs: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: ABOUT_ROUTES.overview },
		{ label: 'Recent Updates' },
	],
	sections: {
		updates: {
			title: 'Recent Updates',
			items: [
				{
					period: 'Aug 2026',
					description: 'Launched the retro version of this website.',
				},
				{
					period: 'Jul 2026',
					description: '» Joined SoftServe as a Trainee Software Engineer.',
				},
				{
					period: 'Jul 2026',
					description:
						'Started developing a tutoring management platform for a private tutor with direct user feedback. Currently in pre-1.0 development.',
				},
				{
					period: 'Jul 2026',
					description:
						'Released Soliloquy v0.1.0, the first public version of my local-first writing application.',
				},
				{
					period: 'Jun 2026',
					description:
						'Completed the SoftServe Full-Stack .NET / React internship and continued contributing to Victory Center as a volunteer.',
				},
				{
					period: 'Mar 2026',
					description:
						'» Started the SoftServe internship and joined the Victory Center project.',
				},
				{
					period: 'Jan 2026',
					description:
						'Led a three-person team in building the Cinema Booking Platform.',
				},
				{
					period: 'Nov 2024',
					description: 'Completed Harvard`s CS50x.',
				},
				{
					period: 'Sep 2023',
					description:
						'» Started studying Computer Science at the National University of Ostroh Academy.',
				},
				{
					period: 'May 2023',
					description: 'Earned the Cambridge B2 English qualification.',
				},
				{
					period: 'Sep 2021',
					description:
						'» Started learning programming and web development at technical college.',
				},
			],
		},
	},
} as const

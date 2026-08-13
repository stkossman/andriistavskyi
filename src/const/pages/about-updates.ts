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
					period: 'August 2026',
					description:
						'Rebuilt this portfolio around an early-web visual direction.',
				},
				{
					period: 'July 2026',
					description: 'Joined SoftServe as a Trainee Software Engineer.',
				},
				{
					period: 'July 2026',
					description: 'Released the first public version of Soliloquy.',
				},
				{
					period: 'June 2026',
					description:
						'Completed the Full-Stack .NET / React internship at SoftServe and continued contributing to Victory Center as a volunteer.',
				},
				{
					period: 'March 2026',
					description:
						'Started the SoftServe internship and joined the Victory Center project.',
				},
				{
					period: '2026',
					description:
						'Led a three-person team building the Cinema Booking Platform.',
				},
			],
		},
	},
} as const

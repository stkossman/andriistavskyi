import { ABOUT_ROUTES } from '@/const/pages/about'

export const ABOUT_SITE_PAGE = {
	title: 'About This Site',
	description:
		"Notes on the visual direction and implementation of this version of andrii stavskyi's portfolio.",
	breadcrumbs: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: ABOUT_ROUTES.overview },
		{ label: 'About This Site' },
	],
	sections: [
		{
			title: 'About this version',
			paragraphs: [
				'This version of the portfolio is an experiment in applying early-web design language to a modern personal website.',
				'The goal was not to reproduce an old browser or build a nostalgia piece, but to keep some of the directness of early professional websites: visible structure, ordinary hyperlinks, restrained typography, simple navigation, and very little interface decoration.',
			],
		},
		{
			title: 'Visual references',
			paragraphs: [
				'The main visual references include AuctionWeb / early eBay, early Apple, and early Google.',
				'I was particularly interested in the way these websites separated navigation from content, used typography and rules instead of layered interface components, and treated links as part of the visual language rather than hiding them behind buttons.',
			],
		},
		{
			title: 'Implementation',
			paragraphs: [
				'The implementation itself is modern: Astro, TypeScript, SCSS, semantic HTML, responsive layouts, and static generation.',
				'JavaScript is intentionally kept to a minimum, and the historical references influence presentation rather than implementation practices.',
			],
		},
	],
} as const

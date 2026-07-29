import { CONTACT_LINKS } from '@/const/contact'
import { SITE } from '@/const/site'

export const HOME = {
	hero: {
		label: 'Currently',
		name: SITE.lowercaseName,
		descriptionStart:
			'Frontend-focused full-stack developer working with React, TypeScript, Astro, and .NET. Currently at ',
		companyLabel: 'SoftServe',
		descriptionEnd:
			'. I build practical interfaces, reliable flows, and maintainable web systems.',
		backgroundAction: 'Background',
	},
	background: {
		label: 'Background',
		statement: ['Clear', 'Practical', 'Curious', 'Well made'],
		body: 'I like building things that do their job without asking for attention. Curiosity and small experiments help uncover better ways to make clear interfaces, predictable flows, and maintainable code. The goal is simple: make the product easier to use, easier to reason about, and harder to break.',
	},
	origin: {
		label: 'Point of origin',
		coordinates: '50°35′N 27°38′E',
	},
	work: {
		label: 'Work',
	},
	entries: {
		label: 'Entries',
		backLabel: 'Back',
	},
	licenses: {
		label: 'References',
		description:
			'Small reference page for the font packages used by this site.',
		links: [{ label: 'Stack', href: '/stack' }],
	},
	contact: {
		label: 'Contact',
		description: 'Direct links for work, collaboration, and profile context.',
		links: CONTACT_LINKS,
	},
} as const

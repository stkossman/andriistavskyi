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
		statement: ['Clear', 'Practical', 'Reliable', 'Well made'],
		body: 'I like building things that do their job without asking for attention. Clear interfaces, predictable flows, and maintainable code matter more to me than decoration. The goal is simple: make the product easier to use, easier to reason about, and harder to break.',
	},
	work: {
		label: 'Work',
	},
	entries: {
		label: 'Entries',
		description: 'A few short entries on building software and products.',
		backLabel: 'Back',
	},
	licenses: {
		label: 'References',
		description:
			'Small reference page for the font packages used by this site.',
		links: [
			{ label: 'Fonts Licenses', href: '/fonts-licenses' },
			{ label: 'Stack', href: '/stack' },
		],
	},
	contact: {
		label: 'Contact',
		description: 'Direct links for work, collaboration, and profile context.',
		links: CONTACT_LINKS,
	},
} as const

import { CONTACT_LINKS } from '@/const/contact'
import { SITE } from '@/const/site'

export const HOME = {
	hero: {
		label: 'Currently',
		name: SITE.lowercaseName,
		descriptionStart:
			'Andrii Stavskyi is a frontend-focused full-stack developer working with React, TypeScript, Astro, and .NET. Currently at ',
		companyLabel: 'SoftServe',
		descriptionEnd:
			', he focuses on clean interfaces, reliable product flows, and maintainable web systems. His work spans admin tooling, localization-heavy interfaces, API integration, project reviews, and personal products built with a practical full-stack mindset.',
		backgroundAction: 'Background',
	},
	background: {
		label: 'Background',
		statement: ['Clear', 'Practical', 'Reliable', 'Well made'],
		body: 'Andrii is a Computer Science student and frontend-focused full-stack developer building practical interfaces, maintainable systems, and reliable product flows. His work has grown from personal web projects into React, TypeScript, Astro, and .NET project work, with recent SoftServe context across admin workflows, API integration, reviews, and production-oriented collaboration.',
	},
	work: {
		label: 'Work',
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

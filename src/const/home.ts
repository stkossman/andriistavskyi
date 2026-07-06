import { CONTACT_LINKS } from '@/const/contact'
import { SITE } from '@/const/site'

export const HOME = {
	hero: {
		identity: SITE.identity,
		descriptionStart:
			'Andrii Stavskyi is a frontend-focused full-stack developer working with React, TypeScript, Astro, and .NET. Currently at ',
		companyLabel: 'SoftServe',
		descriptionEnd:
			', he focuses on clean interfaces, reliable product flows, and maintainable web systems. His work spans admin tooling, localization-heavy interfaces, API integration, project reviews, and personal products built with a practical full-stack mindset.',
		backgroundAction: 'Background',
		identityAction: 'Identity',
	},
	identity: {
		label: 'Identity',
		portraitAlt: 'Portrait of Andrii Stavskyi',
		title: 'ANDRII STAVSKYI',
		job: {
			label: 'JOB',
			options: [
				{ label: 'Front', state: 'primary' },
				{ label: 'Back', state: 'secondary' },
				{ label: 'DevOps', state: 'struck' },
				{ label: 'Designer', state: 'struck' },
				{ label: 'QA/QC', state: 'struck' },
				{ label: 'Lead', state: 'struck' },
			],
		},
		experience: {
			label: 'EXPERIENCE',
			options: [
				{ label: '<1y', state: 'primary' },
				{ label: '3y', state: 'muted' },
				{ label: '5y', state: 'muted' },
				{ label: '8y', state: 'muted' },
			],
		},
		issued: {
			label: 'ISSUED',
			value: '01 July 2026',
		},
		origin: {
			label: 'ORIGIN',
			value: 'Made in Ukraine',
		},
		description:
			'Frontend-focused full-stack developer based in Ukraine. Currently at SoftServe, working with React, TypeScript, Astro, and .NET to build clean interfaces, reliable flows, and maintainable systems.',
	},
	background: {
		label: 'Background',
		statement: ['Clear', 'Practical', 'Reliable', 'Well made'],
		body: 'Andrii is a Computer Science student and frontend-focused full-stack developer building practical interfaces, maintainable systems, and reliable product flows. His work has grown from personal web projects into React, TypeScript, Astro, and .NET project work, with recent SoftServe context across admin workflows, API integration, reviews, and production-oriented collaboration.',
	},
	work: {
		label: 'Work',
		accent: '作品',
	},
	licenses: {
		label: 'Licenses',
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

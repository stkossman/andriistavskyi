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
	},
	background: {
		label: 'Background',
		title: 'Developer background',
		description:
			'Andrii is a Computer Science student and developer who started with frontend interfaces and personal web projects, then moved toward full-stack product work with React, TypeScript, Astro, and .NET. His recent work includes SoftServe project context, admin-facing workflows, API integration, and maintainable UI systems built through practical collaboration and review.',
	},
	work: {
		label: 'Work',
		accent: '作品',
		placeholder: 'Select a project to preview the work index.',
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

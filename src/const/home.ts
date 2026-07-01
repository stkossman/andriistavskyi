import { CONTACT_LINKS } from '@/const/contact'
import { SITE } from '@/const/site'

export const HOME = {
	hero: {
		identity: SITE.identity,
		descriptionStart:
			'frontend-focused full-stack developer working with React, TypeScript, Astro, and .NET. currently at ',
		descriptionEnd: '',
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
			{ label: 'Package Licenses', href: '/package-licenses' },
		],
	},
	contact: {
		label: 'Contact',
		description: 'Direct links for work, collaboration, and profile context.',
		links: CONTACT_LINKS,
	},
} as const

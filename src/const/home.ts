import { CONTACT_LINKS } from '@/const/contact'
import { SITE } from '@/const/site'

export const HOME = {
	hero: {
		identity: SITE.identity,
		description:
			'Andrii Stavskyi is a frontend-focused full-stack developer working with React, TypeScript, Astro, and .NET. Currently at SoftServe.',
		links: [
			{ label: 'SoftServe', href: SITE.softServeHref },
			{ label: 'GitHub', href: CONTACT_LINKS[0].href },
			{ label: 'LinkedIn', href: CONTACT_LINKS[1].href },
			{ label: 'Mail', href: CONTACT_LINKS[2].href },
			{ label: 'Resume', href: SITE.resumeHref },
		],
	},
	licenses: {
		number: 'III.',
		label: 'Licenses',
		description:
			'Small reference page for the font packages used by this site.',
		links: [{ label: 'Fonts Licenses', href: '/fonts-licenses' }],
		futureItems: ['Package Licenses'],
	},
	contact: {
		number: 'IV.',
		label: 'Contact',
		description: 'Direct links for work, collaboration, and profile context.',
		links: CONTACT_LINKS,
	},
} as const

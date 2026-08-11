import { SITE } from '@/const/site'

export const CONTACT_LINKS = [
	{ label: 'GitHub', href: 'https://github.com/stkossman' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/andriistavskyi/' },
] as const

export const SOURCE_LINK = {
	label: 'Source',
	href: SITE.repositoryHref,
} as const

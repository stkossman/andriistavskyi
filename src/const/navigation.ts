import { SITE } from '@/const/site'

export const NAVIGATION_LINKS = [
	{ href: '/#work', label: 'Work' },
	{ href: '/#licenses', label: 'Licenses' },
	{ href: '/#contact', label: 'Contact' },
	{ href: SITE.resumeHref, label: 'Resume' },
] as const

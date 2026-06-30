import { FEATURED_PROJECTS, PROJECTS, SECONDARY_PROJECTS } from './projects'

export const WORK_TEXT = {
	HERO: {
		TITLE:
			'Selected work in React, .NET, and local-first web apps. Clean interfaces, focused architecture, and practical systems.',
	},
	LABELS: {
		SCOPE_AND_ROLE: 'Scope & Role',
		STACK: 'Stack',
		FOCUS: 'Technical Focus',
		LINKS: 'Links',
	},
	PROJECTS: FEATURED_PROJECTS,
	ALL_PROJECTS: PROJECTS,
	SECONDARY_PROJECTS,
	FOOTER: {
		TITLE:
			'Smaller experiments and repositories are modeled as secondary projects.',
		LINK_TEXT: 'View GitHub',
		HREF: 'https://github.com/stkossman',
	},
} as const

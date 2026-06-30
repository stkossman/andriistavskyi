import { STACK_ITEMS } from './stack'

export const HOME_TEXT = {
	HERO: {
		TITLE: 'Andrii Stavskyi',
		ROLE: 'Frontend-focused Full-Stack Developer',
		DESCRIPTION:
			'Building clean interfaces, reliable flows, and maintainable web products.',
		PRIMARY_CTA: 'View Work',
		SECONDARY_CTA: 'View Resume',
		VERTICAL_ACCENT: {
			JP_LABEL: '開発者',
			LABEL: 'Record 001',
		},
		SCROLL_CUE: 'Scroll',
		RECORD_CARD: {
			TITLE: 'Selected record',
			LABEL: 'Developer profile',
			META: STACK_ITEMS.join(' · '),
			STAMP: '開発',
			STAMP_ARIA_LABEL: 'Developer seal',
		},
	},
	PROFILE: {
		PARAGRAPH_1:
			"I've spent my recent years diving deep into Frontend Development. Crafting clean, accessible interfaces with modern tooling and a focus on performance and clarity. My current stack centers around React, Astro, TailwindCSS and TypeScript, and I enjoy building minimalist experiences that keep attention on the content.",
		PARAGRAPH_2:
			"My approach centers around minimalism and clarity. I enjoy crafting experiences that respect the user's attention, combining clean aesthetics with robust functionality.",
	},
	STACK: STACK_ITEMS,
	META: {
		AVAILABILITY_LABEL: 'Open to work',
		AVAILABILITY: ['Frontend', 'Full-stack', 'Remote'],
		STACK_LABEL: 'Stack',
	},
} as const

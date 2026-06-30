import { STACK_ITEMS } from './stack'

export const HOME_TEXT = {
	HERO: {
		GREETING: "Hello, I'm Andrii,",
		ROLE_START: 'Frontend-focused',
		ROLE_MIDDLE: 'Developer',
		ROLE_END: 'building clean digital products.',
		DESC_START:
			'React, TypeScript, Astro and .NET developer. Completed a .NET/React internship at ',
		DESC_MIDDLE:
			' and currently open to junior frontend/full-stack opportunities.',
		PRIMARY_CTA: 'View Work',
		SECONDARY_CTA: 'View Resume',
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

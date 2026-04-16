export const WORK_TEXT = {
	HERO: {
		TITLE:
			"A few projects I'm building. Turning complex problems into clean, functional, and minimal software.",
	},
	LABELS: {
		STACK_AND_LINKS: 'Stack & Links',
	},
	PROJECTS: [
		{
			id: 'soliloquy',
			title: 'Soliloquy',
			description: [
				'Soliloquy reimagines the concept of "Saved Messages". Its not just a note-taking app; its a messenger where the only contact is you.',
				'Built with a focus on privacy and speed, Soliloquy stores all data directly in your browser using IndexedDB. No servers, no tracking, no login screens. Just open and write.',
			],
			tech: 'Astro, React, TypeScript, TailwindCSS',
			link: 'https://github.com/stkossman/soliloquy',
		},
		{
			id: 'cinema-front',
			title: 'Cinema Platform - Frontend',
			description: [
				'Modern, immersive web client for the Cinema Management System, developed as part of the SoftServe Practice.',
				'This application provides a premium user interface for booking tickets and a powerful dashboard for cinema administration.',
			],
			tech: 'React, TypeScript, TailwindCSS',
			link: 'https://github.com/ModusTeam/cinema-platform-front',
		},
		{
			id: 'cinema-docs',
			title: 'Cinema Platform - Documentation',
			description: [
				'The official documentation for the Cinema Platform project.',
				'This repository serves as the single source of truth for developers, acting as a central hub that unifies architecture overviews, technical guides, and the REST API specification.',
			],
			tech: 'Astro Starlight, TailwindCSS',
			link: 'https://github.com/ModusTeam/cinema-platform-docs',
		},
	],
} as const

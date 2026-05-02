export const WORK_TEXT = {
	HERO: {
		TITLE:
			"A few projects I'm building. Turning complex problems into clean, functional, and minimal software.",
	},
	LABELS: {
		SCOPE_AND_ROLE: 'Scope & Role',
		STACK_AND_LINKS: 'Stack & Links',
	},
	PROJECTS: [
		{
			id: 'soliloquy',
			title: 'Soliloquy',
			context: 'Personal Project',
			role: 'Full-stack Developer',
			description: [
				'A local-first reimagining of "Saved Messages", designed as a private messenger where the only contact is you.',
				'Engineered for absolute privacy and performance. It leverages IndexedDB (via Dexie.js) for zero-cloud data persistence, wrapped in a highly reactive Astro and React architecture.',
			],
			tech: 'Astro, React, TypeScript, TailwindCSS, Dexie.js',
			link: 'https://github.com/stkossman/soliloquy',
		},
		{
			id: 'victory-center',
			title: 'Victory Center Platform',
			context: 'Internship / SoftServe',
			role: 'Full-stack Developer',
			description: [
				'A comprehensive full-stack management system developed as part of the SoftServe IT Academy. The platform handles dynamic content management, team profiles, and donation processing.',
				'Engineered transactional Admin operations using .NET 9 with CQRS and MediatR patterns. On the client side, I developed key administrative modules in React and resolved intricate form validation edge-cases to ensure a robust user experience.',
			],
			tech: 'C# (.NET 9), React, TypeScript, MediatR, MS SQL',
			link: 'https://github.com/ita-social-projects/VictoryCenter-Back',
		},
		{
			id: 'cinema-front',
			title: 'Cinema Platform - Frontend',
			context: 'Commercial / Practice',
			role: 'Frontend Developer',
			description: [
				'A comprehensive web client for a Cinema Management System, strictly structured around the Feature-Sliced Design (FSD) architectural pattern.',
				'Implements real-time WebSocket synchronization via SignalR for live seat-locking, complex server state management with TanStack Query, and an immersive modern UI.',
			],
			tech: 'React, TypeScript, TailwindCSS, SignalR, TanStack Query',
			link: 'https://github.com/ModusTeam/cinema-platform-front',
		},
		{
			id: 'cinema-docs',
			title: 'Cinema Platform - Documentation',
			context: 'Commercial / Practice',
			role: 'Technical Writer',
			description: [
				'The centralized developer hub and single source of truth for the Cinema Platform ecosystem.',
				'Built with Astro Starlight, featuring an automated integration that parses remote OpenAPI (swagger.json) specifications to generate interactive REST API references alongside architectural guides.',
			],
			tech: 'Astro Starlight, OpenAPI, TailwindCSS',
			link: 'https://github.com/ModusTeam/cinema-platform-docs',
		},
	],
} as const

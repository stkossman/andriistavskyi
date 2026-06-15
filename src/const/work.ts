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
	PROJECTS: [
		{
			id: 'soliloquy',
			title: 'Soliloquy',
			context: 'Personal Project',
			role: 'Full-stack Developer',
			description:
				'A private, local-first notes app inspired by messenger interfaces, where the user is the only contact.',
			focus:
				'Built zero-cloud persistence with IndexedDB and Dexie.js, pairing Astro with React for a fast, minimal writing experience.',
			tech: 'Astro, React, TypeScript, TailwindCSS, Dexie.js',
			link: 'https://github.com/stkossman/soliloquy',
		},
		{
			id: 'victory-center',
			title: 'Victory Center Platform',
			context: 'Internship / SoftServe',
			role: 'Full-stack Developer',
			description:
				'A full-stack management platform for content, team profiles, and donation-related workflows, developed during the SoftServe IT Academy.',
			focus:
				'Implemented admin-facing modules in React and supported transactional .NET 9 operations using CQRS and MediatR patterns.',
			tech: 'C# (.NET 9), React, TypeScript, MediatR, MS SQL',
			link: 'https://github.com/ita-social-projects/VictoryCenter-Back',
		},
		{
			id: 'cinema-front',
			title: 'Cinema Platform - Frontend',
			context: 'Commercial / Practice',
			role: 'Frontend Developer',
			description:
				'A cinema management web client structured around Feature-Sliced Design for a modular, maintainable frontend.',
			focus:
				'Integrated SignalR seat-lock synchronization and TanStack Query server state flows for responsive booking interactions.',
			tech: 'React, TypeScript, TailwindCSS, SignalR, TanStack Query',
			link: 'https://github.com/ModusTeam/cinema-platform-front',
		},
		{
			id: 'cinema-docs',
			title: 'Cinema Platform - Documentation',
			context: 'Commercial / Practice',
			role: 'Technical Writer',
			description:
				'A centralized developer documentation hub for the Cinema Platform ecosystem, built as a practical source of truth.',
			focus:
				'Used Astro Starlight and OpenAPI parsing to generate interactive REST references alongside architecture guides.',
			tech: 'Astro Starlight, OpenAPI, TailwindCSS',
			link: 'https://github.com/ModusTeam/cinema-platform-docs',
		},
	],
	FOOTER: {
		TITLE: 'Smaller experiments and repositories live in the archive.',
		LINK_TEXT: 'Access Arsenal',
		HREF: '/archive',
	},
} as const

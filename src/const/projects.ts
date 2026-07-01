import cinemaDocsImage from '@/assets/images/projects/cinemadocs.png'
import cinemaFrontImage from '@/assets/images/projects/cinemafront.png'
import soliloquyImage from '@/assets/images/projects/soliloquy.png'
import victoryCenterImage from '@/assets/images/projects/victorycenter.png'

export const WORK_SECTION = {
	label: 'Work',
	accent: '作品',
	description:
		'Selected product work and practical systems across React, TypeScript, Astro, and .NET.',
} as const

export const PROJECTS = [
	{
		slug: 'soliloquy',
		title: 'Soliloquy',
		year: '2026',
		status: 'Personal project',
		role: 'Full-stack developer',
		context: 'Personal Project',
		description:
			'A private, local-first notes app inspired by messenger interfaces, where the user is the only contact.',
		focus:
			'Built zero-cloud persistence with IndexedDB and Dexie.js, pairing Astro with React for a fast, minimal writing experience.',
		stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Dexie.js'],
		links: [
			{ label: 'Repository', href: 'https://github.com/stkossman/soliloquy' },
		],
		image: soliloquyImage,
		imageAlt: 'Soliloquy project interface preview.',
	},
	{
		slug: 'victory-center',
		title: 'Victory Center Platform',
		year: '2025',
		status: 'SoftServe IT Academy',
		role: 'Full-stack developer',
		context: 'Internship / SoftServe',
		description:
			'A full-stack management platform for content, team profiles, and donation-related workflows, developed during the SoftServe IT Academy.',
		focus:
			'Implemented admin-facing modules in React and supported transactional .NET 9 operations using CQRS and MediatR patterns.',
		stack: ['C#', '.NET 9', 'React', 'TypeScript', 'MediatR', 'MS SQL'],
		links: [
			{
				label: 'Repository',
				href: 'https://github.com/ita-social-projects/VictoryCenter-Back',
			},
		],
		image: victoryCenterImage,
		imageAlt: 'Victory Center platform interface preview.',
	},
	{
		slug: 'cinema-front',
		title: 'Cinema Platform - Frontend',
		year: '2025',
		status: 'Commercial practice',
		role: 'Frontend developer',
		context: 'Commercial / Practice',
		description:
			'A cinema management web client structured around Feature-Sliced Design for a modular, maintainable frontend.',
		focus:
			'Integrated SignalR seat-lock synchronization and TanStack Query server state flows for responsive booking interactions.',
		stack: ['React', 'TypeScript', 'Tailwind CSS', 'SignalR', 'TanStack Query'],
		links: [
			{
				label: 'Repository',
				href: 'https://github.com/ModusTeam/cinema-platform-front',
			},
		],
		image: cinemaFrontImage,
		imageAlt: 'Cinema Platform frontend preview.',
	},
	{
		slug: 'cinema-docs',
		title: 'Cinema Platform - Documentation',
		year: '2025',
		status: 'Commercial practice',
		role: 'Technical writer',
		context: 'Commercial / Practice',
		description:
			'A centralized developer documentation hub for the Cinema Platform ecosystem, built as a practical source of truth.',
		focus:
			'Used Astro Starlight and OpenAPI parsing to generate interactive REST references alongside architecture guides.',
		stack: ['Astro Starlight', 'OpenAPI', 'Tailwind CSS'],
		links: [
			{
				label: 'Repository',
				href: 'https://github.com/ModusTeam/cinema-platform-docs',
			},
		],
		image: cinemaDocsImage,
		imageAlt: 'Cinema Platform documentation preview.',
	},
] as const

export type Project = (typeof PROJECTS)[number]

export interface Project {
	id: string
	title: string
	context: string
	role: string
	description: string
	focus: string
	tech: string
	link: string
	featured: boolean
	secondary?: boolean
}

export const PROJECTS: Project[] = [
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
		featured: true,
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
		featured: true,
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
		featured: true,
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
		featured: true,
	},
	{
		id: 'stackfetch',
		title: 'StackFetch',
		context: 'Personal Tool',
		role: 'Developer',
		description:
			'CLI that displays essential information about your current working directory.',
		focus:
			'Small developer-experience utility for quickly inspecting project context.',
		tech: 'TypeScript, Shell',
		link: 'https://github.com/stkossman/StackFetch',
		featured: false,
		secondary: true,
	},
	{
		id: 'winup',
		title: 'Winup',
		context: 'Personal Tool',
		role: 'Developer',
		description: 'Minimal CLI tool for managing winget upgrades.',
		focus:
			'Interactive, safe-by-default workflow around Windows package updates.',
		tech: 'Node, TypeScript',
		link: 'https://winup-cli.vercel.app/',
		featured: false,
		secondary: true,
	},
	{
		id: 'toji-theme',
		title: 'Toji Theme',
		context: 'Theme',
		role: 'Designer / Developer',
		description: 'VS Code theme inspired by Toji Fushiguro.',
		focus: 'Editor theme packaging and color system tuning.',
		tech: 'CSS',
		link: 'https://vscodethemes.com/e/Kossman.toji-fushiguro-theme/toji-fushiguro-theme',
		featured: false,
		secondary: true,
	},
	{
		id: 'abysswalker-theme',
		title: 'Abysswalker Theme',
		context: 'Theme',
		role: 'Designer / Developer',
		description: 'A minimal, dark fantasy inspired VS Code theme.',
		focus: 'Editor theme packaging and contrast-focused UI color choices.',
		tech: 'CSS',
		link: 'https://vscodethemes.com/e/Kossman.abysswalker-theme/abysswalker',
		featured: false,
		secondary: true,
	},
	{
		id: 'frameworks-mini-project',
		title: 'Frameworks Mini Project',
		context: 'Experiment',
		role: 'Developer',
		description:
			'A comprehensive collection of mini-projects built with minimalist frameworks.',
		focus:
			'Comparing lightweight frontend approaches across small implementations.',
		tech: 'VanJS, htmx, Alpine.js, Stimulus',
		link: 'https://github.com/stkossman/frameworks-mini-project',
		featured: false,
		secondary: true,
	},
	{
		id: 'ukraine-phone-formatter',
		title: 'Ukraine Phone Formatter',
		context: 'Package',
		role: 'Developer',
		description:
			'A Ruby gem that formats Ukrainian phone numbers into a readable and standardized format.',
		focus:
			'Input normalization and package publishing for a small formatting utility.',
		tech: 'Ruby',
		link: 'https://github.com/stkossman/ukraine_phone_formatter',
		featured: false,
		secondary: true,
	},
]

export const FEATURED_PROJECTS = PROJECTS.filter(project => project.featured)
export const SECONDARY_PROJECTS = PROJECTS.filter(project => project.secondary)

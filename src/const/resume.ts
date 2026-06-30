import { EXPERIENCE_ITEMS } from './experience'

export const BULLET = '✱'

export const RESUME_TEXT = {
	META: {
		TITLE: 'Resume — Andrii Stavskyi',
	},
	HEADER: {
		ROLE: 'Full-Stack Developer',
		NAME: 'Andrii Stavskyi',
		DOWNLOAD: 'Download PDF',
		CONTACT_INFO: 'an.stawski@outlook.com | +380730929621 | Zviahel, Ukraine',
	},
	LINKS: [
		{ label: 'Website', href: '/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/andriistavskyi/' },
		{ label: 'GitHub', href: 'https://github.com/stkossman' },
	],
	SECTIONS: {
		SUMMARY: {
			TITLE: 'Summary',
			CONTENT:
				'Frontend-oriented Full-Stack Developer with hands-on experience building React, TypeScript, Astro and .NET applications. Completed a .NET/React internship at SoftServe, working on admin modules, validation-heavy forms, and backend operations. Focused on clean UI, maintainable architecture, and fast developer experience.',
		},
		EXPERIENCE: {
			TITLE: 'Experience',
		},
		EDUCATION: {
			TITLE: 'Education',
		},
		PROJECTS: {
			TITLE: 'Selected Projects',
		},
		SKILLS: {
			TITLE: 'Skills',
		},
		CERTIFICATIONS: {
			TITLE: 'Certifications & Languages',
		},
	},
	EXPERIENCE: EXPERIENCE_ITEMS,
	EDUCATION: {
		INSTITUTION: 'National University "Ostroh Academy"',
		DEGREE: "Bachelor's in Computer Science | Sep 2023 - Present",
	},
	PROJECTS: [
		{
			name: 'Soliloquy',
			stack: 'Astro, React, Dexie.js, Bun',
			description:
				'Built a privacy-focused, local-first note app with a messenger-style interface and IndexedDB persistence for fast, serverless data ownership.',
		},
		{
			name: 'Winup',
			stack: 'TypeScript, Bun, CLI',
			description:
				'Created a fast CLI wrapper for Windows package upgrades with an interactive, safe-by-default winget workflow.',
		},
	],
	SKILLS: [
		{
			label: 'Frontend',
			value:
				'TypeScript, JavaScript, React, Astro, TailwindCSS, HTML/CSS, TanStack Query, Dexie.js',
		},
		{
			label: 'Backend',
			value: 'C#, .NET (ASP.NET Core), Node.js, Express.js',
		},
		{
			label: 'Databases',
			value: 'PostgreSQL, MSSQL, MySQL, Firebase',
		},
		{
			label: 'Build Tools & Infrastructure',
			value: 'Git, Docker, Bun, Vite, Biome',
		},
	],
	CERTIFICATIONS: [
		'CS50 (2024, Cambridge, Massachusetts)',
		'Cambridge First Certificate in English (2022)',
		'Ukrainian (Native), English (Professional Working Proficiency)',
	],
} as const

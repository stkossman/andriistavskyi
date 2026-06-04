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
				'Frontend-oriented Full-Stack Developer dedicated to building robust, minimalist web applications and high-performance tooling. Proficient in architecting complex systems using React, TypeScript, and .NET, with hands-on experience implementing real-time synchronization (SignalR), local-first storage (IndexedDB), and Feature-Sliced Design. Experienced in delivering end-to-end features - from clean, reusable UI components to secure backend administrative modules. Passionate about developer experience (DX) and modern, fast runtimes.',
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
	EXPERIENCE: [
		{
			company: 'SoftServe',
			location: 'Remote',
			role: 'Full-Stack Developer Intern (Completed)',
			period: 'Mar 2026 - Jun 2026',
			description:
				"Took ownership of the 'Home' and 'Company Profile' administrative modules for the Victory Center project, delivering features across the entire stack. Designed backend endpoints using C# and .NET 9, leveraging CQRS/MediatR for clean separation of commands and queries. Implemented frontend solutions in React and TypeScript, handling complex state synchronization and form validation. Successfully resolved architectural and merge conflicts, refining project configurations to optimize the development workflow. Currently actively looking for work.",
		},
		{
			company: 'National University "Ostroh Academy"',
			location: '',
			role: 'Frontend Developer (University Practice)',
			period: 'Jan 2026 - Feb 2026',
			description:
				'Led frontend development for a Cinema Management SPA using React and TypeScript, integrating with an ASP.NET Core API. Engineered a real-time seat selection component and an interactive cinema hall builder. Implemented secure authentication and protected routes within the client application. Acted as Team Lead, managing Git Flow, conducting code reviews, and distributing tasks.',
		},
	],
	EDUCATION: {
		INSTITUTION: 'National University "Ostroh Academy"',
		DEGREE: "Bachelor's in Computer Science | Sep 2023 - Present",
	},
	PROJECTS: [
		{
			name: 'Soliloquy',
			stack: 'Astro, React, Dexie.js, Bun',
			description:
				'Developed a privacy-centric, serverless note-taking application designed with a familiar messenger-style user interface. Engineered a 100% local-first data layer utilizing IndexedDB for instant load times and data ownership. Built an optimized frontend architecture using Astro/React on the Bun runtime.',
		},
		{
			name: 'Winup',
			stack: 'TypeScript, Bun, CLI',
			description:
				'Created a fast, interactive command-line wrapper for managing Windows package upgrades (winget) without visual noise. Implemented a safe-by-default upgrade flow.',
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

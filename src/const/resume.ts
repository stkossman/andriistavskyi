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
	EXPERIENCE: [
		{
			company: 'SoftServe',
			location: 'Remote',
			role: 'Full-Stack Developer Intern (Completed)',
			period: 'Mar 2026 - Jun 2026',
			bullets: [
				'Took ownership of Home and Company Profile admin modules for the Victory Center project.',
				'Built full-stack features across React, TypeScript, C#, and .NET 9.',
				'Designed backend endpoints using CQRS/MediatR patterns.',
				'Implemented validation-heavy frontend forms and handled complex state flows.',
				'Resolved merge/configuration conflicts and improved development workflow.',
			],
		},
		{
			company: 'National University "Ostroh Academy"',
			location: '',
			role: 'Frontend Developer (University Practice)',
			period: 'Jan 2026 - Feb 2026',
			bullets: [
				'Led frontend development for a Cinema Management SPA using React and TypeScript.',
				'Integrated the frontend with an ASP.NET Core API.',
				'Built real-time seat selection and an interactive cinema hall builder.',
				'Managed Git Flow, code reviews, and task distribution as Team Lead.',
			],
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

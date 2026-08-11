import cinemaFrontImage from '@/assets/images/projects/cinemafront.png'
import soliloquyImage from '@/assets/images/projects/soliloquy.png'
import victoryCenterImage from '@/assets/images/projects/victorycenter.png'

type ProjectLink = {
	label: string
	href: string
}

type ProjectSection = {
	title: string
	body: string[]
}

export type Project = {
	slug: string
	title: string
	year: string
	context: string
	role: string
	homepageSummary: string[]
	stack: string[]
	links: ProjectLink[]
	image: ImageMetadata
	imageAlt: string
	overview: string[]
	roleDescription?: string[]
	technicalWork?: ProjectSection[]
	metadata: {
		label: string
		value: string
	}[]
	caseStudySections?: ProjectSection[]
}

export const PROJECTS = [
	{
		slug: 'soliloquy',
		title: 'Soliloquy',
		year: '2026',
		context: 'Personal project · Full-Stack · 2026',
		role: 'Full-Stack Developer',
		homepageSummary: [
			'A private, local-first writing application built around a messenger-like interface where the user is the only contact.',
			'The project focuses on keeping personal writing simple and self-contained. Data stays in the browser, the interface avoids unnecessary structure, and most features are designed around reducing friction rather than adding more workflow.',
		],
		stack: ['Astro', 'React', 'TypeScript', 'Dexie.js'],
		links: [
			{ label: 'Repository', href: 'https://github.com/stkossman/soliloquy' },
		],
		image: soliloquyImage,
		imageAlt: 'Soliloquy writing interface screenshot.',
		overview: [
			'Soliloquy is a private, local-first writing application built around a messenger-like interface where the user is the only contact.',
			'The project is intentionally narrow in scope. It keeps personal writing self-contained in the browser and avoids imposing extra structure on the user.',
		],
		roleDescription: [
			'I designed and built the application as a personal full-stack project, covering the interface structure, local data model, and browser storage behavior.',
		],
		technicalWork: [
			{
				title: 'Technical work',
				body: [
					'The application uses Astro, React, TypeScript, and Dexie.js to keep the writing experience fast, local, and simple to maintain.',
				],
			},
		],
		metadata: [
			{ label: 'Role', value: 'Full-Stack Developer' },
			{ label: 'Year', value: '2026' },
			{ label: 'Context', value: 'Personal project' },
			{ label: 'Stack', value: 'Astro, React, TypeScript, Dexie.js' },
		],
	},
	{
		slug: 'victory-center',
		title: 'Victory Center',
		year: '2026',
		context: 'Full-Stack / Team project · 2026',
		role: 'Full-Stack Developer Intern',
		homepageSummary: [
			'A public charity platform with a public-facing website and administrative system.',
			'Worked across .NET 9 and React, taking ownership of the Home and Company Profile administrative modules, API integration, localization workflows, and related frontend and backend features.',
			'Continued contributing to the project on a volunteer basis after the internship.',
		],
		stack: ['C#', '.NET 9', 'React', 'TypeScript'],
		links: [
			{
				label: 'Repository',
				href: 'https://github.com/ita-social-projects/VictoryCenter-Back',
			},
		],
		image: victoryCenterImage,
		imageAlt: 'Victory Center platform interface screenshot.',
		overview: [
			'Victory Center is a public charity platform developed as part of a SoftServe Academy team project.',
			"The system combines a public-facing website with an administrative application used to manage the organization's content and operational data. I joined the project during my Full-Stack .NET / React internship and worked across both sides of the application.",
			'After the internship ended, I continued contributing to the project on a volunteer basis.',
		],
		roleDescription: [
			'I worked as a Full-Stack Developer Intern in a team of roughly 15-20 people.',
			'I took ownership of the Home and Company Profile administrative modules and delivered features across the full stack, from backend endpoints and application logic to React forms and frontend integration.',
			'The work required fitting new functionality into an existing architecture, coordinating changes through pull requests, and resolving conflicts that appeared as multiple parts of the system evolved in parallel.',
		],
		technicalWork: [
			{
				title: 'Backend',
				body: [
					'Backend work was done with C# and .NET 9.',
					"I implemented endpoints using the project's CQRS and MediatR structure, keeping commands and queries aligned with the existing application architecture. The work also included Entity Framework Core integration and connecting administrative workflows to the underlying API and data model.",
				],
			},
			{
				title: 'Frontend',
				body: [
					'On the frontend, I worked with React and TypeScript on administrative interfaces and related application flows.',
					'This included form validation, synchronizing UI state with backend data, navigation and layout changes based on design specifications, localization workflows, and integrating frontend features with the REST API.',
				],
			},
			{
				title: 'Team work',
				body: [
					'Development was coordinated through GitHub pull requests, GitHub Projects, and daily standups.',
					'I participated in code review, handled merge and configuration conflicts, and adjusted my work to fit shared project conventions rather than treating individual features in isolation.',
				],
			},
		],
		metadata: [
			{ label: 'Role', value: 'Full-Stack Developer Intern' },
			{ label: 'Period', value: 'March 2026 - June 2026' },
			{ label: 'Continued', value: 'Volunteer contributor' },
			{ label: 'Team', value: '15-20 people' },
			{
				label: 'Stack',
				value:
					'C#, .NET 9, ASP.NET Core, Entity Framework Core, React, TypeScript, SQL Server',
			},
			{ label: 'Tools', value: 'Docker, Git, GitHub, GitHub Projects' },
		],
	},
	{
		slug: 'cinema-platform',
		title: 'Cinema Booking Platform',
		year: '2026',
		context: 'Team project · 2026',
		role: 'Frontend Developer',
		homepageSummary: [
			'A cinema booking system covering session discovery, seat selection, reservation flow, and supporting technical documentation.',
			'My work focused primarily on the frontend application and its structure, with additional involvement in system design and technical documentation.',
		],
		stack: ['React', 'TypeScript', 'ASP.NET Core'],
		links: [
			{
				label: 'Frontend repository',
				href: 'https://github.com/ModusTeam/cinema-platform-front',
			},
			{
				label: 'Documentation repository',
				href: 'https://github.com/ModusTeam/cinema-platform-docs',
			},
		],
		image: cinemaFrontImage,
		imageAlt: 'Cinema booking platform frontend screenshot.',
		overview: [
			'Cinema Booking Platform is a team project for a cinema booking system covering session discovery, seat selection, reservation flow, and supporting technical documentation.',
			'The previous portfolio separated the frontend and documentation into two entries. In this structure, they are treated as one conceptual project with multiple related artifacts.',
		],
		roleDescription: [
			'My work focused primarily on the frontend application and its structure, with additional involvement in system design and technical documentation.',
		],
		technicalWork: [
			{
				title: 'Technical work',
				body: [
					'The frontend work used React and TypeScript, with the broader system connected to ASP.NET Core services and supporting documentation.',
				],
			},
		],
		metadata: [
			{ label: 'Role', value: 'Frontend Developer' },
			{ label: 'Year', value: '2026' },
			{ label: 'Context', value: 'Team project' },
			{ label: 'Stack', value: 'React, TypeScript, ASP.NET Core' },
			{
				label: 'Artifacts',
				value: 'Frontend application, technical documentation',
			},
		],
	},
] satisfies Project[]

export function getProjectBySlug(slug: string) {
	return PROJECTS.find(project => project.slug === slug)
}

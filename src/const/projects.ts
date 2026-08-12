import cinemaFrontImage from '@/assets/images/projects/cinemafront.png'
import soliloquyImage from '@/assets/images/projects/soliloquy.png'
import victoryCenterImage from '@/assets/images/projects/victorycenter.png'

type ProjectLink = {
	label: string
	href: string
}

type ProjectSectionSubsection = {
	title: string
	body: string[]
}

type ProjectSectionList = {
	title?: string
	items: string[]
}

type ProjectSection = {
	title: string
	id?: string
	body?: string[]
	list?: ProjectSectionList
	lists?: ProjectSectionList[]
	subsections?: ProjectSectionSubsection[]
	flow?: string
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
	metadata: {
		label: string
		value: string
	}[]
	onThisPage?: {
		label: string
		href: string
	}[]
	caseStudySections: ProjectSection[]
}

export const PROJECTS = [
	{
		slug: 'soliloquy',
		title: 'Soliloquy',
		year: '2026',
		context: 'Personal project · 2026',
		role: 'Creator / Full-Stack Developer',
		homepageSummary: [
			'A private, local-first writing application built around a messenger-like interface where the user is the only contact.',
			'Designed as a focused alternative to traditional note-taking apps, with browser-local storage, Markdown-based writing, chat personalization, and portable backups.',
		],
		stack: ['Astro', 'React', 'TypeScript', 'Dexie.js'],
		links: [
			{ label: 'Live site', href: 'https://soliloquy-notes.vercel.app/' },
			{ label: 'Repository', href: 'https://github.com/stkossman/soliloquy' },
		],
		image: soliloquyImage,
		imageAlt: 'Soliloquy writing interface screenshot.',
		metadata: [
			{ label: 'Role', value: 'Creator / Full-Stack Developer' },
			{ label: 'Year', value: '2026' },
			{ label: 'Context', value: 'Personal project' },
			{ label: 'Status', value: 'Active' },
			{ label: 'Stack', value: 'Astro, React, TypeScript, Dexie.js' },
		],
		onThisPage: [
			{ label: 'Overview', href: '#overview' },
			{ label: 'Why I built it', href: '#why-i-built-it' },
			{ label: 'Project goals', href: '#project-goals' },
			{ label: 'Technical approach', href: '#technical-approach' },
			{ label: 'Selected decisions', href: '#selected-decisions' },
			{ label: 'Current state', href: '#current-state' },
			{ label: 'Next', href: '#next' },
			{ label: 'Links', href: '#links' },
		],
		caseStudySections: [
			{
				title: 'Overview',
				id: 'overview',
				body: [
					'Soliloquy is a private, local-first notes application built around a messenger-like interface where the user is the only contact.',
					'Instead of organizing thoughts around documents, folders, or workspaces, the application treats writing as a conversation: open a chat, write something, and return to it later.',
				],
			},
			{
				title: 'Why I built it',
				id: 'why-i-built-it',
				body: [
					'I like the way messaging applications reduce the friction of writing. Sending a short message to yourself feels lighter than creating and organizing another document.',
					'Soliloquy started from that idea: build a dedicated notes application that keeps the familiarity of a messenger while removing the social, cloud, and account layers around it.',
				],
			},
			{
				title: 'Project goals',
				id: 'project-goals',
				list: {
					items: [
						'create a note-taking experience with a distinct messenger-like UI;',
						'keep user data local to the browser;',
						'require no account or backend for the normal writing workflow;',
						'keep interaction fast and deliberately minimal;',
						'support rich writing without turning the editor into a document processor;',
						'make chats and the entire workspace portable through import/export.',
					],
				},
			},
			{
				title: 'Technical approach',
				id: 'technical-approach',
				body: [
					'Soliloquy uses Astro for the application shell and React for interactive client-side functionality.',
					'Data is persisted locally through IndexedDB with Dexie.js. This keeps the core application independent from a remote database and allows the writing experience to remain available without an account or server-side persistence.',
					'Markdown rendering provides lightweight rich-text output while keeping stored content portable and easy to process.',
				],
			},
			{
				title: 'Selected decisions',
				id: 'selected-decisions',
				subsections: [
					{
						title: 'Local-first persistence',
						body: [
							'Core application data lives in IndexedDB rather than a remote database. The product can perform its primary function without authentication, a network connection, or a backend dependency.',
						],
					},
					{
						title: 'Messenger as the primary model',
						body: [
							'Chats and messages are not a visual skin applied to a traditional notes hierarchy. They are the primary organizational model of the application.',
						],
					},
					{
						title: 'Astro + React boundaries',
						body: [
							'Astro handles the surrounding application while React is used where persistent client state and interactive UI are actually required.',
						],
					},
					{
						title: 'Portable data',
						body: [
							'Individual chats can be exported and imported as JSON or Markdown. Full workspace backups support validated restore flows with merge or replace behavior.',
						],
					},
					{
						title: 'Progressive scope',
						body: [
							'New functionality is added around the existing writing model rather than changing the product into a general-purpose workspace.',
						],
					},
				],
			},
			{
				title: 'Current state',
				id: 'current-state',
				body: [
					'Soliloquy is currently in active development.',
					'The application already includes local chat persistence, Markdown rendering, editing and context actions, chat export, workspace backup and restore, bulk actions, drag-and-drop chat ordering, zoom controls, personalization, and single-chat transfer.',
					'The current development phase focuses on improving the editor experience, search, media support, and theming.',
				],
				lists: [
					{
						title: 'Completed',
						items: [
							'local IndexedDB persistence',
							'Markdown rendering',
							'editing, context actions, and bulk actions',
							'chat JSON / Markdown export and workspace backup / restore',
							'chat personalization, ordering, zoom controls, and single-chat transfer',
						],
					},
					{
						title: 'Current',
						items: [
							'visual formatting menu',
							'in-chat search',
							'media support',
							'light / dark theme',
						],
					},
				],
			},
			{
				title: 'Next',
				id: 'next',
				body: [
					'The next major addition is media support: image input from the clipboard or file picker, preview and caption workflows, and combined text-and-image message bubbles.',
					'Search and theme support are also part of the current roadmap.',
				],
			},
		],
	},
	{
		slug: 'victory-center',
		title: 'Victory Center',
		year: '2026',
		context: 'SoftServe Academy / OpenTech project · 2026',
		role: 'Full-Stack Developer Intern / Volunteer Contributor',
		homepageSummary: [
			'A public charity platform with administrative and public-facing applications.',
			'I owned the end-to-end development of the Main Page and Company Profile modules, working across .NET 9, React, localization workflows, content management, and frontend-to-backend integration.',
		],
		stack: ['C#', '.NET 9', 'ASP.NET Core', 'React', 'TypeScript'],
		links: [
			{
				label: 'Repository',
				href: 'https://github.com/ita-social-projects/VictoryCenter-Back',
			},
		],
		image: victoryCenterImage,
		imageAlt: 'Victory Center platform interface screenshot.',
		metadata: [
			{
				label: 'Role',
				value: 'Full-Stack Developer Intern / Volunteer Contributor',
			},
			{ label: 'Period', value: 'March 2026 - Present contribution' },
			{ label: 'Team', value: '~20 people' },
			{ label: 'Context', value: 'SoftServe Academy / OpenTech project' },
			{
				label: 'Stack',
				value:
					'C#, .NET 9, ASP.NET Core, Entity Framework Core, React, TypeScript',
			},
		],
		caseStudySections: [
			{
				title: 'Overview',
				body: [
					"Victory Center is a charity management platform with both public-facing pages and administrative applications used to manage the organization's content.",
					'I joined the project during my SoftServe internship and continued contributing after the internship ended on a volunteer basis.',
				],
			},
			{
				title: 'My role',
				body: [
					'I worked across both backend and frontend development, with ownership of complete product areas rather than isolated UI tasks.',
					'My main responsibility was the end-to-end implementation of the Main Page and Company Profile modules, including their administrative interfaces, public presentation, API integration, validation, localization, and publishing workflows.',
				],
			},
			{
				title: 'What I owned',
				list: {
					items: [
						'Main Page module',
						'Company Profile module',
						'administrative interfaces',
						'public-facing presentation',
						'localization workflows',
						'content publishing',
						'frontend/backend integration',
					],
				},
			},
			{
				title: 'Main Page',
				body: [
					'The Main Page module allows administrators to manage the content and presentation of the public homepage.',
					'I worked across block-based content editing, publishing, multilingual content, localization status, media management, impact statistics, raised-funds metrics, donations, partners, and related frontend/backend data flows.',
					'Representative work includes:',
				],
				list: {
					items: [
						'editable title and About blocks;',
						'partners content;',
						'multilingual block translation;',
						'publication workflows;',
						'impact-statistics metrics;',
						'automatically synchronized raised-funds data;',
						'images and media validation;',
						'donations section integration.',
					],
				},
			},
			{
				title: 'Company Profile',
				body: [
					'The Company Profile module provides administrative editing and public presentation of organization information.',
					'I implemented workflows for viewing and editing company details, validation, publication, social media contacts, and synchronization between administrative data and the public profile.',
				],
			},
			{
				title: 'Backend',
				body: [
					"Backend work was implemented with C# and .NET 9 using the project's CQRS and MediatR architecture.",
					'I added endpoints and application logic for administrative content management, localization, publication, metrics, donations, and profile data, integrating the workflows with Entity Framework Core and the existing domain structure.',
				],
			},
			{
				title: 'Frontend',
				body: [
					'The frontend uses React and TypeScript.',
					'My work included administrative forms, inline editing, modal workflows, API synchronization, validation, multilingual editing, publication states, and public rendering of managed content.',
					'Much of the complexity came from keeping editing state, persisted backend state, and translated content synchronized without allowing one workflow to overwrite another.',
				],
			},
			{
				title: 'Team work',
				body: [
					'The project was developed by a team of roughly 20 people and coordinated through GitHub pull requests, GitHub Projects, and daily standups.',
					'Working in a larger shared codebase meant that implementation quality was not only about making a feature work locally. Changes had to fit existing conventions, survive concurrent development, and integrate cleanly with work owned by other developers.',
				],
			},
			{
				title: 'Lessons learned',
				body: [
					'Victory Center changed how I think about ownership inside an existing application.',
					'A feature can be technically correct and still be the wrong implementation if it ignores the conventions, data flow, or assumptions shared by the rest of the system. Working on complete modules made architectural consistency and coordination as important as the code inside any individual component or endpoint.',
				],
			},
		],
	},
	{
		slug: 'cinema-platform',
		title: 'Cinema Booking Platform',
		year: '2026',
		context: 'Team project · 2026',
		role: 'Team Lead / Frontend Developer',
		homepageSummary: [
			'A cinema booking system built by a three-person team, covering session discovery, seat selection, real-time seat locking, booking flows, administration, and technical documentation.',
			'I led the team and owned the frontend architecture and implementation.',
		],
		stack: ['React', 'TypeScript', 'TanStack Query', 'SignalR', 'ASP.NET Core'],
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
		metadata: [
			{ label: 'Role', value: 'Team Lead / Frontend Developer' },
			{ label: 'Team', value: '3 people' },
			{ label: 'Year', value: '2026' },
			{
				label: 'Frontend',
				value: 'React 19, TypeScript 5, TanStack Query, SignalR',
			},
			{ label: 'Backend', value: '.NET 8 REST API + NestJS loyalty service' },
		],
		caseStudySections: [
			{
				title: 'Overview',
				body: [
					'The Cinema Booking Platform was built by a three-person team as a complete reservation system rather than a standalone frontend exercise.',
					'The application covers movie and session discovery, seat selection and locking, booking, authentication, loyalty functionality, cinema administration, and technical documentation.',
				],
			},
			{
				title: 'My role',
				body: [
					'I led the three-person team and was primarily responsible for the frontend application.',
					'I designed and implemented the client architecture, booking workflows, API integration, real-time synchronization, administrative interfaces, authentication behavior, and the frontend quality/tooling setup.',
				],
			},
			{
				title: 'System context',
				list: {
					items: [
						'primary .NET 8 REST API',
						'separate NestJS loyalty service',
						'React frontend',
						'real-time SignalR seat state',
						'administrative frontend scope',
					],
				},
			},
			{
				title: 'Frontend architecture',
				body: [
					'The frontend is built with React 19 and TypeScript and follows Feature-Sliced Design.',
					'Domain functionality is isolated into feature modules that own their API clients, hooks, models, and UI. Route-level pages compose these features without absorbing their business logic.',
					'Representative feature areas include booking, loyalty, and admin.',
					'Public and administrative routes are lazy-loaded, with administrative access isolated behind a dedicated route guard.',
				],
			},
			{
				title: 'Real-time booking',
				body: [
					'Seat selection combines REST commands with SignalR events to keep multiple clients synchronized in real time.',
					'When a seat is selected, the client requests a lock through the REST API. A session-scoped SignalR connection listens for seat lock and unlock events from other users. Incoming events update the TanStack Query cache directly instead of forcing a complete refetch.',
					'If another user locks a seat that is still selected locally, the conflicting selection is removed automatically and the user is notified.',
				],
				flow: [
					'select seat',
					'    ↓',
					'POST /seats/lock',
					'    ↓',
					'SignalR SeatLocked / SeatUnlocked',
					'    ↓',
					'TanStack Query cache update',
					'    ↓',
					'local conflict resolution',
				].join('\n'),
			},
			{
				title: 'Service interoperability',
				body: [
					'The frontend communicates with two backend domains: the primary .NET 8 REST API and a separate NestJS loyalty service.',
					'Network access is centralized through Axios. Interceptors attach bearer tokens, handle token refresh, and retry rate-limited requests.',
					'Booking and loyalty concerns meet during checkout, where loyalty-point and upgrade options become part of the booking payload while final orchestration remains on the backend.',
				],
			},
			{
				title: 'Administration',
				body: [
					'The administrative application provides CRUD workflows for cinema operations including halls, pricing, sessions, and loyalty management.',
					'Mutations are integrated with stable TanStack Query keys so administrative writes are reflected immediately without introducing separate client-side copies of server state.',
				],
			},
			{
				title: 'Documentation',
				body: [
					'Technical documentation was maintained alongside the implementation as a separate project.',
					'It covers system architecture, database structure, local development, contribution guidance, and REST API reference for the cinema backend.',
				],
				lists: [
					{
						title: 'Architecture',
						items: ['Database Schema', 'System Overview'],
					},
					{
						title: 'Developer Guides',
						items: ['Contribution', 'Local Setup'],
					},
					{
						title: 'REST API Reference',
						items: [
							'Accounts',
							'Authentication',
							'Genres',
							'Halls',
							'Movies',
							'Orders',
							'Pricing',
							'Seats',
							'Sessions',
							'Tickets',
							'and related backend resources',
						],
					},
				],
			},
			{
				title: 'Technical decisions',
				subsections: [
					{
						title: 'Feature-Sliced Design',
						body: [
							'Domain functionality is isolated into feature areas that own their API access, state hooks, models, and UI.',
						],
					},
					{
						title: 'TanStack Query as server-state authority',
						body: [
							'Server state remains centralized in TanStack Query, avoiding unnecessary duplicate global state for data already owned by backend services.',
						],
					},
					{
						title: 'REST + SignalR synchronization',
						body: [
							'REST handles commands such as seat locking, while SignalR delivers real-time state changes to active clients.',
						],
					},
					{
						title: 'Centralized HTTP / authentication infrastructure',
						body: [
							'An Axios instance centralizes bearer-token injection, refresh handling, and retry behavior for rate-limited requests.',
						],
					},
				],
			},
		],
	},
] satisfies Project[]

export function getProjectBySlug(slug: string) {
	return PROJECTS.find(project => project.slug === slug)
}

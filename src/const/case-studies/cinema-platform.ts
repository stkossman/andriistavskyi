import type { ProjectSection } from '@/const/projects'

export const CINEMA_PLATFORM_CASE_STUDY_SECTIONS = [
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
] satisfies ProjectSection[]

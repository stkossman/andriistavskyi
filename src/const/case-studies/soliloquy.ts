import type { ProjectSection } from '@/const/projects'

export const SOLILOQUY_ON_THIS_PAGE = [
	{ label: 'Overview', href: '#overview' },
	{ label: 'Why I built it', href: '#why-i-built-it' },
	{ label: 'Project goals', href: '#project-goals' },
	{ label: 'Technical approach', href: '#technical-approach' },
	{ label: 'Selected decisions', href: '#selected-decisions' },
	{ label: 'Current state', href: '#current-state' },
	{ label: 'Next', href: '#next' },
	{ label: 'Links', href: '#links' },
] as const

export const SOLILOQUY_CASE_STUDY_SECTIONS = [
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
] satisfies ProjectSection[]

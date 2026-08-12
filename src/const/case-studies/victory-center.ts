import type { ProjectSection } from '@/const/projects'

export const VICTORY_CENTER_CASE_STUDY_SECTIONS = [
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
] satisfies ProjectSection[]

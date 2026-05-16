export interface ArsenalWork {
	id: string
	title: string
	description: string
	tech: string
	link: string
	panelSize?: 'small' | 'wide' | 'large'
}

export const ARSENAL_WORKS: ArsenalWork[] = [
	{
		id: '001',
		title: 'StackFetch',
		description:
			'CLI that displays essential information about your current working directory.',
		tech: 'TypeScript, Shell',
		link: 'https://github.com/stkossman/StackFetch',
		panelSize: 'wide',
	},
	{
		id: '002',
		title: 'Winup',
		description: 'Minimal CLI tool for managing winget upgrades.',
		tech: 'Node, TypeScript',
		link: 'https://winup-cli.vercel.app/',
		panelSize: 'small',
	},
	{
		id: '003',
		title: 'Toji Theme',
		description: 'VS Code theme inspired by Toji Fushiguro.',
		tech: 'CSS',
		link: 'https://vscodethemes.com/e/Kossman.toji-fushiguro-theme/toji-fushiguro-theme',
		panelSize: 'small',
	},
	{
		id: '004',
		title: 'Abysswalker Theme',
		description: 'A minimal, dark fantasy inspired VS Code theme.',
		tech: 'CSS',
		link: 'https://vscodethemes.com/e/Kossman.abysswalker-theme/abysswalker',
		panelSize: 'wide',
	},
	{
		id: '005',
		title: 'Frameworks Mini Project',
		description:
			'A comprehensive collection of mini-projects built with minimalist frameworks.',
		tech: 'VanJS, htmx, Alpine.js, Stimulus',
		link: 'https://github.com/stkossman/frameworks-mini-project',
		panelSize: 'large',
	},
	{
		id: '006',
		title: 'Ukraine Phone Formatter',
		description:
			'Ukraine Phone Formatter is a simple Ruby gem that formats Ukrainian phone numbers into a readable and standardized format.',
		tech: 'Ruby',
		link: 'https://github.com/stkossman/ukraine_phone_formatter',
		panelSize: 'large',
	},
]

export const ARSENAL_WORKS_TEXT = {
	METADATA: {
		TITLE: 'Arsenal — Andrii Stavskyi',
	},
	HERO: {
		TITLE: 'ARSENAL',
		DESCRIPTION:
			'A collection of my personal projects, tools, and experiments.',
		NUMBER: '01',
	},
	DECORATION: {
		ID_PREFIX: '#',
	},
	BUTTON: {
		TEXT: '[ Return to Hub ]',
		HREF: '/archive',
	},
}

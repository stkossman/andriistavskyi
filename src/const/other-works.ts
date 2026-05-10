export interface Project {
	id: string
	title: string
	description: string
	tech: string
	link: string
	panelSize?: 'small' | 'wide' | 'large'
}

export const PROJECTS: Project[] = [
	{
		id: '001',
		title: 'StackFetch',
		description:
			'CLI that displays essential information about your current working directory.',
		tech: 'TypeScript, Shell',
		link: 'https://github.com/stkossman/StackFetch',
		panelSize: 'large',
	},
	{
		id: '002',
		title: 'Toji Fushiguro Theme',
		description: 'VS Code theme inspired by Toji Fushiguro.',
		tech: 'CSS',
		link: 'https://github.com/stkossman/toji-fushiguro-theme',
		panelSize: 'small',
	},
	{
		id: '003',
		title: 'Abysswalker Theme',
		description: 'A minimal, dark fantasy inspired VS Code theme.',
		tech: 'CSS',
		link: 'https://github.com/stkossman/abysswalker-theme',
		panelSize: 'wide',
	},
	{
		id: '004',
		title: 'Frameworks Mini Project',
		description:
			'A comprehensive collection of mini-projects built with minimalist frameworks.',
		tech: 'VanJS, htmx, Alpine.js, Stimulus',
		link: 'https://github.com/stkossman/frameworks-mini-project',
		panelSize: 'large',
	},
	{
		id: '005',
		title: 'Ukraine Phone Formatter',
		description:
			'Ukraine Phone Formatter is a simple Ruby gem that formats Ukrainian phone numbers into a readable and standardized format.',
		tech: 'Ruby',
		link: 'https://github.com/stkossman/ukraine_phone_formatter',
		panelSize: 'large',
	},
]

export const OTHER_WORKS = {
	HERO: {
		TITLE: 'ARCHIVE',
		DESCRIPTION: 'Secondary repositories. Experimental tools.',
	},
	BUTTON: {
		TEXT: '[ Return to Main ]',
	},
}

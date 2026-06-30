export interface UseItem {
	name: string
	description: string
}

export interface UseCategory {
	title: string
	items: UseItem[]
}

export const USES_CATEGORIES: UseCategory[] = [
	{
		title: 'HARDWARE',
		items: [
			{
				name: 'Primary Workstation',
				description: 'HP Pavilion 15 (Ryzen 5 5600H, RTX 3050)',
			},
			{
				name: 'Secondary Workstation',
				description: 'Lenovo Legion (Intel i7-7700HQ, GTX 1050)',
			},
			{ name: 'Keyboard', description: 'Keychron V1 Wired' },
			{ name: 'Mouse', description: 'Hator Pulsar 3' },
		],
	},
	{
		title: 'SYSTEM & ENVIRONMENT',
		items: [
			{ name: 'OS', description: 'Windows 11 / Fedora Linux' },
			{ name: 'Window Manager', description: 'Hyprland' },
			{ name: 'Terminal', description: 'Ghostty + Zsh' },
		],
	},
	{
		title: 'WORKSPACE & EDITOR',
		items: [
			{ name: 'Editor', description: 'VS Code / Zed' },
			{ name: 'Theme', description: 'Toji Fushiguro Theme' },
			{ name: 'Keyboard Layout', description: 'Qwerty / Colemak' },
		],
	},
	{
		title: 'SERVICES & TOOLS',
		items: [
			{
				name: 'AI Subscriptions',
				description: 'Gemini Pro, Perplexity Pro, GitHub Copilot',
			},
			{ name: 'Browser', description: 'Zen Browser' },
		],
	},
]

export const USES_TEXT = {
	METADATA: {
		TITLE: 'Uses — Andrii Stavskyi',
	},
	HERO: {
		TITLE: 'USES',
		DESCRIPTION:
			'A technical manifest of operational hardware, software, and configurations.',
		NUMBER: '02',
	},
	BUTTON: {
		TEXT: '[ Return to Hub ]',
		HREF: '/archive',
	},
}

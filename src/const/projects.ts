import cinemaFrontImage from '@/assets/images/projects/cinemafront.png'
import soliloquyImage from '@/assets/images/projects/soliloquy.png'
import victoryCenterImage from '@/assets/images/projects/victorycenter.png'
import { CINEMA_PLATFORM_CASE_STUDY_SECTIONS } from '@/const/case-studies/cinema-platform'
import {
	SOLILOQUY_CASE_STUDY_SECTIONS,
	SOLILOQUY_ON_THIS_PAGE,
} from '@/const/case-studies/soliloquy'
import { VICTORY_CENTER_CASE_STUDY_SECTIONS } from '@/const/case-studies/victory-center'

type ProjectLink = {
	label: string
	href: string
}

type ProjectSectionSubsection = {
	title: string
	body: readonly string[]
}

type ProjectSectionList = {
	title?: string
	items: readonly string[]
}

export type ProjectSection = {
	title: string
	id?: string
	body?: readonly string[]
	list?: ProjectSectionList
	lists?: readonly ProjectSectionList[]
	subsections?: readonly ProjectSectionSubsection[]
	flow?: string
}

export const PROJECT_SUMMARY_LABELS = {
	stack: 'Stack',
	detailsLink: 'Project details',
} as const

export const PROJECT_DETAIL_LABELS = {
	onThisPage: 'On this page',
	links: 'Links',
} as const

export type Project = {
	slug: string
	title: string
	year: string
	context: string
	role: string
	homepageSummary: readonly string[]
	stack: readonly string[]
	links: readonly ProjectLink[]
	image: ImageMetadata
	imageAlt: string
	metadata: readonly {
		label: string
		value: string
	}[]
	onThisPage?: readonly {
		label: string
		href: string
	}[]
	caseStudySections: readonly ProjectSection[]
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
		onThisPage: SOLILOQUY_ON_THIS_PAGE,
		caseStudySections: SOLILOQUY_CASE_STUDY_SECTIONS,
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
		caseStudySections: VICTORY_CENTER_CASE_STUDY_SECTIONS,
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
		caseStudySections: CINEMA_PLATFORM_CASE_STUDY_SECTIONS,
	},
] satisfies Project[]

export function getProjectBySlug(slug: string) {
	return PROJECTS.find(project => project.slug === slug)
}

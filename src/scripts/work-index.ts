const previews = Array.from(
	document.querySelectorAll<HTMLElement>('[data-work-preview]'),
)
const workLinks = Array.from(
	document.querySelectorAll<HTMLButtonElement>('[data-work-link]'),
)
const backgroundTrigger = document.querySelector<HTMLButtonElement>(
	'[data-background-trigger]',
)
const workPanel = document.querySelector<HTMLElement>('[data-work-panel]')
const workPanelContent = document.querySelector<HTMLElement>(
	'[data-work-panel-content]',
)
const backgroundPanel = document.querySelector<HTMLElement>(
	'[data-background-panel]',
)
const placeholder = document.querySelector<HTMLElement>(
	'[data-panel-placeholder]',
)
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)',
).matches

let activePanel: string | null = null

const animatePanel = (element: HTMLElement | null) => {
	if (!element || prefersReducedMotion) {
		return
	}

	element.classList.remove('motion-panel-enter')
	window.requestAnimationFrame(() => {
		element.classList.add('motion-panel-enter')
	})
}

const hideWithTransition = (element: HTMLElement | null) => {
	if (!element || element.classList.contains('hidden')) {
		return
	}

	if (prefersReducedMotion) {
		element.classList.add('hidden')
		return
	}

	element.classList.add('opacity-0', 'blur-sm', 'translate-y-1')
	window.setTimeout(() => {
		const isActiveWorkPanel =
			element === workPanel &&
			activePanel !== null &&
			activePanel !== 'background'
		const isActiveBackgroundPanel =
			element === backgroundPanel && activePanel === 'background'

		if (isActiveWorkPanel || isActiveBackgroundPanel) {
			element.classList.remove('opacity-0', 'blur-sm', 'translate-y-1')
			return
		}

		element.classList.add('hidden')
		element.classList.remove('opacity-0', 'blur-sm', 'translate-y-1')
	}, 180)
}

const setActiveProject = (slug: string | null) => {
	for (const link of workLinks) {
		const isActive = link.dataset.workLink === slug
		const marker = link.querySelector<HTMLElement>('[data-work-marker]')

		link.classList.toggle('!text-[var(--color-text)]', isActive)
		link.classList.toggle('bg-[var(--color-hover)]', isActive)
		link.setAttribute('aria-pressed', isActive ? 'true' : 'false')

		if (marker) {
			marker.classList.toggle('opacity-100', isActive)
			marker.classList.toggle('opacity-0', !isActive)
		}
	}
}

const setBackgroundActive = (isActive: boolean) => {
	backgroundTrigger?.classList.toggle('!text-[var(--color-text)]', isActive)
	backgroundTrigger?.classList.toggle('bg-[var(--color-hover)]', isActive)
	backgroundTrigger?.setAttribute('aria-pressed', isActive ? 'true' : 'false')
}

const clearPanel = () => {
	activePanel = null
	setActiveProject(null)
	setBackgroundActive(false)
	hideWithTransition(workPanel)
	hideWithTransition(backgroundPanel)
	window.setTimeout(
		() => {
			if (activePanel !== null) {
				return
			}

			placeholder?.classList.remove('hidden')
		},
		prefersReducedMotion ? 0 : 180,
	)
}

const showWorkPanel = (slug: string) => {
	activePanel = slug
	placeholder?.classList.add('hidden')
	hideWithTransition(backgroundPanel)
	workPanel?.classList.remove('hidden')
	setBackgroundActive(false)
	setActiveProject(slug)
	animatePanel(workPanelContent)
}

const showBackgroundPanel = () => {
	activePanel = 'background'
	placeholder?.classList.add('hidden')
	hideWithTransition(workPanel)
	backgroundPanel?.classList.remove('hidden')
	setActiveProject(null)
	setBackgroundActive(true)
	animatePanel(backgroundPanel?.firstElementChild as HTMLElement | null)
	backgroundPanel?.focus({ preventScroll: true })
}

backgroundTrigger?.addEventListener('click', () => {
	if (activePanel === 'background') {
		clearPanel()
		return
	}

	showBackgroundPanel()
})

for (const link of workLinks) {
	link.addEventListener('click', () => {
		const slug = link.dataset.workLink
		const preview = slug
			? document.querySelector<HTMLElement>(`[data-work-preview="${slug}"]`)
			: null

		if (!slug || !preview || !workPanel) {
			return
		}

		if (activePanel === slug) {
			clearPanel()
			return
		}

		showWorkPanel(slug)
		preview.scrollIntoView({
			block: 'start',
			behavior: prefersReducedMotion ? 'auto' : 'smooth',
		})
		animatePanel(preview)
		workPanel.focus({ preventScroll: true })
	})
}

if ('IntersectionObserver' in window && workPanel) {
	const observer = new IntersectionObserver(
		entries => {
			if (workPanel.classList.contains('hidden')) {
				return
			}

			const visibleEntry = entries
				.filter(entry => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

			const slug = visibleEntry?.target.getAttribute('data-work-preview')
			if (slug) {
				activePanel = slug
				setActiveProject(slug)
			}
		},
		{
			root: workPanel,
			threshold: [0.35, 0.6, 0.85],
		},
	)

	for (const preview of previews) {
		observer.observe(preview)
	}
}

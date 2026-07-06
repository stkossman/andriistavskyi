export const interactiveItemClass =
	'inline-flex w-fit items-baseline rounded-[2px] px-1.5 py-0.5 text-left text-[var(--color-muted)] no-underline transition-colors duration-200 group-hover/list:text-neutral-400 hover:bg-neutral-100 hover:text-neutral-950 focus-visible:bg-neutral-100 focus-visible:text-neutral-950'

export const optionStateClass = {
	primary: 'font-semibold text-neutral-950',
	secondary: 'text-neutral-800',
	muted: 'text-neutral-400',
	struck: 'text-neutral-400 line-through decoration-neutral-400/70',
} as const

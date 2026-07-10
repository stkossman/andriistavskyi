import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const entries = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/entries',
	}),
	schema: z.object({
		title: z.string().trim().min(1),
		date: z.coerce.date(),
		summary: z.string().trim().min(1).max(220),
		draft: z
			.boolean()
			.optional()
			.transform(value => value ?? false),
	}),
})

export const collections = { entries }

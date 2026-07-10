import { type CollectionEntry, getCollection } from 'astro:content'

export type Entry = CollectionEntry<'entries'>

export async function getPublishedEntries() {
	return (await getCollection('entries', ({ data }) => !data.draft)).sort(
		(first, second) => second.data.date.getTime() - first.data.date.getTime(),
	)
}

export function formatEntryDate(date: Date) {
	return new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(date)
}

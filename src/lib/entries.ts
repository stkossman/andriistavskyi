import { type CollectionEntry, getCollection } from 'astro:content'

export type Entry = CollectionEntry<'entries'>

export async function getEntries() {
	return (await getCollection('entries')).sort(
		(first, second) => second.data.date.getTime() - first.data.date.getTime(),
	)
}

export function formatEntryDate(date: Date) {
	return new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	})
		.format(date)
		.toUpperCase()
}

export function formatEntryNumber(number: number) {
	return String(number).padStart(3, '0')
}

import { getCollection } from 'astro:content';
import type { Locale } from './index';

/** Published articles of a locale, newest first. Files live in `src/content/news/<locale>/<slug>.md`. */
export async function getArticles(locale: Locale) {
	const all = await getCollection('news', (a) => a.id.startsWith(`${locale}/`) && !a.data.draft);
	return all
		.map((entry) => ({ entry, slug: entry.id.slice(locale.length + 1) }))
		.sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime());
}

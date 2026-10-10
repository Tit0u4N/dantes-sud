import type { Locale } from './index';

/** Translated slug per page, keyed by page id. Empty slug = home. */
export const pages = {
	home: { fr: '', en: '' },
	lifting: { fr: 'levage', en: 'lifting' },
	elevation: { fr: 'elevation', en: 'aerial-platforms' },
	handling: { fr: 'manutention', en: 'material-handling' },
	partners: { fr: 'partenaires', en: 'partners' },
	news: { fr: 'actualites', en: 'news' },
	contact: { fr: 'contact', en: 'contact' },
	thanks: { fr: 'merci', en: 'thank-you' },
} as const;

export type PageKey = keyof typeof pages;
export const pageKeys = Object.keys(pages) as PageKey[];
/** The 7 menu entries, in order. */
export const menuKeys = ['home', 'lifting', 'elevation', 'handling', 'partners', 'news', 'contact'] as const;

/** Public URL of a page in a locale (French at root, English under /en/). */
export function pathFor(key: PageKey, locale: Locale): string {
	const slug = pages[key][locale];
	if (locale === 'fr') return `/${slug}`;
	return slug ? `/en/${slug}` : '/en/';
}

/** Public URL of a news article. */
export function articlePath(slug: string, locale: Locale): string {
	return `${pathFor('news', locale)}/${slug}`;
}

/** Value of the `[...path]` rest param that produces `pathFor(key, locale)`. */
export function routeParam(key: PageKey, locale: Locale): string | undefined {
	const slug = pages[key][locale];
	if (locale === 'fr') return slug || undefined;
	return slug ? `en/${slug}` : 'en';
}

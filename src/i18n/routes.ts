import type { Locale } from './index';

/** Translated slug per page, keyed by page id. Empty slug = home. */
export const pages = {
	home: { fr: '', en: '' },
	onsite: { fr: 'maintenance-sur-site', en: 'on-site-maintenance' },
	workshop: { fr: 'restauration-en-atelier', en: 'workshop-refurbishment' },
	sales: { fr: 'vente-neuf-ou-occasion', en: 'new-used-equipment' },
	contact: { fr: 'contact', en: 'contact' },
	thanks: { fr: 'merci', en: 'thank-you' },
} as const;

export type PageKey = keyof typeof pages;
export const pageKeys = Object.keys(pages) as PageKey[];

/** Public URL of a page in a locale (French at root, English under /en/). */
export function pathFor(key: PageKey, locale: Locale): string {
	const slug = pages[key][locale];
	if (locale === 'fr') return `/${slug}`;
	return slug ? `/en/${slug}` : '/en/';
}

/** Value of the `[...path]` rest param that produces `pathFor(key, locale)`. */
export function routeParam(key: PageKey, locale: Locale): string | undefined {
	const slug = pages[key][locale];
	if (locale === 'fr') return slug || undefined;
	return slug ? `en/${slug}` : 'en';
}

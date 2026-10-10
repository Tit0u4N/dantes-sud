import type { APIRoute } from 'astro';
import { locales } from '../i18n';
import { pageKeys, pathFor, articlePath } from '../i18n/routes';
import { getArticles } from '../i18n/news';

/** Sitemap with both languages and hreflang alternates. The thank-you page is left out. */
export const GET: APIRoute = async ({ site }) => {
	const abs = (p: string) => new URL(p, site).href;
	const alt = (fr?: string, en?: string) =>
		[fr && ['fr', fr], en && ['en', en], ['x-default', fr ?? en]]
			.filter(Boolean)
			.map(([l, p]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(p as string)}"/>`)
			.join('');
	const urls: string[] = [];
	for (const key of pageKeys.filter((k) => k !== 'thanks')) {
		for (const l of locales) {
			urls.push(`<url><loc>${abs(pathFor(key, l))}</loc>${alt(pathFor(key, 'fr'), pathFor(key, 'en'))}</url>`);
		}
	}
	const fr = await getArticles('fr');
	const en = await getArticles('en');
	for (const [l, list, otherList] of [['fr', fr, en], ['en', en, fr]] as const) {
		for (const { slug, entry } of list) {
			const twin = otherList.some((a) => a.slug === slug);
			const f = l === 'fr' || twin ? articlePath(slug, 'fr') : undefined;
			const e = l === 'en' || twin ? articlePath(slug, 'en') : undefined;
			urls.push(`<url><loc>${abs(articlePath(slug, l))}</loc><lastmod>${entry.data.date.toISOString().slice(0, 10)}</lastmod>${alt(f, e)}</url>`);
		}
	}
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

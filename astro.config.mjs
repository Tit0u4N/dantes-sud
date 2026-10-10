// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.dantes-sud.fr',
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	// 301-style redirects from the old Odoo / previous site URLs (static hosts may need the host's own redirect file).
	redirects: {
		'/maintenance-sur-site': '/',
		'/restauration-en-atelier': '/',
		'/vente-neuf-ou-occasion': '/levage',
		'/contactus': '/contact',
		'/website/info': '/',
		'/en/on-site-maintenance': '/en/',
		'/en/workshop-refurbishment': '/en/',
		'/en/new-used-equipment': '/en/lifting',
		'/en_GB': '/en/',
		'/en_GB/maintenance-sur-site': '/en/',
		'/en_GB/restauration-en-atelier': '/en/',
		'/en_GB/vente-neuf-ou-occasion': '/en/lifting',
		'/en_GB/contactus': '/en/contact',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});

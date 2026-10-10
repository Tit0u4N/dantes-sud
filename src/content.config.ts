import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One Markdown file per article and per language: `src/content/news/<fr|en>/<slug>.md`. */
const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(), // always contains the brand and the city
		description: z.string(),
		date: z.coerce.date(),
		type: z.enum(['intervention', 'occasion', 'formation', 'conseil']),
		brand: z.string().optional(),
		city: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { news };

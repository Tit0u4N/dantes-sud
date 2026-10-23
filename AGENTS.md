# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Bilingual (FR root, EN under `/en/`) Astro 7 + Tailwind v4 site. Spec in `REQUIREMENT.MD`, progress in `TASKS.md`. The brief "refonte 2027" overrides REQUIREMENT.MD. 7-entry menu: home, levage, élévation, manutention, partenaires, actualités (Markdown in `src/content/news/<fr|en>/`), contact; plus thank-you, 404.

## Commands

Package manager is Bun (`bun.lock`); Node >=22.12.0 required.

- `bun install` — install deps
- `bun dev` — dev server at `localhost:4321`
- `bun build` — production build to `./dist/`
- `bun preview` — preview build
- `bun astro ...` — Astro CLI (`astro add`, `astro check`)

No test or lint scripts exist.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

- Slugs per page and locale: `src/i18n/routes.ts`. One route `src/pages/[...path].astro` renders `src/views/*.astro` for every page x locale.
- Copy lives in `src/i18n/locales/{fr,en}.json` (i18next, `useTranslations` / `data` in `src/i18n/index.ts`). Company facts in `src/config.ts`.
- Trade pages (levage/élévation/manutention) share `src/views/Trade.astro`; their sections live under `trades.<kind>.sections` in the locale JSON. Social URLs, client logos, partner links: `src/config.ts` (empty = hidden).
- Old URLs: server 301s in `public/_redirects` (Cloudflare); preprod host noindexed in `public/_headers`. Sitemap: `src/pages/sitemap.xml.ts`. Legal facts in `config.legal`; legal/privacy copy under `legalPages` in the locale JSON.
- Trade pages (levage/élévation/manutention) share `src/views/Trade.astro`; their sections live under `trades.<kind>.sections` in the locale JSON. Social URLs, client logos, partner links: `src/config.ts` (empty = hidden).
- Old URLs: server 301s in `public/_redirects` (Cloudflare); preprod host noindexed in `public/_headers`. Sitemap: `src/pages/sitemap.xml.ts`. Legal facts in `config.legal`; legal/privacy copy under `legalPages` in the locale JSON.
- Contact form posts to `/api/contact`, handled by the Worker script `worker/index.ts` (same Worker as the static assets, `run_worker_first: ["/api/*"]`), which sends via Resend. Secret `RESEND_API_KEY` (`wrangler secret put`, local `.dev.vars`); from/to in `wrangler.jsonc` vars. Worker types: `bun run cf-typegen`.
- Deploy (GitHub Actions): `main` → Worker `dantes-sud` (prod), `develop` → `dantes-sud-dev` (`wrangler --env dev`, workers.dev only, noindex). Never commit directly to `main`; workflow in `CONTRIBUTING.md`. New `vars` must be declared for both root and `env.dev`.
- Add a page: add slug in `routes.ts`, a view, its entry in `views` map, and meta + copy in both JSON files.
- Design tokens in `src/styles/global.css` (`@theme`); brand blue `#11509F`. `public/logo.svg` is a placeholder.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

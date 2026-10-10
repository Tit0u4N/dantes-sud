# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Bilingual (FR root, EN under `/en/`) Astro 7 + Tailwind v4 site. Spec in `REQUIREMENT.MD`, progress in `TASKS.md`. Implemented: home, on-site maintenance, workshop, sales, contact, thank-you, 404.

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

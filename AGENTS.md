# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

Fresh Astro 7 "basics" starter (`dantes-sud`). Only one page ([src/pages/index.astro](src/pages/index.astro)), one layout ([src/layouts/Layout.astro](src/layouts/Layout.astro)) and a demo [Welcome.astro](src/components/Welcome.astro) component. No integrations, tests, linter, or content collections configured. `REQUIREMENT.MD` is currently empty; `README.md` is the unmodified starter template.

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

File-based routing: each file in `src/pages/` becomes a route. Pages wrap content in `Layout.astro`. Static assets go in `public/`; processed assets (imported SVGs) in `src/assets/`. `astro.config.mjs` is empty (`defineConfig({})`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

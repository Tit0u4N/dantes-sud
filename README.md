# Dantès — site vitrine

Site de [DANTÈS](https://www.dantes-sud.fr), réparation et maintenance d'engins de levage, d'élévation et de manutention à Carros (06). Bilingue : français à la racine, anglais sous `/en/`.

## Stack

- [Astro 7](https://docs.astro.build) (site statique) + [Tailwind CSS 4](https://tailwindcss.com)
- [Bun](https://bun.sh) comme gestionnaire de paquets (Node ≥ 22.12)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) : sert les pages statiques et le formulaire de contact (`/api/contact`)
- [Resend](https://resend.com) : envoi des mails du formulaire depuis `contact.dantes-sud.fr`

## Commandes

| Commande | Action |
| :-- | :-- |
| `bun install` | Installe les dépendances |
| `bun dev` | Serveur de dev Astro sur `localhost:4321` (sans le Worker) |
| `bun run build` | Build de production dans `./dist/` |
| `bunx wrangler dev` | Sert `dist/` + le Worker sur `localhost:8787` (formulaire compris) |
| `bun run cf-typegen` | Génère les types du Worker (`worker/worker-configuration.d.ts`) |

## Structure

```text
src/
  pages/[...path].astro   route unique : chaque page × langue
  views/                  une vue par page (Home, Trade, Contact…)
  i18n/routes.ts          slugs FR / EN de chaque page
  i18n/locales/*.json     tous les textes FR et EN
  content/news/<fr|en>/   actualités en Markdown
  config.ts               infos entreprise, réseaux, partenaires
worker/index.ts           Worker Cloudflare : /api/contact → Resend, le reste → pages statiques
public/_redirects         redirections 301 des anciennes URL
public/_headers           noindex des copies workers.dev
wrangler.jsonc            config Cloudflare (prod + env « dev »)
```

Ajouter une page : un slug dans `routes.ts`, une vue dans `src/views/`, son entrée dans la map `views`, et les textes dans les deux fichiers JSON.

## Environnements

Le déploiement est automatique ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) :

| Branche | Worker | URL |
| :-- | :-- | :-- |
| `main` | `dantes-sud` (prod) | `dantes-sud.dantes-1a5.workers.dev`, puis `www.dantes-sud.fr` une fois le domaine branché |
| `develop` | `dantes-sud-dev` (dev) | `dantes-sud-dev.dantes-1a5.workers.dev` (non indexé) |

Les pull requests sont seulement buildées. Les mails envoyés depuis le dev ont un sujet préfixé `[DEV]`.

### Secrets

- GitHub (Settings → Secrets → Actions) : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` (compte Dantes).
- Cloudflare, par Worker : `RESEND_API_KEY`

  ```bash
  bunx wrangler secret put RESEND_API_KEY
  bunx wrangler secret put RESEND_API_KEY --env dev
  ```

- Local : fichier `.dev.vars` (non versionné) avec `RESEND_API_KEY=...` pour `bunx wrangler dev`.

## Contribuer

Voir [CONTRIBUTING.md](CONTRIBUTING.md).

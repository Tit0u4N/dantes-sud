# Contribuer

## Branches

- `main` = **production**. Chaque push déploie le Worker `dantes-sud`. Jamais de commit direct : uniquement des merges de `develop` (ou d'un hotfix). Seule exception : les actualités publiées via Pages CMS (voir plus bas).
- `develop` = **dev**. Chaque push déploie le Worker `dantes-sud-dev` sur `dantes-sud-dev.dantes-1a5.workers.dev`.
- Branches de travail, créées depuis `develop` : `feat/…`, `fix/…`, `chore/…`, `docs/…`.

## Cycle

1. `git switch develop && git pull`, puis `git switch -c feat/ma-modif`.
2. Commits, puis pull request vers `develop`. La CI builde le site.
3. Merge → déploiement automatique en dev. Vérifier sur l'URL dev (pages FR et EN, formulaire si touché).
4. Pull request `develop` → `main`. Merge → déploiement en prod.

### Hotfix

Correctif urgent en prod : branche `fix/…` depuis `main`, PR vers `main`, puis merger `main` dans `develop` pour ne pas perdre le correctif.

### Actualités (Pages CMS)

Les articles de `src/content/news/` sont édités sur <https://app.pagescms.org> par des non-développeurs, avec la config `.pages.yml`. Chaque enregistrement commite directement sur `main` et déclenche le déploiement prod. Guide éditeur : `docs/AJOUTER-UN-ARTICLE.md`.

- Mise en place : installer la GitHub App Pages CMS sur le dépôt, puis inviter l'éditeur par e-mail depuis Pages CMS (Settings → Collaborators). Pas besoin de compte GitHub pour lui.
- Si `main` est protégée, autoriser l'app Pages CMS à pousser (bypass de la règle) sinon ses commits sont refusés.
- `main` avance donc sans `develop` : avant de démarrer une branche, `git switch develop && git merge origin/main`.
- Un champ ajouté au schéma `src/content.config.ts` s'ajoute aussi dans `.pages.yml`.

## Règles

- Messages de commit au format [Conventional Commits](https://www.conventionalcommits.org/fr/) : `feat(contact): …`, `fix(i18n): …`, `chore: …`.
- `bun run build` doit passer avant d'ouvrir une PR.
- Tout texte visible existe en français **et** en anglais (`src/i18n/locales/fr.json` et `en.json`), y compris title, meta description et textes alternatifs.
- Pas de secret dans le dépôt : clés dans `wrangler secret`, les secrets GitHub ou `.dev.vars`.
- Une nouvelle variable ou un nouveau binding dans `wrangler.jsonc` se déclare pour la prod **et** pour `env.dev` (les `vars` ne sont pas héritées), puis `bun run cf-typegen`.
- Ne pas brancher de sous-domaine de dantes-sud.fr sur le Worker dev : il reste sur workers.dev, en noindex (`public/_headers`).

## Réglages GitHub conseillés

Dans Settings → Branches, protéger `main` et `develop` : pull request obligatoire, check « build-and-deploy » vert avant merge.

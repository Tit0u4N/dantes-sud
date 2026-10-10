# TASKS — refonte dantes-sud.fr

Source prioritaire : brief « refonte site DANTÈS 2027 ». [REQUIREMENT.MD](REQUIREMENT.MD) = référence secondaire (le brief prime). Légende : `[x]` fait, `[ ]` à faire, `[CONFIRMER]` info client requise.

## Décisions techniques
- Astro 7 + Tailwind v4 (`@tailwindcss/vite`), i18next, build statique (Bun).
- FR à la racine, EN complet sous `/en/`. Slugs traduits dans [src/i18n/routes.ts](src/i18n/routes.ts) ; une seule route [src/pages/[...path].astro](src/pages/[...path].astro) génère toutes les pages × langues.
- Textes dans [src/i18n/locales/](src/i18n/locales) (`fr.json`, `en.json`). Faits société, réseaux, partenaires, preuves dans [src/config.ts](src/config.ts) (URL vide = bloc ou icône masqué).
- Actualités : collection Markdown `src/content/news/<fr|en>/<slug>.md` ([src/content.config.ts](src/content.config.ts)).
- Anciennes URLs : `redirects` dans [astro.config.mjs](astro.config.mjs) (pages HTML de redirection).
- Style : industriel moderne, bleu `#11509F`, jaune signal pour les CTA, motif hexagone, police Archivo.
- Formulaire contact : UI + validation + redirection `/merci`, **backend non branché**.

## Fait
### Socle
- [x] Config `site`, i18n, Tailwind, design tokens, boutons, hexagone, fond blueprint
- [x] Layout : title, meta description, canonical, hreflang depuis `alternates`, og:image, twitter card, JSON-LD LocalBusiness
- [x] Header : topbar téléphone cliquable + réseaux + langue, menu 7 entrées, bouton « Demander un devis », menu mobile
- [x] Footer : coordonnées, réseaux, zones, 7 liens (sans Odoo)
- [x] Composants : PageHero, CtaBand, Steps, HexPhoto, Socials, Vgp

### Pages (FR + EN)
- [x] Accueil (H1/sous-titre/3 paragraphes du brief, chiffres, 3 métiers, VGP, process, zones, marques, preuves et Instagram masqués si vides)
- [x] Levage, Élévation, Manutention (vue partagée `Trade.astro`, textes du brief, H2 mots-clés, VGP, vente neuf/occasion)
- [x] Nos partenaires (5 fiches, badge « Agent de maintenance agréé » JEKKO/SOCAGE/Cormach)
- [x] Nos actualités (liste + état vide + route article)
- [x] Nous contacter (formulaire du brief + photo, carte Google, tuiles 06/83/13/04, LocalBusiness)
- [x] Merci (noindex), 404

### SEO / technique
- [x] Titles + meta descriptions du tableau du brief
- [x] Sitemap FR/EN avec hreflang ([sitemap.xml.ts](src/pages/sitemap.xml.ts)), robots.txt (exclut `/merci`, `/en/thank-you`)
- [x] JSON-LD LocalBusiness (accueil, contact)
- [x] Images renommées (mots-clés) + alt, og:image
- [x] Anciennes pages supprimées (maintenance sur site, restauration, vente) + redirections (`/contactus`, `/website/info`, `/en_GB/*`, etc.)
- [x] Build OK (17 pages + redirections + sitemap)
- [x] Docs : CLAUDE.md, AGENTS.md, TASKS.md

## À faire — code
- [ ] Test visuel navigateur (desktop + mobile), audit accessibilité/perf
- [ ] Backend formulaire (Formspree / Resend / action Astro), envoi de la photo jointe, puis redirection `/merci`
- [ ] Vraie carte des 4 départements (actuellement tuiles) + fil Instagram intégré
- [ ] Vrais 301 côté hébergeur (Astro ne génère que des redirections HTML)
- [ ] Remplacer `public/logo.svg` (placeholder) et favicon définitif
- [ ] Polices auto-hébergées (actuellement Google Fonts)
- [ ] Pages mentions légales + confidentialité, liens dans le footer
- [ ] Bandeau cookies si mesure d'audience
- [ ] Search Console, Google Business Profile, PageSpeed avant/après
- [ ] Rédiger ~2 articles/mois dans `src/content/news/fr/` (titre = marque + ville)

## À fournir par le client `[CONFIRMER]`
- [ ] URL LinkedIn / Instagram / Google Business Profile (`config.social`)
- [ ] Logos JEKKO, SOCAGE
- [ ] Rôle de Carrosserie Cornut
- [ ] Accord Bureau Veritas (nom cité en texte, jamais de logo sans accord)
- [ ] Logos clients, avis Google (`config.proof`)
- [ ] Horaires d'ouverture
- [ ] Coordonnées GPS exactes (`config.geo` approximatif)
- [ ] Image de partage avec logo
- [ ] Valider les brouillons (`"draft": true`) : télécom, cinéma (Élévation), « machine à remplacer » (Manutention)
- [ ] Confirmer que `images-1.webp` (triangle bleu) est le logo CELA
- [ ] Droits de `jf545-mediaco.webp` (non utilisé)

## Abandonné (ancienne spec REQUIREMENT.MD, remplacée par le brief)
P02 Services, P03–P05 (maintenance, restauration, vente), P06–P23 (contrat, occasion, matériels, marques détaillées, zones par département, réalisations, FAQ, À propos), P25 Conseils. Remplacés par les 7 pages du brief.

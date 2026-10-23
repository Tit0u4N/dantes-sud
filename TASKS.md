# TASKS — refonte dantes-sud.fr

Source prioritaire : brief « refonte site DANTÈS 2027 ». [REQUIREMENT.MD](REQUIREMENT.MD) = référence secondaire (le brief prime). Légende : `[x]` fait, `[ ]` à faire, `[CONFIRMER]` info client requise.

## Décisions techniques
- Astro 7 + Tailwind v4 (`@tailwindcss/vite`), i18next, build statique (Bun).
- FR à la racine, EN complet sous `/en/`. Slugs traduits dans [src/i18n/routes.ts](src/i18n/routes.ts) ; une seule route [src/pages/[...path].astro](src/pages/[...path].astro) génère toutes les pages × langues.
- Textes dans [src/i18n/locales/](src/i18n/locales) (`fr.json`, `en.json`). Faits société, réseaux, partenaires, preuves dans [src/config.ts](src/config.ts) (URL vide = bloc ou icône masqué).
- Actualités : collection Markdown `src/content/news/<fr|en>/<slug>.md` ([src/content.config.ts](src/content.config.ts)).
- Anciennes URLs : vraies 301 via [public/_redirects](public/_redirects) (Cloudflare), `html_handling: drop-trailing-slash` dans [wrangler.jsonc](wrangler.jsonc). Préprod workers.dev noindex via [public/_headers](public/_headers).
- Style : industriel moderne, bleu `#11509F`, jaune signal pour les CTA, motif hexagone, police Archivo.
- Formulaire contact : envoi via [worker/index.ts](worker/index.ts) (`POST /api/contact`) → Resend (`formulaire@contact.dantes-sud.fr` → `contact@dantes-sud.fr`, photo en PJ), honeypot, puis redirection `/merci`. Secret `RESEND_API_KEY`.

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
- [x] Horaires lun–ven 7h30–18h00 (footer, contact, JSON-LD `openingHoursSpecification`, `config.hours`)
- [x] Carte contact : coords de la fiche Google (43.8023, 7.1956), carte chargée au clic (pas de cookie tiers avant), lien « Ouvrir dans Google Maps », `social.gbp` renseigné
- [x] Audit SEO appliqué : pages mentions légales + confidentialité (FR/EN, footer, lien depuis le formulaire), vraies 301 + trailing slash, préprod noindex, JSON-LD (LocalBusiness enrichi, BreadcrumbList, Service par métier), page actualités noindex et hors sitemap tant que vide, titres du footer en `<p>`, H1 partenaires/actualités, ancres « Site officiel X », bloc « autres métiers » (maillage), Monaco ajouté aux zones, « partout en PACA » corrigé, relecture EN, champ e-mail facultatif, images OG 1200×630 par métier, `llms.txt`

## À faire — code
- [ ] Vérifier visuellement que l'embed carte (requête « DANTÈS, 15e Rue ») pointe la bonne fiche ; sinon basculer sur `q=lat,lng`
- [ ] Test visuel navigateur (desktop + mobile), audit accessibilité/perf
- [x] Backend formulaire (Worker + Resend), envoi de la photo jointe, puis redirection `/merci`
- [ ] Vraie carte des 4 départements (actuellement tuiles) + fil Instagram intégré
- [ ] Après déploiement : vérifier `curl -I` des 301 (`/contactus`, `/levage/`) et `X-Robots-Tag: noindex` sur la préprod
- [ ] Mise en ligne : `workers_dev = false` pour ne pas garder deux copies du site
- [ ] Remplacer `public/logo.svg` (placeholder) et favicon définitif
- [ ] Polices auto-hébergées (actuellement Google Fonts)
- [ ] Bandeau cookies si mesure d'audience
- [ ] Search Console, Google Business Profile, PageSpeed avant/après
- [ ] Publier 2–3 articles avant la mise en ligne (la page actualités redevient indexable dès le premier)
- [ ] Rédiger ~2 articles/mois dans `src/content/news/fr/` (titre = marque + ville)

## À faire — contenu (audit SEO)
- [ ] Restauration en atelier + vente neuf/occasion de l'ancien site : section sur l'accueil ou page dédiée (texte dans REQUIREMENT.MD §3.4), le mot « occasion » est absent de l'accueil
- [ ] Manutention trop courte (~240 mots) : types de machines (frontal, rétractable, gerbeur, transpalette), pannes courantes, marques
- [ ] FAQ de 4–5 questions par métier (délai, déplacement, fréquence VGP, marques hors partenaires) + JSON-LD FAQPage
- [ ] Page VGP dédiée (« VGP nacelle / grue auxiliaire / chariot élévateur »), les 4 blocs VGP pointent dessus
- [ ] Preuves sociales : 3–4 photos de chantier, avis Google, logos clients, année de création (2022), attestations de formation constructeur
- [ ] Pages par marque (JEKKO, SOCAGE) si le volume de contenu suit
- [ ] Relecture de la version anglaise par un anglophone
- [ ] Image de partage avec logo (les OG actuelles sont des recadrages de photos)

## À fournir par le client `[CONFIRMER]`
- [ ] Capital social de la SARL (`config.legal.capital`, ligne masquée tant que vide) et relecture des mentions légales / politique de confidentialité (SIRET, RCS, TVA tirés de SIRENE ; directeur de publication : Clément Lacombe-Fabre ; hébergeur : Cloudflare)
- [ ] Monaco : zone réellement desservie (ajoutée sur décision de la session) 
- [ ] Délais d'intervention par département
- [ ] URL LinkedIn / Instagram à confirmer (`config.social` ; Google Business Profile renseigné)
- [ ] Logos JEKKO, SOCAGE
- [ ] Rôle de Carrosserie Cornut
- [ ] Accord Bureau Veritas (nom cité en texte, jamais de logo sans accord)
- [ ] Logos clients, avis Google (`config.proof`)
- [ ] Image de partage avec logo
- [ ] Valider les brouillons (`"draft": true`) : télécom, cinéma (Élévation), « machine à remplacer » (Manutention)
- [ ] Confirmer que `images-1.webp` (triangle bleu) est le logo CELA
- [ ] Droits de `jf545-mediaco.webp` (non utilisé)

## Abandonné (ancienne spec REQUIREMENT.MD, remplacée par le brief)
P02 Services, P03–P05 (maintenance, restauration, vente), P06–P23 (contrat, occasion, matériels, marques détaillées, zones par département, réalisations, FAQ, À propos), P25 Conseils. Remplacés par les 7 pages du brief.

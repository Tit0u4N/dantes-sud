# TASKS — refonte dantes-sud.fr

Source : [REQUIREMENT.MD](REQUIREMENT.MD). Légende : `[x]` fait, `[ ]` à faire, `[CONFIRMER]` info client requise.

## Décisions techniques
- Astro 7 + Tailwind v4 (`@tailwindcss/vite`), i18next, build statique.
- FR à la racine, EN sous `/en/`. Slugs traduits dans [src/i18n/routes.ts](src/i18n/routes.ts) ; une seule route [src/pages/[...path].astro](src/pages/[...path].astro) génère toutes les pages × langues.
- Textes dans [src/i18n/locales/](src/i18n/locales) (`fr.json`, `en.json`). Coordonnées dans [src/config.ts](src/config.ts).
- Style : industriel moderne, bleu `#11509F`, jaune signal pour les CTA, motif hexagone (écho du logo), police Archivo (axe de largeur).
- Formulaire contact : UI + validation + redirection `/merci`, **backend non branché**.

## Socle
- [x] Config `site`, i18n, Tailwind
- [x] Design tokens, boutons, hexagone, fond blueprint ([global.css](src/styles/global.css))
- [x] Layout : title, meta description, canonical, hreflang fr/en/x-default, `lang`, og
- [x] Header (menu Services déroulant, sélecteur de langue vers page équivalente, bouton téléphone, menu mobile)
- [x] Footer (coordonnées, zones, liens)
- [x] Composants : PageHero, CtaBand, Steps, HexPhoto
- [ ] Remplacer `public/logo.svg` (placeholder) par le vrai logo + logo sans baseline
- [ ] Favicon définitif
- [ ] Polices auto-hébergées (actuellement Google Fonts)
- [ ] Test visuel navigateur (desktop + mobile) et audit accessibilité/perf

## Pages implémentées (contenu déjà écrit)
- [x] P01 Accueil FR/EN (structure + blocs services, zones, marques)
- [x] P03 Maintenance sur site FR/EN
- [x] P04 Restauration en atelier FR/EN
- [x] P05 Vente neuf et occasion FR/EN
- [x] P24 Contact FR/EN
- [x] P28 404 (FR, lien vers EN)
- [x] P29 Merci FR/EN (noindex)

## À corriger / compléter dans les pages faites
- [ ] P04 : 3 étapes (arrivée, évaluation, restauration) = brouillon rédigé par nous (`"draft": true`) → valider `[CONFIRMER]`
- [ ] P01 : intro (brouillon), chiffres clés, avis clients, bloc matériels `[CONFIRMER]`
- [ ] P01/P03/P04/P05 : photos réelles (cadres hexagonaux « Photo à fournir »), alt FR/EN, WebP
- [ ] P05 : liens marques vers P12–P15 (pages à créer)
- [ ] P24 : carte Google intégrée, horaires, accès poids lourds `[CONFIRMER]`
- [ ] P24 : brancher le backend du formulaire (Formspree / Resend / action Astro) puis redirection `/merci`
- [ ] Nom commercial et adresse définitifs `[CONFIRMER]`
- [ ] Horaires `[CONFIRMER]` (footer + contact)
- [ ] Pied de page : liens mentions légales / confidentialité (après P26–P27)
- [ ] Menu complet selon §4 (Matériels, Marques, Occasion, Réalisations, À propos) au fil des pages

## Pages restantes
Priorité 1 : [ ] P02 Services · [ ] P22 À propos · [ ] P26 Mentions légales · [ ] P27 Confidentialité
Priorité 2 : [ ] P06 Contrat · [ ] P07 Occasion · [ ] P08 Nacelles · [ ] P09 Grues aux. · [ ] P10 Mini-grues · [ ] P11 Marques · [ ] P12 Jekko · [ ] P13 Socage · [ ] P14 Cormach · [ ] P15 CELA · [ ] P16 Zones · [ ] P17 Alpes-Maritimes · [ ] P21 Réalisations · [ ] P23 FAQ
Priorité 3 : [ ] P18 Var · [ ] P19 Bouches-du-Rhône · [ ] P20 Alpes-de-Haute-Provence · [ ] P25 Conseils

## SEO / technique (§9)
- [ ] Sitemap FR+EN (`@astrojs/sitemap` avec i18n), robots.txt (exclure `/merci`, `/en/thank-you`)
- [ ] Données structurées : LocalBusiness (accueil, contact), FAQPage, fil d'Ariane
- [ ] Image de partage par page
- [ ] Redirections 301 (§8) : `/contactus`, `/en_GB/*`, `/website/info` — dépend de l'hébergeur
- [ ] Bandeau cookies si mesure d'audience
- [ ] Search Console, Google Business Profile, PageSpeed avant/après

## Refonte 2027 (brief prioritaire)
- [x] Menu 7 entrées, topbar téléphone cliquable + bouton devis + réseaux, footer sans Odoo
- [x] Accueil (H1/sous-titre/textes du brief, chiffres, VGP, process, zones, marques), Levage, Élévation, Manutention, Partenaires, Actualités (collection Markdown), Contact (formulaire brief + carte)
- [x] Anciennes pages supprimées + redirections, sitemap FR/EN avec hreflang, robots.txt, JSON-LD LocalBusiness (accueil, contact), images renommées
- [ ] `[CONFIRMER]` Paragraphes télécom et cinéma (Élévation), bloc « machine à remplacer » (Manutention) : brouillons (`draft`)
- [ ] Fournir : URL LinkedIn / Instagram / Google Business Profile (`src/config.ts` → `social`), logos JEKKO / SOCAGE / DEAL Levage, lien DEAL, rôle Carrosserie Cornut, accord Bureau Veritas (nom cité en texte, pas de logo), logos clients, avis Google
- [ ] Coordonnées GPS exactes (config.geo approximatif), horaires, image de partage avec logo
- [ ] Carte des 4 départements (actuellement tuiles 06/83/13/04), fil Instagram intégré
- [ ] 2 articles/mois dans `src/content/news/fr/` (titre = marque + ville)
- [ ] Backend formulaire (photo jointe incluse)

# Fiche de refonte : dantes-sud.fr

**Objet** : inventaire des contenus à garder, des contenus à créer et de toutes les pages du nouveau site
**Site actuel** : https://www.dantes-sud.fr/ (Odoo, 5 pages)
**Site cible** : 29 pages, entièrement bilingue français et anglais
**Date** : 10 octobre 2026

**Légende des statuts**

| Marqueur | Signification |
|---|---|
| `[GARDER]` | Contenu existant à reprendre tel quel |
| `[CORRIGER]` | Contenu existant à reprendre après correction |
| `[RÉDIGER]` | Contenu qui n'existe pas, à écrire |
| `[TRADUIRE]` | Version anglaise à produire |
| `[SUPPRIMER]` | À ne pas reprendre |
| `[CONFIRMER]` | Information que seule l'entreprise peut valider |

---

## 1. Principes du nouveau site

### 1.1 Bilingue complet
- Français à la racine (`/`), anglais sous `/en/`. Cela conserve les adresses actuelles des pages françaises.
- **Chaque page existe dans les deux langues**, avec une adresse traduite (`/maintenance-sur-site` et `/en/on-site-maintenance`).
- Tout est traduit, pas seulement le texte : title, meta description, menu, pied de page, textes alternatifs des images, boutons, messages du formulaire, page 404.
- Balises `hreflang` sur chaque page : `fr`, `en` et `x-default` (pointant vers le français).
- Chaque version a sa propre URL canonique.
- Sélecteur de langue qui renvoie vers la page équivalente, pas vers l'accueil.
- L'anglais ne se traduit pas mot à mot : les requêtes visées sont différentes (voir 1.3).

### 1.2 Règles de marque à appliquer partout
- **Nom** : une seule forme. Proposition : "Dantès" `[CONFIRMER]` (le site actuel utilise "Dantès", "Dantes" et "Dantès Sud").
- **Adresse** : une seule écriture, identique à la fiche Google Business Profile `[CONFIRMER]`. Actuellement : "15ème rue 1ere Avenue, 06510 Carros" et "15eme rue 06510 CARROS".
- **Téléphone** : +33 7 65 80 59 14, lien au format `tel:+33765805914`.
- **Email** : contact@dantes-sud.fr

### 1.3 Vocabulaire à utiliser (mots que tapent les clients)

| Français | Anglais |
|---|---|
| nacelle élévatrice, nacelle araignée, camion nacelle | aerial work platform, spider lift, truck-mounted platform |
| grue auxiliaire sur camion | truck-mounted crane, loader crane |
| mini-grue sur chenilles | mini crawler crane, spider crane |
| matériel de levage | lifting equipment |
| dépannage sur site | on-site repair, mobile repair service |
| remise en état, restauration | refurbishment, overhaul |
| chaudronnerie | metal fabrication (et non "welding", utilisé dans la traduction actuelle) |
| Côte d'Azur, PACA | French Riviera, South of France |

---

## 2. Informations de base à conserver

| Élément | Valeur | Statut |
|---|---|---|
| Slogan FR | Toujours en mouvement. | `[GARDER]` |
| Slogan EN | Always on the move | `[GARDER]` |
| Activités | Maintenance sur site, restauration en atelier, vente neuf et occasion | `[GARDER]` |
| Zone couverte | Alpes-Maritimes (06), Alpes-de-Haute-Provence (04), Var (83), Bouches-du-Rhône (13) | `[GARDER]` |
| Moyens | Fourgon atelier entièrement équipé, atelier à Carros | `[GARDER]` |
| Compétences | Mécanique thermique et électrique, hydraulique, électricité, chaudronnerie, soudure, pièces détachées | `[GARDER]` |
| Marques partenaires | Jekko, Socage, Cormach, CELA | `[GARDER]` |
| Monaco dans la zone couverte ? | | `[CONFIRMER]` |
| Statut exact auprès de chaque marque (distributeur, revendeur, SAV agréé) | | `[CONFIRMER]` |
| Horaires d'ouverture | | `[CONFIRMER]` |
| Raison sociale, SIRET, forme juridique | | `[CONFIRMER]` |

---

## 3. Contenus existants : inventaire page par page

### 3.1 Accueil

| Bloc | Statut | Remarque |
|---|---|---|
| Titre "Dantès" | `[SUPPRIMER]` | Remplacé par un vrai H1 (voir P01) |
| Slogan "Toujours en mouvement." | `[GARDER]` | Passe en sous-titre |
| Bloc Maintenance sur site | `[GARDER]` | Texte ci-dessous |
| Bloc Vente neuf ou occasion | `[CORRIGER]` | Le texte ne parle que d'occasion, ajouter le neuf |
| Bloc Restauration en atelier | `[GARDER]` | Texte ci-dessous |
| Formulaire "Nous Contacter" | `[SUPPRIMER]` | Un seul formulaire, sur la page Contact |
| Traduction anglaise des blocs | `[CORRIGER]` | Réutilisable comme base |

**Textes français à reprendre**

> **Maintenance sur site.** Nous disposons d'un fourgon atelier totalement équipé pour toutes interventions de dépannage sur site, couvrant les départements suivants : 06, 04, 83, et 13. Nous mettons tout en œuvre pour vous apporter un service rapide sur site, quel que soit l'accès.

> **Vente neuf ou occasion.** Nous vous proposons un service de vente de matériel d'occasion de qualité, soigneusement sélectionné pour répondre à vos besoins spécifiques. Notre équipe est à votre disposition pour vous conseiller et vous aider à choisir l'équipement le plus adapté à vos projets.

> **Restauration en atelier.** Nous sommes en mesure d'accueillir et de remettre en état tout type de matériel dans nos ateliers, quel que soit l'âge du matériel et/ou la nature de la réparation : moteur thermique ou électrique, électricité, hydraulique, chaudronnerie.

**Textes anglais existants (base de travail)**

> **On-site maintenance.** We have a fully equipped workshop van for all on-site repair services, covering the following departments: 06, 04, 83, and 13. We make every effort to provide you with prompt on-site service, regardless of access.

> **New or second-hand sales.** We offer a high-quality second-hand equipment sales service, carefully selected to meet your specific needs. Our team is at your disposal to advise and assist you in choosing the most suitable equipment for your projects.

> **Workshop restoration.** We are capable of accommodating and refurbishing all types of equipment in our workshops, regardless of the age of the equipment and/or the nature of the repair: thermal or electric motors, electricity, hydraulics, and welding.

À corriger en anglais : écrire le nom des départements en plus des numéros (les numéros ne parlent pas à un lecteur étranger), remplacer "welding" par "metal fabrication", "thermal motors" par "combustion engines".

### 3.2 Maintenance sur site

Page la mieux rédigée du site. **Tout le texte est à garder**, seule la hiérarchie des titres change.

| Bloc | Statut |
|---|---|
| Introduction | `[GARDER]` |
| Nos atouts (3 atouts) | `[GARDER]` passer le titre en H2, les atouts en H3 |
| Processus d'intervention (6 étapes) | `[GARDER]` |
| Appel à l'action | `[GARDER]` |
| Meta description | `[GARDER]` |
| Version anglaise | `[TRADUIRE]` inexistante aujourd'hui |

> **Introduction.** Dantès propose un service complet de maintenance sur site pour tout type de matériel de levage, permettant une intervention rapide et performante directement là où se trouve le matériel. Grâce à un véhicule atelier entièrement équipé, l'équipe intervient dans les Alpes-Maritimes (06), les Alpes-de-Haute-Provence (04), le Var (83) et les Bouches-du-Rhône (13).

> **Réactivité.** Interventions rapides assurées par un camion atelier mobile, garantissant une prise en charge efficace sur site.
>
> **Polyvalence technique.** Diagnostics et réparations intégrales, couvrant : mécanique (thermique et électrique), systèmes hydrauliques et électriques, chaudronnerie, soudure, pièces détachées.
>
> **Accompagnement personnalisé.** Conseils techniques adaptés à chaque besoin, qu'il s'agisse de dépannage, maintenance préventive ou choix de matériel de remplacement.

> **Processus d'intervention**
> 1. **Contact initial.** Vous nous appelez ou soumettez une demande via notre site.
> 2. **Pré-étude à distance.** Analyse des informations, identification du problème pour préparer efficacement l'intervention.
> 3. **Planification rapide et estimation des coûts.** Une intervention est planifiée selon votre urgence (dépannage immédiat ou planning de maintenance préventive).
> 4. **Intervention mobile.** Nos techniciens se déplacent avec un camion atelier équipé pour réaliser diagnostics, réparations ou réglages directement sur site.
> 5. **Rapport complet.** Vous recevez un compte-rendu avec descriptif des actions réalisées, état du matériel, recommandations d'entretien futur.
> 6. **Suivi post-intervention.** Option de contrat de maintenance périodique pour anticiper les pannes et optimiser la durée de vie de vos équipements.

> **Appel à l'action.** Besoin d'une intervention rapide ou d'un devis ? Contactez-nous aujourd'hui pour une assistance technique, adaptée à vos impératifs.

> **Meta description (158 caractères).** Intervention rapide pour matériel de levage sur site dans les départements 06, 04, 83, 13. Réparations mécaniques, hydrauliques, électriques. Contactez-nous !

### 3.3 Vente neuf ou occasion

| Bloc | Statut | Remarque |
|---|---|---|
| Introduction | `[GARDER]` | |
| Bloc Jekko | `[GARDER]` | |
| Bloc Socage | `[CORRIGER]` | "araingnée" devient "araignée" |
| Bloc Cormach | `[GARDER]` | |
| Bloc CELA | `[CORRIGER]` | Titre en anglais à passer en français, même niveau de titre que les autres |
| Appel à l'action | `[CORRIGER]` | Trois fautes |
| Meta description et title | `[GARDER]` | |
| Liens "En savoir plus" vers les fabricants | `[CORRIGER]` | Pointer vers les nouvelles pages marques du site |
| Version anglaise | `[TRADUIRE]` | |

> **Introduction.** Chez Dantès, nous vous proposons une gamme complète de matériel de levage et élévation en neuf ou occasion, sélectionné parmi les marques les plus performantes du marché. Grâce à nos partenariats privilégiés, nous vous offrons des solutions adaptées à toutes les situations et exigences professionnelles.

> **Jekko : mini-grues performantes et compactes.** Mini-grues sur chenilles SPX, grues articulées JF, minipickers MPK.
>
> **Socage : plateformes aériennes innovantes.** Nacelles araignées, camions nacelles articulées.
>
> **Cormach : grues hydrauliques auxiliaires sur camion.** Grues auxiliaires de la gamme légère à la gamme ultra-lourde.
>
> **CELA : nacelles élévatrices.** DT Truck (sur camion), DT Crawler (sur chenilles).

> **Appel à l'action corrigé.** Besoin de renouveler votre matériel ? Contactez-nous pour plus d'informations sur nos matériels et nos partenaires.

> **Title (60 caractères).** Vente matériel neuf & occasion – Dantès | Levage & élévation
>
> **Meta description (153 caractères).** Matériel de levage neuf ou d'occasion issu de marques réputées (Jekko, Socage, Cormach, CELA). Conseils personnalisés. Demandez un devis dès maintenant !

### 3.4 Restauration en atelier

| Bloc | Statut | Remarque |
|---|---|---|
| Introduction | `[CORRIGER]` | Remplacer "Dantès Sud" par le nom retenu |
| Liste "Restauration possible" | `[GARDER]` | |
| Étape "Arrivée du matériel" | `[RÉDIGER]` | Texte de démonstration actuellement en ligne |
| Étape "Évaluation technique" | `[RÉDIGER]` | Idem, et retirer le mot "fonctionnalité" du titre |
| Étape "Restauration complète en atelier" | `[RÉDIGER]` | Idem |
| Étape "Tests de validation" | `[GARDER]` | |
| Étape "Rapport détaillé" | `[GARDER]` | |
| Appel à l'action | `[GARDER]` | |
| Meta description | `[CORRIGER]` | "diagnostique" devient "diagnostic" |
| Version anglaise | `[TRADUIRE]` | |

> **Introduction.** Chez Dantès, notre atelier est spécialement équipé pour redonner vie à votre matériel de levage et manutention, qu'il soit ancien et/ou soumis à des pannes sévères. Nous intervenons sur tous types d'équipements peu importe l'âge de la machine.

> **Restauration possible.** Diagnostic approfondi, démontage complet, réusinage ou remplacement de pièces défectueuses, restauration mécanique, électrique, hydraulique ou par chaudronnerie. Nous nous attachons à restaurer non seulement la fonctionnalité, mais aussi la fiabilité et la longévité du matériel.

> **Tests de validation.** Examen fonctionnel complet : charges de levage, fonctionnement précis, sécurité, hydraulique, électrique.
>
> **Rapport détaillé.** Compte rendu clair avec les actions réalisées, état des pièces, recommandations et devis pour entretien futur.

> **Appel à l'action.** Votre matériel de levage montre des signes de fatigue ? Contactez-nous dès maintenant pour une restauration en atelier sur mesure.

> **Meta description corrigée (162 caractères).** Restaurations complètes en atelier de matériel de levage ancien ou endommagé : diagnostic, réusinage, mécano-hydraulique, électricité, chaudronnerie. Devis clair.

### 3.5 Contact

| Bloc | Statut | Remarque |
|---|---|---|
| Texte d'introduction | `[GARDER]` | |
| Champs du formulaire | `[CORRIGER]` | Retirer le champ "Email à", visible par erreur |
| Bloc "Ma société" | `[CORRIGER]` | Renommer avec le nom de l'entreprise |
| Meta description | `[GARDER]` | |
| Title "Contactez-nous" | `[SUPPRIMER]` | Remplacé (voir P24) |

> **Introduction.** Contactez-nous pour tout ce qui concerne notre entreprise ou nos services. Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.

> **Meta description (155 caractères).** Contactez Dantès à Carros pour vos besoins en réparation ou maintenance de véhicules de levage. Réponse rapide par téléphone, email ou formulaire en ligne.

### 3.6 À ne pas reprendre

- `[SUPPRIMER]` Les trois textes de démonstration "Une chronologie est une représentation graphique..." et "Une ligne du temps est..."
- `[SUPPRIMER]` La mention "Généré par Odoo, Créer un site web gratuit" du pied de page
- `[SUPPRIMER]` Les balises meta keywords
- `[SUPPRIMER]` La page `/website/info`
- `[SUPPRIMER]` Le lien de menu "Service" qui pointe vers `#`

### 3.7 Images à récupérer avant de fermer l'ancien site

Toutes les images sont à renommer et à doter d'un texte alternatif dans les deux langues. Je n'ai pas pu voir leur contenu, seulement leur nom de fichier.

| Page | Fichier actuel | Statut |
|---|---|---|
| Toutes | Logo (`/web/image/website/1/logo`) et "Logo sans baseline.webp" | `[GARDER]` |
| Accueil | WhatsApp Image 2024-04-15 at 21.10.24.webp | `[GARDER]` à renommer |
| Accueil | WhatsApp Image 2024-04-18 at 19.42.46.webp (sert aussi d'image de partage) | `[GARDER]` à renommer |
| Accueil | IMG-20250225-WA0005.webp | `[GARDER]` à renommer |
| Accueil | WhatsApp Image 2024-07-22 à 07.svg | `[CORRIGER]` photo enveloppée dans un SVG, réexporter en WebP |
| Accueil | JEKKO 1040spx.svg | `[CORRIGER]` idem |
| Maintenance | jf545 Mediaco Photo.webp | `[CONFIRMER]` le nom laisse penser à une photo d'un tiers, vérifier le droit d'usage |
| Vente | DSC_0046.jpg.webp, ForSte-27D-speed.webp, Serie-71000-E-ASC-Plus.webp, cormach.webp, images (1).webp, fire-cela.webp, logo-black.svg | `[CONFIRMER]` visuels fabricants, demander l'accord ou les kits médias officiels |
| Restauration | WhatsApp Image 2025-09-03 at 15.59.30.webp | `[GARDER]` à renommer |

**Photos à produire** `[RÉDIGER]` : atelier, fourgon d'intervention, équipe, avant / après de restaurations, chaque machine d'occasion en stock. Les photos réelles de l'entreprise valent mieux que les visuels fabricants.

---

## 4. Arborescence du nouveau site

29 pages par langue. Priorité 1 = indispensable à la mise en ligne, 2 = dans le mois qui suit, 3 = ensuite.

| ID | Page | URL française | URL anglaise | Origine | Priorité |
|---|---|---|---|---|---|
| P01 | Accueil | `/` | `/en/` | Existante, à refaire | 1 |
| P02 | Services (page mère) | `/services` | `/en/services` | Nouvelle | 1 |
| P03 | Maintenance sur site | `/maintenance-sur-site` | `/en/on-site-maintenance` | Existante, à étoffer | 1 |
| P04 | Restauration en atelier | `/restauration-en-atelier` | `/en/workshop-refurbishment` | Existante, à corriger | 1 |
| P05 | Vente neuf et occasion | `/vente-neuf-ou-occasion` | `/en/new-used-equipment` | Existante, à étoffer | 1 |
| P06 | Contrat de maintenance | `/contrat-maintenance` | `/en/maintenance-contract` | Nouvelle | 2 |
| P07 | Matériel d'occasion (annonces) | `/materiel-occasion` | `/en/used-equipment` | Nouvelle | 2 |
| P08 | Nacelles | `/nacelles` | `/en/aerial-platforms` | Nouvelle | 2 |
| P09 | Grues auxiliaires | `/grues-auxiliaires` | `/en/truck-mounted-cranes` | Nouvelle | 2 |
| P10 | Mini-grues | `/mini-grues` | `/en/mini-crawler-cranes` | Nouvelle | 2 |
| P11 | Marques (page mère) | `/marques` | `/en/brands` | Nouvelle | 2 |
| P12 | Jekko | `/marques/jekko` | `/en/brands/jekko` | Nouvelle | 2 |
| P13 | Socage | `/marques/socage` | `/en/brands/socage` | Nouvelle | 2 |
| P14 | Cormach | `/marques/cormach` | `/en/brands/cormach` | Nouvelle | 2 |
| P15 | CELA | `/marques/cela` | `/en/brands/cela` | Nouvelle | 2 |
| P16 | Zones d'intervention (page mère) | `/zones-intervention` | `/en/service-areas` | Nouvelle | 2 |
| P17 | Alpes-Maritimes | `/zones-intervention/alpes-maritimes` | `/en/service-areas/alpes-maritimes` | Nouvelle | 2 |
| P18 | Var | `/zones-intervention/var` | `/en/service-areas/var` | Nouvelle | 3 |
| P19 | Bouches-du-Rhône | `/zones-intervention/bouches-du-rhone` | `/en/service-areas/bouches-du-rhone` | Nouvelle | 3 |
| P20 | Alpes-de-Haute-Provence | `/zones-intervention/alpes-de-haute-provence` | `/en/service-areas/alpes-de-haute-provence` | Nouvelle | 3 |
| P21 | Réalisations | `/realisations` | `/en/projects` | Nouvelle | 2 |
| P22 | À propos | `/a-propos` | `/en/about` | Nouvelle | 1 |
| P23 | FAQ | `/faq` | `/en/faq` | Nouvelle | 2 |
| P24 | Contact | `/contact` | `/en/contact` | Existante, à refaire | 1 |
| P25 | Conseils (blog) | `/conseils` | `/en/advice` | Nouvelle | 3 |
| P26 | Mentions légales | `/mentions-legales` | `/en/legal-notice` | Nouvelle, obligatoire | 1 |
| P27 | Politique de confidentialité | `/politique-de-confidentialite` | `/en/privacy-policy` | Nouvelle, obligatoire | 1 |
| P28 | Page 404 | (automatique) | (automatique) | Nouvelle | 1 |
| P29 | Confirmation de formulaire | `/merci` | `/en/thank-you` | Nouvelle, non indexée | 1 |

**Menu principal proposé** : Services (déroulant : P03, P04, P05, P06) / Matériels (P08, P09, P10) / Marques (P12 à P15) / Occasion (P07) / Réalisations / À propos / Contact, plus le téléphone en bouton et le sélecteur de langue.

**Pied de page** : coordonnées, horaires, zones d'intervention (liens vers P17 à P20), FAQ, Conseils, mentions légales, politique de confidentialité.

---

## 5. Fiche par page

### P01. Accueil
- **Requête visée** : réparation nacelle grue Carros, matériel de levage Alpes-Maritimes / lifting equipment repair French Riviera
- **Title FR** : `Réparation de nacelles et grues à Carros (06) | Dantès`
- **Title EN** : `Crane & Aerial Platform Repair, French Riviera | Dantès`
- **H1 FR** : Réparation, maintenance et vente de matériel de levage dans les Alpes-Maritimes
- **Contenu repris** : slogan, les trois blocs services (section 3.1)
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Paragraphe d'introduction : qui est Dantès, pour qui, où (80 mots)
  - [ ] `[CORRIGER]` Bloc Vente : ajouter le neuf et les marques
  - [ ] `[RÉDIGER]` Bloc "Matériels pris en charge" avec liens vers P08, P09, P10 (60 mots)
  - [ ] `[RÉDIGER]` Bloc "Marques partenaires" avec logos et liens vers P12 à P15 (40 mots)
  - [ ] `[RÉDIGER]` Bloc "Zones d'intervention" avec carte et liens vers P17 à P20 (60 mots)
  - [ ] `[RÉDIGER]` Bloc chiffres clés `[CONFIRMER]` : années d'expérience, nombre d'interventions, délai moyen
  - [ ] `[RÉDIGER]` Avis clients (3 à 5) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Meta description FR (150 caractères) et EN
  - [ ] `[TRADUIRE]` Toute la page
- **Volume cible** : 400 à 500 mots par langue

### P02. Services (page mère)
- **Title FR** : `Services pour matériel de levage en PACA | Dantès`
- **Title EN** : `Lifting Equipment Services, South of France | Dantès`
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Introduction (80 mots)
  - [ ] `[RÉDIGER]` Une carte par service avec résumé de 40 mots et lien (P03, P04, P05, P06)
  - [ ] `[RÉDIGER]` Paragraphe "Comment choisir entre intervention sur site et atelier" (100 mots)
  - [ ] `[TRADUIRE]`
- **Volume cible** : 300 mots par langue

### P03. Maintenance sur site
- **Requête visée** : dépannage nacelle sur site, réparation grue sur chantier / on-site crane repair
- **Title FR** : `Dépannage de matériel de levage sur site en PACA | Dantès`
- **Title EN** : `On-Site Lifting Equipment Repair, South of France | Dantès`
- **Contenu repris** : toute la page actuelle (section 3.2)
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Liste des matériels pris en charge, avec liens vers P08, P09, P10 (80 mots)
  - [ ] `[RÉDIGER]` Pannes les plus fréquentes traitées sur site : fuite hydraulique, défaut électrique, capteur, stabilisateurs, etc. (150 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Délais d'intervention et horaires par département `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Équipement du fourgon atelier (60 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` 3 à 4 questions fréquentes propres à cette page
  - [ ] `[TRADUIRE]` Toute la page, meta description comprise
- **Volume cible** : 550 mots par langue (230 existants)

### P04. Restauration en atelier
- **Requête visée** : remise en état nacelle, reconditionnement grue auxiliaire / crane refurbishment
- **Title FR** : `Restauration de matériel de levage en atelier (06) | Dantès`
- **Title EN** : `Workshop Refurbishment of Lifting Equipment | Dantès`
- **Contenu repris** : section 3.4
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Étape "Arrivée du matériel" (40 mots)
  - [ ] `[RÉDIGER]` Étape "Évaluation technique" (40 mots)
  - [ ] `[RÉDIGER]` Étape "Restauration complète en atelier" (60 mots)
  - [ ] `[RÉDIGER]` Présentation de l'atelier : surface, équipements, capacité de levage (80 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` "Restaurer ou remplacer ?" : critères de décision (120 mots)
  - [ ] `[RÉDIGER]` Un exemple avant / après avec lien vers P21
  - [ ] `[TRADUIRE]`
- **Volume cible** : 500 mots par langue (130 réutilisables)

### P05. Vente neuf et occasion
- **Requête visée** : vente nacelle neuve, achat mini-grue / lifting equipment for sale
- **Title FR** : conserver l'actuel
- **Title EN** : `New & Used Lifting Equipment for Sale | Dantès`
- **Contenu repris** : section 3.3
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Pourquoi acheter chez Dantès : conseil, mise en service, SAV local (100 mots)
  - [ ] `[RÉDIGER]` Paragraphe "Neuf" et paragraphe "Occasion" distincts (80 mots chacun), le second renvoyant vers P07
  - [ ] `[RÉDIGER]` Reprise de l'ancien matériel, financement, livraison `[CONFIRMER]`
  - [ ] `[CORRIGER]` Liens des marques vers P12 à P15 au lieu des sites fabricants
  - [ ] `[TRADUIRE]`
- **Volume cible** : 450 mots par langue (110 existants)

### P06. Contrat de maintenance
- **Origine** : service cité en une ligne sur la page Maintenance actuelle
- **Title FR** : `Contrat de maintenance préventive levage | Dantès`
- **Title EN** : `Preventive Maintenance Contracts | Dantès`
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` À quoi sert un contrat, pour quels parcs de machines (100 mots)
  - [ ] `[RÉDIGER]` Contenu des visites, fréquence, rapport remis (150 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Formules proposées `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Lien avec les vérifications réglementaires (VGP) : préciser si Dantès les réalise ou prépare la machine `[CONFIRMER]`
  - [ ] `[TRADUIRE]`
- **Volume cible** : 400 mots par langue

### P07. Matériel d'occasion (annonces)
- **Requête visée** : nacelle occasion, grue auxiliaire occasion, mini-grue occasion / used spider lift for sale
- **Title FR** : `Nacelles et grues d'occasion à vendre (06) | Dantès`
- **Title EN** : `Used Cranes & Aerial Platforms for Sale | Dantès`
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Introduction : origine des machines, contrôle avant vente, garantie (120 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` **Une fiche par machine en stock** : marque, modèle, année, heures, hauteur ou capacité, état, photos, prix ou "sur demande" (80 mots par fiche) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Message affiché quand le stock est vide, avec formulaire de recherche
  - [ ] `[TRADUIRE]` Introduction et chaque fiche
- **À prévoir techniquement** : modèle de fiche réutilisable, statut "vendu"

### P08. Nacelles
- **Title FR** : `Réparation et entretien de nacelles élévatrices | Dantès`
- **Title EN** : `Aerial Work Platform Repair & Servicing | Dantès`
- **Contenu à rédiger**
  - [ ] `[RÉDIGER]` Types pris en charge : araignée, sur camion, articulée, sur chenilles (120 mots)
  - [ ] `[RÉDIGER]` Interventions courantes sur nacelles (150 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Marques réparées, y compris hors partenaires `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Liens vers P03, P04, P13, P15 et vers les annonces P07
  - [ ] `[TRADUIRE]`
- **Volume cible** : 450 mots par langue

### P09. Grues auxiliaires
- **Title FR** : `Réparation de grues auxiliaires sur camion | Dantès`
- **Title EN** : `Truck-Mounted Crane Repair & Servicing | Dantès`
- **Contenu à rédiger** : même trame que P08, liens vers P14
  - [ ] `[RÉDIGER]` Types et tonnages pris en charge (120 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Interventions courantes (150 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Montage de grue neuve sur porteur ? `[CONFIRMER]`
  - [ ] `[TRADUIRE]`
- **Volume cible** : 450 mots par langue

### P10. Mini-grues
- **Title FR** : `Réparation et vente de mini-grues sur chenilles | Dantès`
- **Title EN** : `Mini Crawler Crane Repair & Sales | Dantès`
- **Contenu à rédiger** : même trame que P08, liens vers P12
  - [ ] `[RÉDIGER]` Usages : vitrage, chantiers à accès réduit, intérieur (120 mots)
  - [ ] `[RÉDIGER]` Interventions courantes (150 mots) `[CONFIRMER]`
  - [ ] `[TRADUIRE]`
- **Volume cible** : 450 mots par langue

### P11. Marques (page mère)
- **Title FR** : `Marques partenaires : Jekko, Socage, Cormach, CELA | Dantès`
- **Title EN** : `Partner Brands: Jekko, Socage, Cormach, CELA | Dantès`
- [ ] `[RÉDIGER]` Introduction et une carte par marque (200 mots au total)
- [ ] `[TRADUIRE]`

### P12 à P15. Une page par marque (Jekko, Socage, Cormach, CELA)
- **Title FR, modèle** : `Jekko : vente et SAV de mini-grues dans le Sud-Est | Dantès`
- **Title EN, modèle** : `Jekko Mini Cranes: Sales & Service, South of France | Dantès`
- **Contenu repris** : la liste des gammes de la page Vente actuelle (section 3.3)
- **Contenu à rédiger, pour chacune des 4 pages**
  - [ ] `[RÉDIGER]` Présentation de la marque et du lien avec Dantès (80 mots) `[CONFIRMER]` le statut officiel avant d'écrire "agréé" ou "distributeur"
  - [ ] `[RÉDIGER]` Gammes proposées, une phrase par gamme (120 mots)
  - [ ] `[RÉDIGER]` Services Dantès sur cette marque : vente, mise en service, entretien, pièces (120 mots)
  - [ ] `[RÉDIGER]` Lien vers le site du fabricant (ouverture dans un nouvel onglet)
  - [ ] `[TRADUIRE]`
- **Volume cible** : 350 mots par page et par langue

### P16. Zones d'intervention (page mère)
- **Title FR** : `Zones d'intervention en PACA | Dantès`
- **Title EN** : `Service Areas in South-East France | Dantès`
- [ ] `[RÉDIGER]` Carte, introduction, une carte par département (200 mots)
- [ ] `[TRADUIRE]`

### P17 à P20. Une page par département
- **Title FR, modèle** : `Réparation nacelle et grue à Nice et dans le 06 | Dantès`
- **Title EN, modèle** : `Crane & Platform Repair in Nice, Alpes-Maritimes | Dantès`
- **Contenu à rédiger, pour chacune des 4 pages**
  - [ ] `[RÉDIGER]` Villes desservies et délai d'intervention depuis Carros (100 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Particularités locales : accès en centre-ville, arrière-pays, chantiers portuaires, etc. (100 mots)
  - [ ] `[RÉDIGER]` Un exemple d'intervention réalisée dans le département (80 mots) `[CONFIRMER]`
  - [ ] `[RÉDIGER]` Rappel des services avec liens
  - [ ] `[TRADUIRE]`
- **Volume cible** : 350 mots par page et par langue
- **Attention** : chaque page doit avoir un contenu réellement différent. Quatre pages identiques où seul le nom du département change sont contre-productives.

| Page | Villes à citer |
|---|---|
| P17 Alpes-Maritimes | Nice, Cannes, Antibes, Grasse, Cagnes-sur-Mer, Menton, Carros |
| P18 Var | Toulon, Fréjus, Saint-Raphaël, Draguignan, Hyères |
| P19 Bouches-du-Rhône | Marseille, Aix-en-Provence, Aubagne, Martigues |
| P20 Alpes-de-Haute-Provence | Digne-les-Bains, Manosque, Sisteron |

### P21. Réalisations
- **Title FR** : `Réalisations : réparations et restaurations | Dantès`
- **Title EN** : `Our Work: Repairs & Refurbishments | Dantès`
- [ ] `[RÉDIGER]` Introduction (60 mots)
- [ ] `[RÉDIGER]` **4 à 6 fiches au lancement** : machine, problème, travaux réalisés, durée, photos avant / après (120 mots par fiche) `[CONFIRMER]`
- [ ] `[TRADUIRE]`

### P22. À propos
- **Title FR** : `À propos de Dantès, spécialiste du levage à Carros (06)`
- **Title EN** : `About Dantès, Lifting Equipment Specialists in Carros`
- [ ] `[RÉDIGER]` Histoire de l'entreprise et date de création (120 mots) `[CONFIRMER]`
- [ ] `[RÉDIGER]` Équipe : prénoms, métiers, années d'expérience (100 mots) `[CONFIRMER]`
- [ ] `[RÉDIGER]` Atelier et fourgon d'intervention (80 mots)
- [ ] `[RÉDIGER]` Certifications, habilitations, formations constructeurs `[CONFIRMER]`
- [ ] `[RÉDIGER]` Origine du nom et du slogan (40 mots)
- [ ] `[TRADUIRE]`
- **Volume cible** : 400 mots par langue

### P23. FAQ
- **Title FR** : `Questions fréquentes sur l'entretien du levage | Dantès`
- **Title EN** : `Lifting Equipment Maintenance FAQ | Dantès`
- [ ] `[RÉDIGER]` 10 à 12 questions avec réponse de 50 à 80 mots `[CONFIRMER]` les réponses chiffrées
  - Dans quels départements intervenez-vous ?
  - Sous quel délai pouvez-vous intervenir ?
  - Quelles marques réparez-vous ?
  - Combien coûte un déplacement ?
  - Proposez-vous un contrat d'entretien ?
  - Réalisez-vous les vérifications périodiques ?
  - Reprenez-vous l'ancien matériel ?
  - Le matériel d'occasion est-il garanti ?
  - Pouvez-vous fournir les pièces détachées ?
  - Prêtez-vous ou louez-vous une machine pendant la réparation ?
- [ ] `[TRADUIRE]`
- **À prévoir techniquement** : données structurées FAQPage

### P24. Contact
- **Title FR** : `Contact et devis | Dantès, matériel de levage à Carros (06)`
- **Title EN** : `Contact & Quotes | Dantès, Lifting Equipment, Carros`
- **Contenu repris** : introduction et meta description (section 3.5)
- [ ] `[RÉDIGER]` Horaires, plan d'accès, indications pour les poids lourds (60 mots) `[CONFIRMER]`
- [ ] `[RÉDIGER]` Libellés et messages du formulaire dans les deux langues, mention RGPD sous le bouton
- [ ] `[RÉDIGER]` Champ "Type de demande" : dépannage, devis, achat, autre
- [ ] `[TRADUIRE]`
- **À prévoir techniquement** : carte Google intégrée, redirection vers P29 après envoi

### P25. Conseils (blog)
- **Title FR** : `Conseils d'entretien du matériel de levage | Dantès`
- **Title EN** : `Lifting Equipment Maintenance Advice | Dantès`
- [ ] `[RÉDIGER]` 3 articles au lancement, 600 à 800 mots chacun, puis un par mois. Premiers sujets :
  - Vérification périodique d'une nacelle : ce que dit la réglementation
  - Nacelle araignée ou camion nacelle : laquelle choisir ?
  - 5 signes qu'un circuit hydraulique doit être contrôlé
  - Acheter une mini-grue d'occasion : les points à vérifier
- [ ] `[TRADUIRE]`

### P26. Mentions légales
- [ ] `[RÉDIGER]` Raison sociale, forme juridique, capital, SIRET, RCS, TVA, siège, responsable de publication, hébergeur `[CONFIRMER]`
- [ ] `[TRADUIRE]`

### P27. Politique de confidentialité
- [ ] `[RÉDIGER]` Données collectées par le formulaire, finalité, durée de conservation, droits, contact, cookies `[CONFIRMER]`
- [ ] `[TRADUIRE]`
- **À prévoir techniquement** : bandeau de consentement si un outil de mesure d'audience est installé

### P28. Page 404
- [ ] `[RÉDIGER]` Message court, liens vers l'accueil, les services et le contact (30 mots)
- [ ] `[TRADUIRE]`

### P29. Confirmation de formulaire
- [ ] `[RÉDIGER]` Message de remerciement, délai de réponse, rappel du téléphone pour les urgences (40 mots) `[CONFIRMER]` le délai
- [ ] `[TRADUIRE]`
- Page à exclure de l'indexation

---

## 6. Récapitulatif de la rédaction à prévoir

| Lot | Pages | Mots à écrire en français | Dont existant réutilisable |
|---|---|---|---|
| Accueil et services | P01 à P06 | environ 2 600 | environ 580 |
| Occasion | P07 | 120 + 80 par machine | 0 |
| Matériels | P08 à P10 | environ 1 350 | 0 |
| Marques | P11 à P15 | environ 1 600 | environ 60 |
| Zones | P16 à P20 | environ 1 600 | 0 |
| Réalisations | P21 | environ 600 | 0 |
| À propos, FAQ, Contact | P22 à P24 | environ 1 300 | environ 30 |
| Conseils | P25 | environ 2 100 (3 articles) | 0 |
| Pages légales et utilitaires | P26 à P29 | environ 900 | 0 |
| **Total** | **29 pages** | **environ 12 000 mots** | **environ 670** |

À cela s'ajoutent :
- **La traduction anglaise de l'ensemble**, soit environ 12 000 mots de plus. L'accueil anglais actuel sert de base pour une centaine de mots.
- **58 titles et 58 meta descriptions** (29 pages, 2 langues). 5 descriptions françaises existent déjà.
- **Les textes alternatifs** de chaque image, dans les deux langues.
- **Les textes d'interface** : menu, pied de page, boutons, formulaire, bandeau cookies.

---

## 7. Informations à réunir auprès de l'entreprise

Sans ces éléments, une bonne partie des pages ne peut pas être rédigée.

- [ ] Nom commercial définitif et adresse exacte
- [ ] Raison sociale, SIRET, forme juridique, hébergeur du futur site
- [ ] Horaires d'ouverture et horaires de dépannage
- [ ] Date de création, histoire, nombre de techniciens
- [ ] Certifications, habilitations, formations constructeurs
- [ ] Statut officiel auprès de Jekko, Socage, Cormach et CELA
- [ ] Liste des marques réparées en dehors des partenaires
- [ ] Types de machines réellement pris en charge
- [ ] Pannes et interventions les plus fréquentes
- [ ] Délais d'intervention par département, Monaco inclus ou non
- [ ] Vérifications périodiques : réalisées, préparées ou non proposées
- [ ] Contrat de maintenance : formules et contenu
- [ ] Pièces détachées, location ou prêt de machine, reprise, financement : proposés ou non
- [ ] Stock de matériel d'occasion avec caractéristiques et photos
- [ ] 4 à 6 chantiers à présenter, avec photos avant / après
- [ ] 3 à 5 avis clients, avec accord pour publication
- [ ] Droits d'usage des photos fabricants et de la photo "Mediaco"
- [ ] Lien de la fiche Google Business Profile et des réseaux sociaux

---

## 8. Redirections à mettre en place le jour de la bascule

Chaque ancienne adresse doit rediriger en 301 vers la nouvelle, sinon le peu de référencement acquis est perdu.

| Ancienne adresse | Nouvelle adresse |
|---|---|
| `/maintenance-sur-site` | inchangée |
| `/vente-neuf-ou-occasion` | inchangée |
| `/restauration-en-atelier` | inchangée |
| `/contactus` | `/contact` |
| `/#Nous-Contacter` | lien de menu à remplacer par `/contact` |
| `/en_GB` | `/en/` |
| `/en_GB/maintenance-sur-site` | `/en/on-site-maintenance` |
| `/en_GB/vente-neuf-ou-occasion` | `/en/new-used-equipment` |
| `/en_GB/restauration-en-atelier` | `/en/workshop-refurbishment` |
| `/en_GB/contactus` | `/en/contact` |
| `/website/info` | `/` |
| `dantes1.odoo.com` (toutes les pages) | `www.dantes-sud.fr`, ou fermeture de l'adresse |

---

## 9. Contrôles techniques avant mise en ligne

- [ ] Un seul H1 par page, titres H2 et H3 dans l'ordre
- [ ] Title (50 à 60 caractères) et meta description (140 à 160) uniques sur les 58 pages
- [ ] `hreflang` fr, en et x-default sur chaque page, URL canonique propre à chaque langue
- [ ] Attribut de langue correct sur chaque version (`lang="fr"`, `lang="en"`)
- [ ] Sitemap contenant les deux langues, sans page bloquée ni page utilitaire
- [ ] robots.txt en un seul bloc, P29 exclue de l'indexation
- [ ] Données structurées : LocalBusiness sur l'accueil et le contact, FAQPage sur la FAQ, fil d'Ariane sur les pages internes, fiche produit sur les annonces d'occasion
- [ ] Images en WebP, renommées, avec dimensions déclarées, chargement différé sous la ligne de flottaison, texte alternatif dans les deux langues
- [ ] Image de partage propre à chaque page, hébergée sur le domaine principal
- [ ] Liens téléphone au format `tel:+33765805914`
- [ ] Aucun texte de démonstration, aucun lien vers `#`
- [ ] Mentions légales et politique de confidentialité liées dans le pied de page
- [ ] Redirections 301 de la section 8 testées une par une
- [ ] Google Search Console ouverte, sitemap soumis, fiche Google Business Profile reliée
- [ ] Mesure de vitesse sur mobile (pagespeed.web.dev) avant et après la bascule
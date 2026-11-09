/** Company facts. Values marked CONFIRMER in REQUIREMENT.MD must be validated by the company. */
export const company = {
	name: 'DANTÈS',
	// Nombre de techniciens affiché sur le site (4 en janvier 2027).
	technicians: 3,
	phone: '07 65 80 59 14',
	tel: 'tel:+33765805914',
	email: 'contact@dantes-sud.fr',
	street: '15e rue, 1re avenue',
	postalCode: '06510',
	city: 'Carros',
	// Coordonnées de la fiche Google Business « Dantès, 15ème Rue ».
	geo: { lat: 43.8023076, lng: 7.1955513 },
	// Requête carte : fait pointer Google sur la fiche entreprise.
	mapQuery: 'Dantès, 15ème Rue, 06510 Carros',
};

/** Mentions légales (source : SIRENE). Capital vide = ligne masquée, à confirmer. */
export const legal = {
	name: 'DANTES',
	form: 'SARL',
	capital: '',
	siret: '913 965 737 00038',
	rcs: 'RCS Grasse 913 965 737',
	vat: 'FR66913965737',
	publisher: 'Clément Lacombe-Fabre',
	host: 'Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis',
};

/** Horaires d'ouverture (lun–ven). Sam–dim fermé. */
export const hours = { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:00' };

/** Empty string = not provided yet: the matching icon / block stays hidden. */
export const social = {
	linkedin: 'https://www.linkedin.com/company/dantes/',
	instagram: 'https://www.instagram.com/dantes_sud06/',
	gbp: 'https://share.google/OI4JEnTlMrGNkRknA', // fiche Google Business Profile
	// Posts Instagram affichés sur l'accueil (photo téléchargée dans public/images/instagram, légende = alt). Vide = bouton profil seul.
	instagramPosts: [
		{ url: 'https://www.instagram.com/p/DOtaSxyDP-b/', image: '/images/instagram/DOtaSxyDP-b.webp', alt: 'Intervention sur un Bobcat S185 et une Komatsu PC26' },
		{ url: 'https://www.instagram.com/p/DOv2jMXjMM3/', image: '/images/instagram/DOv2jMXjMM3.webp', alt: 'Essai de la nouvelle nacelle araignée Socage Raptor 24s' },
		{ url: 'https://www.instagram.com/p/DU_LKngDB__/', image: '/images/instagram/DU_LKngDB__.webp', alt: "Réception d'un plateau porte-engins pour notre client CVIM" },
	] as { url: string; image: string; alt: string }[],
};

/** Optional proof blocks, hidden while empty. */
export const proof = {
	clients: [] as { name: string; logo: string }[], // logos clients, après accord
	googleReviewsUrl: '', // widget / lien avis Google
};

/** Partner sites. Empty url = no link shown. */
export const partners = {
	jekko: { url: 'https://www.jekko.it', logo: '/images/logo-jekko.svg' },
	socage: { url: 'https://www.socage.com', logo: '/images/logo-socage.webp' },
	cormach: { url: 'https://www.cormach.com', logo: '/images/logo-cormach.webp' },
	cela: { url: 'https://www.cela.it', logo: '/images/logo-cela.webp' },
	cornut: { url: '', logo: '' },
};

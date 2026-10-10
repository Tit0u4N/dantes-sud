/** Company facts. Values marked CONFIRMER in REQUIREMENT.MD must be validated by the company. */
export const company = {
	name: 'DANTÈS',
	phone: '07 65 80 59 14',
	tel: 'tel:+33765805914',
	email: 'contact@dantes-sud.fr',
	street: '15e rue, 1re avenue',
	postalCode: '06510',
	city: 'Carros',
	geo: { lat: 43.7936, lng: 7.1863 },
};

/** Empty string = not provided yet: the matching icon / block stays hidden. */
export const social = {
	linkedin: '', // URL page LinkedIn entreprise (à fournir)
	instagram: '', // URL compte Instagram (à fournir)
	gbp: '', // URL fiche Google Business Profile (à fournir)
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

import { pathFor } from '../src/i18n/routes';

interface Env {
	ASSETS: Fetcher;
	RESEND_API_KEY: string;
	MAIL_FROM: string;
	MAIL_TO: string;
	MAIL_SUBJECT_PREFIX?: string;
}

const MAX_PHOTO = 8 * 1024 * 1024;
const fields = [
	['name', 'Nom', true, 200],
	['phone', 'Téléphone', true, 50],
	['company', 'Société', false, 200],
	['machine', 'Machine', true, 200],
	['email', 'E-mail', false, 200],
	['city', "Ville d'intervention", true, 200],
	['message', 'Message', true, 5000],
] as const;

type Field = (typeof fields)[number][0];

export default {
	async fetch(req, env): Promise<Response> {
		const url = new URL(req.url);
		if (url.pathname === '/api/contact') {
			if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
			return contact(req, env);
		}
		return env.ASSETS.fetch(req);
	},
} satisfies ExportedHandler<Env>;

async function contact(req: Request, env: Env): Promise<Response> {
	const wantsJson = (req.headers.get('Accept') ?? '').includes('application/json');
	let form: FormData;
	try {
		form = await req.formData();
	} catch {
		return fail(wantsJson, 400, 'invalid_body');
	}
	const locale = form.get('locale') === 'en' ? 'en' : 'fr';
	const done = () =>
		wantsJson ? Response.json({ ok: true }) : Response.redirect(new URL(pathFor('thanks', locale), req.url).toString(), 303);

	// Honeypot: bots fill every field; pretend success.
	if (str(form.get('website'))) return done();

	const values = {} as Record<Field, string>;
	for (const [key, , required, max] of fields) {
		const v = str(form.get(key));
		if ((required && !v) || v.length > max) return fail(wantsJson, 400, `invalid_${key}`);
		values[key] = v;
	}
	if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return fail(wantsJson, 400, 'invalid_email');

	const attachments: { filename: string; content: string }[] = [];
	const photo = form.get('photo');
	if (photo instanceof File && photo.size > 0) {
		if (photo.size > MAX_PHOTO) return fail(wantsJson, 413, 'photo_too_big');
		if (!photo.type.startsWith('image/')) return fail(wantsJson, 400, 'invalid_photo');
		attachments.push({ filename: photo.name || 'photo', content: base64(await photo.arrayBuffer()) });
	}

	const rows = fields.filter(([key]) => values[key]);
	const html = `<h2>Nouvelle demande de contact (${locale.toUpperCase()})</h2><table cellpadding="6">${rows
		.map(([key, label]) => `<tr><th align="left" valign="top">${label}</th><td>${escape(values[key]).replace(/\n/g, '<br>')}</td></tr>`)
		.join('')}</table>`;
	const text = rows.map(([key, label]) => `${label} : ${values[key]}`).join('\n');

	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({
			from: env.MAIL_FROM,
			to: [env.MAIL_TO],
			reply_to: values.email || undefined,
			subject: `${env.MAIL_SUBJECT_PREFIX ?? ''}Demande de contact – ${values.name} – ${values.machine}`,
			html,
			text,
			attachments: attachments.length ? attachments : undefined,
		}),
	});
	if (!res.ok) {
		console.error('Resend error', res.status, await res.text());
		return fail(wantsJson, 502, 'send_failed');
	}
	return done();
}

function fail(wantsJson: boolean, status: number, error: string): Response {
	return wantsJson ? Response.json({ ok: false, error }, { status }) : new Response(error, { status });
}

function str(v: string | File | null): string {
	return typeof v === 'string' ? v.trim() : '';
}

function escape(s: string): string {
	return s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function base64(buf: ArrayBuffer): string {
	const bytes = new Uint8Array(buf);
	let bin = '';
	for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
	return btoa(bin);
}

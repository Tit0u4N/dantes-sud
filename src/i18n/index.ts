import i18next from 'i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

const instance = i18next.createInstance();
await instance.init({
	resources: { fr: { translation: fr }, en: { translation: en } },
	fallbackLng: defaultLocale,
	interpolation: { escapeValue: false },
});

/** Returns a `t` function bound to the given locale. */
export function useTranslations(locale: string | undefined) {
	return instance.getFixedT(locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale);
}

/** Reads an array/object value from the locale files with its type. */
export function data<T>(t: ReturnType<typeof useTranslations>, key: string): T {
	return t(key, { returnObjects: true }) as unknown as T;
}

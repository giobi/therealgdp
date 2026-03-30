import en from './en.json';
import it from './it.json';

const translations: Record<string, typeof en> = { en, it };

export function t(locale: string, key: string): string {
  const keys = key.split('.');
  let val: any = translations[locale] || translations['en'];
  for (const k of keys) {
    val = val?.[k];
  }
  return val || key;
}

export function getLocaleFromUrl(url: URL): string {
  const [, locale] = url.pathname.split('/');
  if (locale === 'it') return 'it';
  return 'en';
}

export function getOtherLocale(locale: string): string {
  return locale === 'en' ? 'it' : 'en';
}

import { en } from "./messages/en";
import { defaultLocale, type Locale } from "./config";

export type { Locale } from "./config";
export { locales, defaultLocale } from "./config";

// The type every locale's messages file must satisfy. When es.ts is
// added, typing it `const es: Messages = {...}` makes TypeScript list
// every missing or mismatched key instead of failing silently at
// runtime with an undefined string somewhere on the page.
export type Messages = typeof en;

const messagesByLocale: Record<Locale, Messages> = {
  en,
};

// No `locale` argument yet since only one locale exists — callers already
// pass nothing, matching how this will read once request-based locale
// resolution (e.g. from a `[locale]` route segment) is wired in later.
export function getMessages(locale: Locale = defaultLocale): Messages {
  return messagesByLocale[locale];
}

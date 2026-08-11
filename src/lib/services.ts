// Identity and ordering only — locale-independent. Display text (name,
// headline, covers, etc.) lives in src/i18n/messages/*.ts, keyed by
// these same slugs, so it can be translated without touching this file.
export const SERVICE_SLUGS = [
  "tax-strategy",
  "cfo-financial-advisory",
  "entity-architecture",
  "corporate-tax-accounting",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

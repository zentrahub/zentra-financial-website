// English-only for launch — see 00_Project_Docs/PROJECT_ROADMAP.md Phase 4.
// Adding a locale means: add it here, add its file under ./messages, and
// TypeScript will point out every key `getMessages` needs filled in
// (see the `Messages` type check in ./messages/index.ts). No component
// changes should be required.
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

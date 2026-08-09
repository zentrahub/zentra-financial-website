# Zentra Financial — Website

Public marketing site for Zentra Financial (premium tax strategy & financial
advisory). Next.js (App Router) + TypeScript + Tailwind CSS v4.

This is **not** the client workspace — documents, invoices, messages, and
records live in TaxDome. This site's only job is to establish authority,
communicate premium positioning, explain what Zentra does, and let
qualified prospects request a consultation.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes, layout, metadata, `robots.ts` / `sitemap.ts`
- `src/components` — `Header`, `Footer`, `ConsultationProvider` (the
  private-consultation-request dialog and its trigger context)
- `src/components/sections` — homepage sections (Hero, Expertise,
  Positioning, Who We Work With, Advisory Approach, Selective Engagement)
- `src/components/marks` — inline SVG brand marks, copied from the
  approved assets in `../01_Brand` — do not redraw or recolor them

## Current design direction

"The Plate" — see the design-direction artifacts from the project chat for
the other directions considered. Palette is intentionally limited to what
exists in the approved logo package: black, white, gray, and the two teals
(`#0f705f` primary, `#124640` from the Solid-Vertical lockup).

## Consultation form

Submissions POST to `src/app/api/consultation/route.ts`, which emails the
request to `hello@zentrafinancial.com` via Gmail SMTP (nodemailer),
authenticated as whatever account you put in `GMAIL_USER` — not a new
third-party vendor, not REOS's credentials (those are a separate Google
Cloud OAuth app tied to Bradley Capital Group's connected mailbox; reusing
them here would cross the two clients' infrastructure). Copy
`.env.example` to `.env.local` and fill in `GMAIL_USER` +
`GMAIL_APP_PASSWORD` (a Gmail App Password, not your login password) to
make it live. Until then the API route responds with a clear 503 instead
of silently pretending to succeed.

## Known gaps

- "Client Portal" links are placeholders (`href="#"`) until the firm's
  actual TaxDome tenant URL is available.
- This is the homepage only (Phase 1). Service pages, Insights, Spanish
  localization, and the resource center are later roadmap phases.

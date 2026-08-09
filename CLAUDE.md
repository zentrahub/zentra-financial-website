@AGENTS.md

# Zentra Financial — Website

Brand spelling: Zentra Financial. Premium tax strategy and financial
advisory firm for established business owners. Never position this as a
tax preparation office.

Priority services (Expertise section, in this order): Tax Strategy, CFO &
Financial Advisory, Entity Architecture, Corporate Tax & Accounting.

Target clients: established business owners, entrepreneurs, international
founders, contractors, investors — six-figure income or higher,
seven-figure business revenue or growth trajectory, multiple entities or
increasing complexity.

## Exclusivity — hard rule, not a style choice

The site must communicate that Zentra works selectively, without sounding
arrogant or inaccessible.

- Primary CTA: "Request a Private Consultation"
- Alternate CTA: "Apply to Work With Us"
- Secondary: "Client Portal"
- Never: "Book Now", "Get a Quote", "Call Us Today", "Free Consultation"

## Technical rules

- Never expose secrets.
- Website is public-facing only — no auth, no database. TaxDome is the
  client portal; do not replicate TaxDome features here.
- Reuse infrastructure patterns from `../04_Reference/reos` (Next.js App
  Router conventions, CSS-token theming approach, font-loading via
  `next/font`) — not its business logic, stack (Prisma/NextAuth/Supabase),
  or property-management domain.
- Colors and typography must be derived from the official logo assets in
  `../01_Brand`. Use only approved logo files; prefer SVG; never redraw or
  recolor the mark itself.
- Current palette is intentionally limited to what exists in the approved
  logo package: black, white, gray, `#0f705f` (primary teal), `#124640`
  (Solid-Vertical lockup's deeper teal). Don't introduce new hues without
  it being a deliberate, called-out brand decision.

## Deployment (not yet done)

- Domain: www.zentrafinancial.com, registrar stays GoDaddy.
- Preserve Google Workspace DNS — change only the records needed for
  hosting, via A/CNAME only.
- Enable HTTPS.
